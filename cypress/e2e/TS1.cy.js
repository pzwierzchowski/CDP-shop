import HomePage from '../page-objects/homePage'
import AccountPage from '../page-objects/myAccountPage'
import CartPage from '../page-objects/cartPage';
import OrderPage from '../page-objects/orderPage';
import { faker } from '@faker-js/faker';



describe('my first scenario', () => {
  const homePage = new HomePage();
  const accountPage = new AccountPage();
  const cartPage = new CartPage();
  const orderPage = new OrderPage();

  // before(function () {
  //   cy.fixture('users').as('userData')
  // })
  
  // it('should login to the application', function () {
  //   homePage.visitPage()
  //   homePage.clickMyAccountHeaderButton()
  //   accountPage.fillUsernameFieldWithEmail(this.userData.email)
  //   accountPage.fillPasswordField(this.userData.password)
  //   accountPage.clickLoginButton()
  //   accountPage.checkVisibilityOfMyAccountNavigation()
  // })

  // it('should not login to the application', function () {
  //   accountPage.visitPage()
  //   accountPage.fillUsernameFieldWithEmail(faker.internet.email())
  //   accountPage.fillPasswordField(faker.internet.password())
  //   accountPage.clickLoginButton()
  //   accountPage.checkVisibilityOfErrorAfterWrongLogin()
  // })

  it('should add product to cart and delete it from there', function(){
    homePage.visitPage()
    homePage.addProductToCart()
    homePage.clickGoToCartFromProductButton()
    cartPage.checkThatAddedProductIsInCart()
    cartPage.clickGoToPaymentsButton()
    
    orderPage.fillAllRequiredFields(faker.name.firstName(),
    faker.name.lastName(),
    faker.address.streetAddress(),
    faker.address.zipCode('##-###'),
    faker.address.city(), 
    faker.phone.number('+48#########'),
    faker.internet.email())

    orderPage.clickOrderFinishButton()
    orderPage.checkOrderFinished()
  })


})
