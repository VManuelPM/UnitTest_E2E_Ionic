import { browser, element, by, ExpectedConditions } from "protractor";
import { TabsPage } from './tabs.po';

describe("tabs tests", ()  => {

    let tabs: TabsPage
    let url = "";

    beforeEach(()=>{
        tabs = new TabsPage();
    })

    it("Go to Tab 1", () => {
        tabs.navigateTo();
        tabs.clickTab1();
        browser.driver.sleep(500); 
        browser.getCurrentUrl().then(res =>{
            console.log("Current url " + res);
            url = res
            expect(url).toEqual('http://localhost:4200/tabs/tab1');
        });
    })

    it("Go to Tab 2", () => {
        tabs.navigateTo();
        tabs.clickTab2();
        browser.driver.sleep(500); 
        browser.getCurrentUrl().then(res =>{
            console.log("Current url " + res);
            url = res
            expect(url).toEqual('http://localhost:4200/tabs/tab2');
        });
    })

    it("Go to Tab 3", () => {
        tabs.navigateTo();
        tabs.clickTab3();
        browser.driver.sleep(500); 
        browser.getCurrentUrl().then(res =>{
            console.log("Current url " + res);
            url = res
            expect(url).toEqual('http://localhost:4200/tabs/tab3');
        });
    })

    it("Process Back Tab 1", () => {
        tabs.navigateTo();
        browser.driver.sleep(1000); 
        tabs.processTab1();
        browser.driver.sleep(1000); 
        browser.getCurrentUrl().then(res =>{
            console.log("Current url " + res);
            url = res
            expect(url).toEqual('http://localhost:4200/tabs/tab1');
        });
    })

    it("Process Back Tab 2", () => {
        tabs.navigateTo();
        tabs.processTab2();
        browser.driver.sleep(500); 
        browser.getCurrentUrl().then(res =>{
            console.log("Current url " + res);
            url = res
            expect(url).toEqual('http://localhost:4200/tabs/tab2');
        });
    })

    it("Process Back Tab 3", () => {
        tabs.navigateTo();
        tabs.processTab3();
        browser.driver.sleep(500); 
        browser.getCurrentUrl().then(res =>{
            console.log("Current url " + res);
            url = res
            expect(url).toEqual('http://localhost:4200/tabs/tab3');
        });
    })

    it("Process Back Detail", () => {
        tabs.navigateTo();
        tabs.processDetail();
        browser.driver.sleep(500); 
        browser.getCurrentUrl().then(res =>{
            console.log("Current url " + res);
            url = res
            expect(url).toEqual('http://localhost:4200/tabs/tab2');
        });
    })

});