import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor'; 

export class TabsPage{
 
    navigateTo(){
        return browser.get('/tabs/tab2');
    }
    
    clickTab1(){
        const tab1 = element(by.id('tab-button-tab1'));
        browser.wait(ExpectedConditions.elementToBeClickable(tab1));
        tab1.click();
    }

    clickTab2(){
        const tab2 = element(by.id('tab-button-tab2'));
        browser.wait(ExpectedConditions.elementToBeClickable(tab2));
        tab2.click();
    }

    clickTab3(){
        const tab3 = element(by.id('tab-button-tab3'));
        browser.wait(ExpectedConditions.elementToBeClickable(tab3));
        tab3.click();
    }

    clickButton(element){
        let elementClick = element;
        browser.wait(ExpectedConditions.elementToBeClickable(elementClick));
        elementClick.click();
    }

    processTabBack(btnTab){
        const arrow = element(by.id('atras'));
        let btn = btnTab;
        this.clickButton(btn);
        browser.driver.sleep(500); 
        this.clickButton(arrow);
    }

    processTab1(){
        const btn = element(by.id('btn-clientes'));
        this.clickTab1();
        this.processTabBack(btn);
    }

    processTab2(){
        const btn = element(by.id('btn-reservas'));
        this.clickTab2();
        this.processTabBack(btn);
    }

    processTab3(){
        const btn = element(by.id('btn-productos'));
        this.clickTab3();
        this.processTabBack(btn);
    }

    processDetail(){

        const btn = element(by.id('btn-clientes'));
        const btnDetail = element(by.id('btn-detail'));
        const btnHome = element(by.id('home'));
        let arrow2 = element(by.id('atras-detail'));


        this.clickTab1();
        this.processTabBack(btn);
        browser.driver.sleep(500); 

        this.clickButton(btn);
        browser.driver.sleep(500); 

        this.clickButton(btnDetail);
        browser.driver.sleep(500); 

        this.clickButton(arrow2);
        browser.driver.sleep(500); 

        this.clickButton(btnDetail);
        browser.driver.sleep(500); 

        this.clickButton(btnHome);
        browser.driver.sleep(5000);         

    }


}