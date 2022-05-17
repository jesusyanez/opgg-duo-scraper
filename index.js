const puppeteer = require('puppeteer-extra');
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
puppeteer.use(AdblockerPlugin());




exports.getStats = async (user, region, refresh) => {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const context = browser.defaultBrowserContext();
        context.overridePermissions(`https://${region}.op.gg`, ["geolocation", "notifications"]);
        const page = await browser.newPage();
        if( region === 'kr'){
             await page.goto(`https://www.op.gg/summoner/userName=${user}`)
        }else{
             await page.goto(`https://${region}.op.gg/summoner/userName=${user}`)
        }

        if (refresh === true) {
            
            await page.click('.ejbh9aw1') //update button
            page.on('dialog', async dialog => {
                await dialog.accept();
            });
            await page.waitForSelector('exlvoq30').catch(() => { return "player haven't played recently" }) //game list
            await page.waitForTimeout(2000);
        } else { }

        await page.waitForTimeout(1000);

        const level = await page.$eval('.level', e => e.innerText);
        const image = await page.$eval('.profile-icon img', e => e.src);
        const recentlyPlayedWith = await page.$$eval('.css-15ca8qb > table:nth-child(2) > tbody:nth-child(4) > tr', rows => {
            return Array.from(rows, row => {
              const columns = row.querySelectorAll('td');
              return Array.from(columns, column => column.innerText);
            });
          }).catch(() => { return 'none' });

        recentlyPlayedWith.unshift(['Summoner', 'Games', 'W - L', 'Win Rate']);

        const stats = {
            'Name': user,
            'Level': level,
            'ProfilePic': image,
            'RecentlyPlayedWith': recentlyPlayedWith
        }
        await browser.close();
        return stats
    } catch (e) {
        console.error(e)
    }

}
