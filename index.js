const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    /*
    Sequence of activities
    */

    /*
    Get data from echis
    Use the following link to get eCHIS data
    http://localhost:3003/

    Use NodeJS request/http library
    */



    /*
Make data agregation

FP_CAR_Mtd_2_7: 2,
fp_new_at_10_to_14: SUM,
fp_new_at_15_to_19: SUM,
fp_new_at_20_to_24: SUM,
fp_new_at_25_to_29: SUM,
fp_new_at_30_to_49: SUM,
fp_new_implants: SUM,
fp_new_injectables: SUM,
fp_new_iucd: SUM,
fp_new_oral_contraceptives: SUM,
fp_repeat_at_10_to_14: SUM,
fp_repeat_at_15_to_19: SUM,
fp_repeat_at_20_to_24: SUM,
fp_repeat_at_25_to_29: SUM,
fp_repeat_at_30_to_49: SUM,
fp_repeat_implants: SUM,
fp_repeat_injectables: SUM,
fp_repeat_iucd: SUM,
fp_repeat_oral_contraceptives: SUM,
    */



    /*
Transformation: convert the above agregate data to DHIS2 format
check the DHIS2 input.json file for formating information
    */


    /*
Submit the agregated data to DHIS2
    */


    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})