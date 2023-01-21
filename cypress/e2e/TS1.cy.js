import HomePage from '../page-objects/homePage'
import CartPage from '../page-objects/cartPage';



describe('my first scenario', () => {
  const homePage = new HomePage();
  const cartPage = new CartPage();

  it('should add product to cart and delete it from there', function(){
    homePage.visitPage()
    homePage.addProductToCart()
    homePage.clickGoTocartFromProductButton()
    cartPage.checkThatAddedProductIsInCart()
    cartPage.removeItemFromCart()
    cartPage.checkThatCartIsEmpty()
  })
})
