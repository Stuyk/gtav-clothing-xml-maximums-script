import glob from 'fast-glob';
import fs from 'fs';
import xml from 'xml-js';

// Use OpenIV or CodeWalker to export ymt files as xml
// Uses `mp_m_` ymt files exported as xml
// Uses `mp_f_` ymt files exported as xml
const files = glob.sync('./files/**/*.xml');

const componentData = {};

function cleanup(dlcName) {
    for (let key of Object.keys(componentData[dlcName].clothes)) {
        if (componentData[dlcName].clothes[key] <= -1) {
            delete componentData[dlcName].clothes[key];
        }
    }

    for (let key of Object.keys(componentData[dlcName].props)) {
        if (componentData[dlcName].props[key] <= -1) {
            delete componentData[dlcName].props[key];
        }
    }
}

async function test() {
    console.log(files);

    for (let file of files) {
        const data = xml.xml2js(fs.readFileSync(file, 'utf-8'), {
            compact: true,
        });

        if (!data.CPedVariationInfo._attributes.name) {
            console.log(`Skipped File: ${file}, No DLC Name`);
            continue;
        }

        if (!data.CPedVariationInfo.compInfos.Item) {
            console.log(`Skipped File: ${file}`);
            continue;
        }

        const dlcName = data.CPedVariationInfo._attributes.name;
        if (!componentData[dlcName]) {
            componentData[dlcName] = {
                clothes: {
                    0: -1,
                    1: -1,
                    2: -1,
                    3: -1,
                    4: -1,
                    5: -1,
                    6: -1,
                    7: -1,
                    8: -1,
                    9: -1,
                    10: -1,
                    11: -1,
                },
                props: {
                    0: -1,
                    1: -1,
                    2: -1,
                    6: -1,
                    7: -1,
                },
            };
        }

        for (let item of data.CPedVariationInfo.compInfos.Item) {
            const component = item.pedXml_compIdx._attributes.value;
            const drawable = item.pedXml_drawblIdx._attributes.value;
            if (componentData[dlcName].clothes[component] > drawable) {
                continue;
            }

            componentData[dlcName].clothes[component] = parseInt(drawable) + 1;
        }

        if (!Array.isArray(data.CPedVariationInfo.propInfo.aPropMetaData.Item)) {
            if (!data.CPedVariationInfo.propInfo.aPropMetaData) {
                cleanup(dlcName);
                continue;
            }

            if (!data.CPedVariationInfo.propInfo.aPropMetaData.Item) {
                cleanup(dlcName);
                continue;
            }

            const prop = data.CPedVariationInfo.propInfo.aPropMetaData.Item;
            const component = prop.anchorId._attributes.value;
            const drawable = prop.propId._attributes.value;

            if (componentData[dlcName].props[component] > drawable) {
                cleanup(dlcName);
                continue;
            }

            componentData[dlcName].props[component] = parseInt(drawable) + 1;
            cleanup(dlcName);
            continue;
        }

        for (let prop of data.CPedVariationInfo.propInfo.aPropMetaData.Item) {
            const component = prop.anchorId._attributes.value;
            const drawable = prop.propId._attributes.value;

            if (componentData[dlcName].props[component] > drawable) {
                continue;
            }

            componentData[dlcName].props[component] = parseInt(drawable) + 1;
        }

        cleanup(dlcName);
    }

    fs.writeFileSync('clothes.json', JSON.stringify(componentData, null, '\t'));
}

test();
