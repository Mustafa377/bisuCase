const fs = require('fs');

async function fixAgGridEnterpriseAmdJS() {
    await new Promise(resolve => {
        fs.readFile('./node_modules/ag-grid-enterprise/dist/ag-grid-enterprise.amd.js', 'utf8', (err, data) => {
            try {
                if(!err) {
                    var newData = '';

                    // outputInvalidLicenseKey
                    newData = data.split('console.error(\'*****************************************************************************************************************\');').join('//console.error(\'*****************************************************************************************************************\');');
                    newData = newData.replace('console.error(\'***************************************** AG Grid Enterprise License ********************************************\');', '//console.error(\'***************************************** AG Grid Enterprise License ********************************************\');');
                    newData = newData.replace('console.error(\'********************************************* Invalid License ***************************************************\');', '//console.error(\'********************************************* Invalid License ***************************************************\');');
                    newData = newData.replace('console.error(\'* Your license for AG Grid Enterprise is not valid - please contact info@ag-grid.com to obtain a valid license. *\');', '//console.error(\'* Your license for AG Grid Enterprise is not valid - please contact info@ag-grid.com to obtain a valid license. *\');');

                    // outputExpiredTrialKey
                    newData = newData.split('console.error(\'****************************************************************************************************************\');').join('//console.error(\'****************************************************************************************************************\');');
                    newData = newData.split('console.error(\'***************************************** AG Grid Enterprise License *******************************************\');').join('//console.error(\'***************************************** AG Grid Enterprise License *******************************************\');');
                    newData = newData.replace('console.error(\'*****************************************   Trial Period Expired.    *******************************************\');', '//console.error(\'*****************************************   Trial Period Expired.    *******************************************\');');
                    newData = newData.replace('console.error("* Your license for AG Grid Enterprise expired on " + formattedExpiryDate + ".                                                *");', '//console.error("* Your license for AG Grid Enterprise expired on " + formattedExpiryDate + ".                                                *");');
                    newData = newData.replace('console.error(\'* Please email info@ag-grid.com to purchase a license.                                                         *\');', '//console.error(\'* Please email info@ag-grid.com to purchase a license.                                                         *\');');

                    // outputMissingLicenseKey
                    newData = newData.replace('console.error(\'****************************************** License Key Not Found ***********************************************\');', '//console.error(\'****************************************** License Key Not Found ***********************************************\');');
                    newData = newData.replace('console.error(\'* All AG Grid Enterprise features are unlocked.                                                                *\');', '//console.error(\'* All AG Grid Enterprise features are unlocked.                                                                *\');');
                    newData = newData.replace('console.error(\'* This is an evaluation only version, it is not licensed for development projects intended for production.     *\');', '//console.error(\'* This is an evaluation only version, it is not licensed for development projects intended for production.     *\');');
                    newData = newData.replace('console.error(\'* If you want to hide the watermark, please email info@ag-grid.com for a trial license.                        *\');', '//console.error(\'* If you want to hide the watermark, please email info@ag-grid.com for a trial license.                        *\');');

                    // outputIncompatibleVersion
                    newData = newData.split('console.error(\'****************************************************************************************************************************\');').join('//console.error(\'****************************************************************************************************************************\');');
                    newData = newData.replace('console.error(\'*                                             AG Grid Enterprise License                                                   *\');', '//console.error(\'*                                             AG Grid Enterprise License                                                   *\');');
                    newData = newData.replace('console.error(\'*                           License not compatible with installed version of AG Grid Enterprise.                           *\');', '//console.error(\'*                           License not compatible with installed version of AG Grid Enterprise.                           *\');');
                    newData = newData.split('console.error(\'*                                                                                                                          *\');').join('//console.error(\'*                                                                                                                          *\');');
                    newData = newData.replace('console.error("* Your AG Grid License entitles you to all versions of AG Grid that we release within the time covered by your license     *");', '//console.error("* Your AG Grid License entitles you to all versions of AG Grid that we release within the time covered by your license     *");');
                    newData = newData.replace('console.error("* - typically we provide one year licenses which entitles you to all releases / updates of AG Grid within that year.       *");', '//console.error("* - typically we provide one year licenses which entitles you to all releases / updates of AG Grid within that year.       *");');
                    newData = newData.replace('console.error("* Your license has an end (expiry) date which stops the license key working with versions of AG Grid released after the    *");', '//console.error("* Your license has an end (expiry) date which stops the license key working with versions of AG Grid released after the    *");');
                    newData = newData.replace('console.error("* license end date. The license key that you have expires on " + formattedExpiryDate + ", however the version of AG Grid you    *");', '//console.error("* license end date. The license key that you have expires on " + formattedExpiryDate + ", however the version of AG Grid you    *");');
                    newData = newData.replace('console.error("* are trying to use was released on " + formattedReleaseDate + ".                                                               *");', '//console.error("* are trying to use was released on " + formattedReleaseDate + ".                                                               *");');
                    newData = newData.replace('console.error(\'* Please contact info@ag-grid.com to renew your subscription to new versions and get a new license key to work with this   *\');', '//console.error(\'* Please contact info@ag-grid.com to renew your subscription to new versions and get a new license key to work with this   *\');');
                    newData = newData.replace('console.error(\'* version of AG Grid.                                                                                                      *\');', '//console.error(\'* version of AG Grid.                                                                                                      *\');');

                    fs.writeFile('./node_modules/ag-grid-enterprise/dist/ag-grid-enterprise.amd.js', newData, 'utf8', (err) => {
                        if(!err) {
                            resolve(true);
                        }
                    });
                } else {
                    console.log(err);
                }
            } catch (error) {
                console.log(error);
            }
        });
    });
}

