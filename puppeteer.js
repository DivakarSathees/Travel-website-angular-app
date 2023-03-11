const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-dffafdafebcfacbdcbaeafafbecbbd.project.examly.io/');
    await page.setViewport({ width:1100, height:600, })
    // await page.screenshot({path: 'example.png'});
    
    await page.click('#about');
    // await page.screenshot({path: 'example1.png'});

    // await page.waitForNavigation({ timeout: 6000 });
    // await page.screenshot({path: 'example1.png'});

    const url1 = page.url();
    if (url1.match(/\/about$/)) {
      console.log('Test case 1 passed!');
    } else {
      console.error('Test case 1 failed!');
    }
    }
    catch(e){
      console.log(e);
      console.log('TESTCASE:test_case1:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try{
      await page.goto('https://8081-dffafdafebcfacbdcbaeafafbecbbd.project.examly.io/');
      await page.setViewport({ width:1100, height:600, })
      // await page.screenshot({path: 'example.png'});
      await page.click('#contact');
    //   await page.waitForNavigation();
      const url3 = page.url();
      if (url3.match(/\/contact$/)) {
        console.log('Test case 2 passed!');
      } else {
        console.error('Test case 2 failed!');
      }
    }
    catch(e){
      console.log(e);
      console.log('TESTCASE:test_case2:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try{
      await page.goto('https://8081-dffafdafebcfacbdcbaeafafbecbbd.project.examly.io/');
      await page.setViewport({ width:1100, height:600, })
      // await page.screenshot({path: 'example.png'});
      await page.click('#home');
    //   await page.waitForNavigation();
      const url3 = page.url();
      if (url3.match(/\/$/)) {
        console.log('Test case 3 passed!');
      } else {
        console.error('Test case 3 failed!');
      }
    }
    catch(e){
      console.log(e);
      console.log('TESTCASE:test_case3:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try{
      await page.goto('https://8081-dffafdafebcfacbdcbaeafafbecbbd.project.examly.io/');
      await page.setViewport({ width:1100, height:600, })
      // await page.screenshot({path: 'example.png'});
      await page.click('#destination');
    //   await page.waitForNavigation();
      const url3 = page.url();
      if (url3.match(/\/destination$/)) {
        console.log('Test case 4 passed!');
      } else {
        console.error('Test case 4 failed!');
      }
    }
    catch(e){
      console.log(e);
      console.log('TESTCASE:test_case4:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try{
      await page.goto('https://8081-dffafdafebcfacbdcbaeafafbecbbd.project.examly.io/');
      await page.setViewport({ width:1100, height:600, })
      // await page.screenshot({path: 'example.png'});

      await page.goto('https://8081-dffafdafebcfacbdcbaeafafbecbbd.project.examly.io/invalid');
      // await page.screenshot({path: 'example5.png'});
      const url3 = page.url();
      if (url3.match(/\/$/)) {
        console.log('Test case 5 passed!');
      } else {
        console.error('Test case 5 failed!');
      }
    }
    catch(e){
      console.log(e);
      console.log('TESTCASE:test_case5:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();
  
