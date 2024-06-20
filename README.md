# Clothing XML Maximums

Parses `.xml` files and returns maximums for clothing and props.

## Usage

1. Export `ymt` files as `xml`
2. Load files into the folder called `files`
3. Run this script
4. Data spit out to `cltohes.json`

Enjoy.

## File List

This is what you'll need to get out of CodeWalker or OpenIV.

If new DLCs come out, just look for the prefixed `mp_f_x` or `mp_m_x` files.

Make sure to `CONVERT TO XML` when you export.

```ts
[
    './files/mp_f_freemode_01_female_apt01.ymt.xml',
    './files/mp_f_freemode_01_female_freemode_beach.ymt.xml',
    './files/mp_f_freemode_01_female_freemode_business.ymt.xml',
    './files/mp_f_freemode_01_female_freemode_business2.ymt.xml',
    './files/mp_f_freemode_01_female_freemode_halloween.ymt.xml',
    './files/mp_f_freemode_01_female_freemode_hipster.ymt.xml',
    './files/mp_f_freemode_01_female_freemode_independence.ymt.xml',
    './files/mp_f_freemode_01_female_freemode_mplts.ymt.xml',
    './files/mp_f_freemode_01_female_freemode_pilot.ymt.xml',
    './files/mp_f_freemode_01_female_freemode_valentines.ymt.xml',
    './files/mp_f_freemode_01_female_heist.ymt.xml',
    './files/mp_f_freemode_01_female_xmas.ymt.xml',
    './files/mp_f_freemode_01_female_xmas2.ymt.xml',
    './files/mp_f_freemode_01_mp_f_2023_01.ymt.xml',
    './files/mp_f_freemode_01_mp_f_2023_02.ymt.xml',
    './files/mp_f_freemode_01_mp_f_airraces_01.ymt.xml',
    './files/mp_f_freemode_01_mp_f_assault.ymt.xml',
    './files/mp_f_freemode_01_mp_f_battle.ymt.xml',
    './files/mp_f_freemode_01_mp_f_bikerdlc_01.ymt.xml',
    './files/mp_f_freemode_01_mp_f_christmas2017.ymt.xml',
    './files/mp_f_freemode_01_mp_f_christmas2018.ymt.xml',
    './files/mp_f_freemode_01_mp_f_christmas3.ymt.xml',
    './files/mp_f_freemode_01_mp_f_executive_01.ymt.xml',
    './files/mp_f_freemode_01_mp_f_g9ec.ymt.xml',
    './files/mp_f_freemode_01_mp_f_gunrunning_01.ymt.xml',
    './files/mp_f_freemode_01_mp_f_gunrunning_hair_01.ymt.xml',
    './files/mp_f_freemode_01_mp_f_heist3.ymt.xml',
    './files/mp_f_freemode_01_mp_f_heist4.ymt.xml',
    './files/mp_f_freemode_01_mp_f_htb_01.ymt.xml',
    './files/mp_f_freemode_01_mp_f_importexport_01.ymt.xml',
    './files/mp_f_freemode_01_mp_f_january2016.ymt.xml',
    './files/mp_f_freemode_01_mp_f_lowrider_01.ymt.xml',
    './files/mp_f_freemode_01_mp_f_lowrider_02.ymt.xml',
    './files/mp_f_freemode_01_mp_f_luxe_01.ymt.xml',
    './files/mp_f_freemode_01_mp_f_luxe_02.ymt.xml',
    './files/mp_f_freemode_01_mp_f_security.ymt.xml',
    './files/mp_f_freemode_01_mp_f_smuggler_01.ymt.xml',
    './files/mp_f_freemode_01_mp_f_stunt_01.ymt.xml',
    './files/mp_f_freemode_01_mp_f_sum.ymt.xml',
    './files/mp_f_freemode_01_mp_f_sum2.ymt.xml',
    './files/mp_f_freemode_01_mp_f_sum2_g9ec.ymt.xml',
    './files/mp_f_freemode_01_mp_f_tuner.ymt.xml',
    './files/mp_f_freemode_01_mp_f_valentines_02.ymt.xml',
    './files/mp_f_freemode_01_mp_f_vinewood.ymt.xml',
    './files/mp_f_freemode_01_mp_f_xmas_03.ymt.xml',
    './files/mp_m_freemode_01_male_apt01.ymt.xml',
    './files/mp_m_freemode_01_male_freemode_beach.ymt.xml',
    './files/mp_m_freemode_01_male_freemode_business.ymt.xml',
    './files/mp_m_freemode_01_male_freemode_business2.ymt.xml',
    './files/mp_m_freemode_01_male_freemode_halloween.ymt.xml',
    './files/mp_m_freemode_01_male_freemode_hipster.ymt.xml',
    './files/mp_m_freemode_01_male_freemode_independence.ymt.xml',
    './files/mp_m_freemode_01_male_freemode_mplts.ymt.xml',
    './files/mp_m_freemode_01_male_freemode_pilot.ymt.xml',
    './files/mp_m_freemode_01_male_freemode_valentines.ymt.xml',
    './files/mp_m_freemode_01_male_heist.ymt.xml',
    './files/mp_m_freemode_01_male_xmas.ymt.xml',
    './files/mp_m_freemode_01_male_xmas2.ymt.xml',
    './files/mp_m_freemode_01_mp_m_2023_01.ymt.xml',
    './files/mp_m_freemode_01_mp_m_2023_02.ymt.xml',
    './files/mp_m_freemode_01_mp_m_airraces_01.ymt.xml',
    './files/mp_m_freemode_01_mp_m_assault.ymt.xml',
    './files/mp_m_freemode_01_mp_m_battle.ymt.xml',
    './files/mp_m_freemode_01_mp_m_bikerdlc_01.ymt.xml',
    './files/mp_m_freemode_01_mp_m_christmas2017.ymt.xml',
    './files/mp_m_freemode_01_mp_m_christmas2018.ymt.xml',
    './files/mp_m_freemode_01_mp_m_christmas3.ymt.xml',
    './files/mp_m_freemode_01_mp_m_executive_01.ymt.xml',
    './files/mp_m_freemode_01_mp_m_g9ec.ymt.xml',
    './files/mp_m_freemode_01_mp_m_gunrunning_01.ymt.xml',
    './files/mp_m_freemode_01_mp_m_gunrunning_hair_01.ymt.xml',
    './files/mp_m_freemode_01_mp_m_heist3.ymt.xml',
    './files/mp_m_freemode_01_mp_m_heist4.ymt.xml',
    './files/mp_m_freemode_01_mp_m_heist_01.ymt.xml',
    './files/mp_m_freemode_01_mp_m_htb_01.ymt.xml',
    './files/mp_m_freemode_01_mp_m_importexport_01.ymt.xml',
    './files/mp_m_freemode_01_mp_m_january2016.ymt.xml',
    './files/mp_m_freemode_01_mp_m_lowrider_01.ymt.xml',
    './files/mp_m_freemode_01_mp_m_lowrider_02.ymt.xml',
    './files/mp_m_freemode_01_mp_m_luxe_01.ymt.xml',
    './files/mp_m_freemode_01_mp_m_luxe_02.ymt.xml',
    './files/mp_m_freemode_01_mp_m_security.ymt.xml',
    './files/mp_m_freemode_01_mp_m_smuggler_01.ymt.xml',
    './files/mp_m_freemode_01_mp_m_stunt_01.ymt.xml',
    './files/mp_m_freemode_01_mp_m_sum.ymt.xml',
    './files/mp_m_freemode_01_mp_m_sum2.ymt.xml',
    './files/mp_m_freemode_01_mp_m_sum2_g9ec.ymt.xml',
    './files/mp_m_freemode_01_mp_m_tuner.ymt.xml',
    './files/mp_m_freemode_01_mp_m_valentines_02.ymt.xml',
    './files/mp_m_freemode_01_mp_m_vinewood.ymt.xml',
    './files/mp_m_freemode_01_mp_m_xmas_03.ymt.xml',
];
```