async function fixAgGridEnterpriseCjsJS(params) {
    await new Promise(resolve => {
        fs.readFile('./node_modules/ag-grid-enterprise/dist/ag-grid-enterprise.cjs.js', 'utf8', (err, data) => {
            try {
                if(!err) {
                    var newData = '';

                    // outputInvalidLicenseKey
                    newData = data.split('console.error(\'*****************************************************************************************************************\');').join('//console.error(\'*****************************************************************************************************************\');');
                    newData = newData.replace('console.error(\'***************************************** AG Grid Enterprise License ********************************************\');', '//console.error(\'***************************************** AG Grid Enterprise License ********************************************\');');
                    newData = newData.replace('console.error(\'********************************************* Invalid License ***************************************************\');', '//console.error(\'********************************************* Invalid License ***************************************************\');');
                    newData = newData.replace('console.error(\'* Your license for AG Grid Enterprise is not valid - please contact info@ag-grid.com to obtain a valid license. *\');', '//console.error(\'* Your license for AG Grid Enterprise is not valid - please contact info@ag-grid.com to obtain a valid license. *\');');

                    // outputExpiredTrialKey
                    newData = newData.split('console.error(\'****************************************************************************************************************\');').join('//console.error(\'****************************************************************************************************************\');');
                    newData = newData.split('console.error(\'***************************************** AG Grid Enterprise License *******************************************\');').join('//console.error(\'***************************************** AG Grid Enterprise License *******************************************\');');
                    newData = newData.replace('console.error(\'*****************************************   Trial Period Expired.    *******************************************\');', '//console.error(\'*****************************************   Trial Period Expired.    *******************************************\');');
                    newData = newData.replace('console.error("* Your license for AG Grid Enterprise expired on " + formattedExpiryDate + ".                                                *");', '//console.error("* Your license for AG Grid Enterprise expired on " + formattedExpiryDate + ".                                                *");');
                    newData = newData.replace('console.error(\'* Please email info@ag-grid.com to purchase a license.                                                         *\');', '//console.error(\'* Please email info@ag-grid.com to purchase a license.                                                         *\');');

                    // outputMissingLicenseKey
                    newData = newData.replace('console.error(\'****************************************** License Key Not Found ***********************************************\');', '//console.error(\'****************************************** License Key Not Found ***********************************************\');');
                    newData = newData.replace('console.error(\'* All AG Grid Enterprise features are unlocked.                                                                *\');', '//console.error(\'* All AG Grid Enterprise features are unlocked.                                                                *\');');
                    newData = newData.replace('console.error(\'* This is an evaluation only version, it is not licensed for development projects intended for production.     *\');', '//console.error(\'* This is an evaluation only version, it is not licensed for development projects intended for production.     *\');');
                    newData = newData.replace('console.error(\'* If you want to hide the watermark, please email info@ag-grid.com for a trial license.                        *\');', '//console.error(\'* If you want to hide the watermark, please email info@ag-grid.com for a trial license.                        *\');');

                    // outputIncompatibleVersion
                    newData = newData.split('console.error(\'****************************************************************************************************************************\');').join('//console.error(\'****************************************************************************************************************************\');');
                    newData = newData.replace('console.error(\'*                                             AG Grid Enterprise License                                                   *\');', '//console.error(\'*                                             AG Grid Enterprise License                                                   *\');');
                    newData = newData.replace('console.error(\'*                           License not compatible with installed version of AG Grid Enterprise.                           *\');', '//console.error(\'*                           License not compatible with installed version of AG Grid Enterprise.                           *\');');
                    newData = newData.split('console.error(\'*                                                                                                                          *\');').join('//console.error(\'*                                                                                                                          *\');');
                    newData = newData.replace('console.error("* Your AG Grid License entitles you to all versions of AG Grid that we release within the time covered by your license     *");', '//console.error("* Your AG Grid License entitles you to all versions of AG Grid that we release within the time covered by your license     *");');
                    newData = newData.replace('console.error("* - typically we provide one year licenses which entitles you to all releases / updates of AG Grid within that year.       *");', '//console.error("* - typically we provide one year licenses which entitles you to all releases / updates of AG Grid within that year.       *");');
                    newData = newData.replace('console.error("* Your license has an end (expiry) date which stops the license key working with versions of AG Grid released after the    *");', '//console.error("* Your license has an end (expiry) date which stops the license key working with versions of AG Grid released after the    *");');
                    newData = newData.replace('console.error("* license end date. The license key that you have expires on " + formattedExpiryDate + ", however the version of AG Grid you    *");', '//console.error("* license end date. The license key that you have expires on " + formattedExpiryDate + ", however the version of AG Grid you    *");');
                    newData = newData.replace('console.error("* are trying to use was released on " + formattedReleaseDate + ".                                                               *");', '//console.error("* are trying to use was released on " + formattedReleaseDate + ".                                                               *");');
                    newData = newData.replace('console.error(\'* Please contact info@ag-grid.com to renew your subscription to new versions and get a new license key to work with this   *\');', '//console.error(\'* Please contact info@ag-grid.com to renew your subscription to new versions and get a new license key to work with this   *\');');
                    newData = newData.replace('console.error(\'* version of AG Grid.                                                                                                      *\');', '//console.error(\'* version of AG Grid.                                                                                                      *\');');

                    fs.writeFile('./node_modules/ag-grid-enterprise/dist/ag-grid-enterprise.cjs.js', newData, 'utf8', (err) => {
                        if(!err) {
                            resolve(true);
                        }
                    });
                } else {
                    console.log(err);
                }
            } catch (error) {
                console.log(error);
            }
        });
    });
}

fixAgGridEnterpriseAmdJS();
fixAgGridEnterpriseCjsJS();