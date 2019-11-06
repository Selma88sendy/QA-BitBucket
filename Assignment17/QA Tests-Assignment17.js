describe('VALIDATION MESSAGES', function() {

    it('Verify validation messages for required fields', function() {

        browser.ignoreSynchronization =true;
        browser.driver.manage().window().maximize();

        const EC = protractor.ExpectedConditions;
        const emailFriendButton = $('.email-a-friend > .button-2');
        const sendEmailButton = $('.buttons > .button-1');
        const friendEmailEmptyInputFieldError = $('#FriendEmail-error');

        browser.get('https://demo.nopcommerce.com/adidas-consortium-campus-80s-running-shoes');
        browser.wait(EC.elementToBeClickable(emailFriendButton), 5000)
        emailFriendButton.click();
        browser.wait(EC.elementToBeClickable(sendEmailButton), 5000)
        sendEmailButton.click();

        browser.wait(EC.visibilityOf(friendEmailEmptyInputFieldError),5000);
        expect(friendEmailEmptyInputFieldError.getText()).toContain('Enter friend');
    });

    it('Verify validation messages for required fields', function() {

        browser.ignoreSynchronization =true;
        browser.driver.manage().window().maximize();

        const EC = protractor.ExpectedConditions;
        const emailFriendButton = $('.email-a-friend > .button-2');
        const sendEmailButton = $('.buttons > .button-1');
        const yourEmailEmptyInputFieldError = $('#YourEmailAddress-error');

        browser.get('https://demo.nopcommerce.com/adidas-consortium-campus-80s-running-shoes');
        browser.wait(EC.elementToBeClickable(emailFriendButton), 5000)
        emailFriendButton.click();
        browser.wait(EC.elementToBeClickable(sendEmailButton), 5000)
        sendEmailButton.click();

        browser.wait(EC.visibilityOf(yourEmailEmptyInputFieldError),5000);
        expect(yourEmailEmptyInputFieldError.getText()).toContain('Enter your email');
});
});

