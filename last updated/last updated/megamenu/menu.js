function megamenu(){
    return `
    <div class="container">
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
                
                <li class="nav-item dropdown has-megamenu ">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> New  </a>
                    <div class="dropdown-menu megamenu" role="menu">
                        
                        <div class="row g-3">
                            <div class="col-lg-3 col-8">
                                <div class="col-megamenu">
                                    <h6 class="title"></h6>
                                    <ul class="list-unstyled bs-primary">
                                        <li>The Brightest, Boldest Spring Trends</li>
                                        <li>Zappos X Beach Riot</li>
                                        <li>The Ultimate Sneaker Guide</li>
                                        <li>Fresh Spring Denim</li>
                                        <li>The Spring Sandal Edit</li>
                                        <li>Energizing Sporty Looks</li>
                                        <li>Western-Inspired Wear</li>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div><!-- end col-3 -->
                            <div class="col-lg-2 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title"></h6>
                                    <ul class="list-unstyled">
                                        <li>Super Puff with Coach</li>
                                        <li>Nurture Nature with Free People</li>
                                        <li>Summer Glam</li>
                                        <li>New Season, New Possibilities</li>
                                        <li>Dopamine Dressing</li>
                                        <li>Men’s Summer Staples</li>
                                        <li>Men’s Joyful Color</li>
                                        <li>Men’s Outdoor Utility</li>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div><!-- end col-3 -->
                            <div class="col-lg-2 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title"></h6>
                                    <ul class="list-unstyled">
                                        <li style="margin-bottom: 7px;" class="bold"><a href="">Men</a></li>
                                        <li>Fairfax and Favor</li>
                                        <li>Milwaukee Boot Co</li>
                                        <li>Jambys</li>
                                        <li>Moral Code</li>
                                        <li>UGG® Universal</li>
                                        <li>Rebel Nell</li>
                                        <li>CoFi</li>
                                        <li>MANGO</li>
                                        <li>SOREL Universal</li>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div>    
                            <div class="col-lg-2 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title"></h6>
                                    <ul class="list-unstyled">
                                    
                                        <img src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/ugg-350x350.jpg" alt="">
                                        <img src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/PERFORMANCE-WORKOUT-SHOES-GLOBAL-NAV.jpg">
                                        <button id="dpb">ShopNow</button>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div>
                            
                            <!-- <div class="col-lg-2 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">Title Menu Four</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">Custom Menu</a></li>
                                        <li><a href="#">Custom Menu</a></li>
                                        <li><a href="#">Custom Menu</a></li>
                                        <li><a href="#">Custom Menu</a></li>
                                        <li><a href="#">Custom Menu</a></li>
                                        <li><a href="#">Custom Menu</a></li>
                                    </ul>
                                </div>  col-megamenu.// -->
                            <!-- </div>end col-3 -->
                        </div><!-- end row --> 
                    </div> <!-- dropdown-mega-menu.// -->
                </li>
                <li class="nav-item dropdown has-megamenu">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Women  </a>
                    <div class="dropdown-menu megamenu" role="menu">
                        <div class="row g-5">
                            <div class="col-lg-3 col-7">
                                <div class="col-megamenu">
                                    <h6 class="title">Title Menu One</h6>
                                    <ul class="list-unstyled">
                                        <li class="bold"><a href="">ASOS</a></li>
                        <li class="bold"><a href="">BClogs & Mules</a></li>
                        <li class="bold"><a href="">Heels</a></li>
                        <li class="bold"><a href="">Boots & Booties</a></li>
                        <li class="bold"><a href="">Loafers!</a></li>
                        <li class="bold"><a href="">Comfort</a></li>
                        <li class="bold"><a href="">Flatse</a></li>
                        <li class="bold"><a href="">Wide</a></li>
                        <li class="bold marginBottom"><a href="">Single Shoes</a></li>
                        <li class="bold"><a href="">Shop All Shoesn</a></li>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div><!-- end col-3 -->
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">Title Menu Two</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="">Shirts & Tops</a></li>
                        <li><a href="">Swimwear</a></li>
                        <li><a href="">Dresses</a></li>
                        <li><a href="">Dresses</a></li>
                        <li><a href="">Jeans & Denim</a></li>
                        <li><a href="">Shorts</a></li>
                        <li><a href="">Coats & Outerwear</a></li>
                        <li><a href="">Socks</a></li>
                        <li><a href="">Sleepwear</a></li>
                        <li><a href="">Skirts</a></li>
                        <li><a href="">Activewear</a></li>
                        <li><a href="">Sweaters</a></li>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div><!-- end col-3 -->
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">Title Menu Three</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="">Shirts & Tops</a></li>
                                        <li><a href="">Swimwear</a></li>
                                        <li><a href="">Dresses</a></li>
                                        <li><a href="">Dresses</a></li>
                                        <li><a href="">Jeans & Denim</a></li>
                                        <li><a href="">Shorts</a></li>
                                        <li><a href="">Coats & Outerwear</a></li>
                                        <li><a href="">Socks</a></li>
                                        <li><a href="">Sleepwear</a></li>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div>    
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <ul class="list-unstyled">
                                        <img style="margin-top: 45px;"
                                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/GLOBAL-NAV-LLBEAN-WOMENS1-350x350.jpg" alt="">
                                        <img src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/vionic-bella-350x350.jpg" alt="">
                                        <button id="drb">shopNow</button>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div>
                            
                            <!-- end col-3 -->
                        </div><!-- end row --> 
                    </div> <!-- dropdown-mega-menu.// -->
                </li>
                <li class="nav-item dropdown has-megamenu">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Men  </a>
                    <div class="dropdown-menu megamenu" role="menu">
                        <div class="row g-3">
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">Title Menu One</h6>
                                    <ul class="list-unstyled">
                                        <li class="bold"><a href="/womenHome.html">Sneakers & Athletic</a></li>
                                        <li class="bold"><a href="">ASOS</a></li>
                                        <li class="bold"><a href="">BClogs & Mules</a></li>
                                        <li class="bold"><a href="">Heels</a></li>
                                        <li class="bold"><a href="">Boots & Booties</a></li>
                                        <li class="bold"><a href="">Loafers!</a></li>
                                        <li class="bold"><a href="">Comfort</a></li>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div><!-- end col-3 -->
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">Title Menu Two</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="">Shirts & Tops</a></li>
                                        <li><a href="">Swimwear</a></li>
                                        <li><a href="">Dresses</a></li>
                                        <li><a href="">Dresses</a></li>
                                        <li><a href="">Jeans & Denim</a></li>
                                        <li><a href="">Shorts</a></li>
                                        <li><a href="">Coats & Outerwear</a></li>
                                        <li><a href="">Socks</a></li>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div><!-- end col-3 -->
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">Title Menu Three</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="">Shirts & Tops</a></li>
                                        <li><a href="">Swimwear</a></li>
                                        <li><a href="">Dresses</a></li>
                                        <li><a href="">Dresses</a></li>
                                        <li><a href="">Jeans & Denim</a></li>
                                        <li><a href="">Shorts</a></li>
                                        <li><a href="">Coats & Outerwear</a></li>
                                        <li><a href="">Socks</a></li>
                                        <li><a href="">Sleepwear</a></li>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div>    
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">Title Menu Four</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="">Shirts & Tops</a></li>
                                        <li><a href="">Swimwear</a></li>
                                        <li><a href="">Dresses</a></li>
                                        <li><a href="">Dresses</a></li>
                                        <li><a href="">Jeans & Denim</a></li>
                                        <li><a href="">Shorts</a></li>
                                        <li><a href="">Coats & Outerwear</a></li>
                                        <li> <a href="">Sale</a></li>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div>
                            
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">Title Menu Four</h6>
                                    <ul class="list-unstyled">
                                        <img style="margin-top: 45px;"
                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/GLOBAL-NAV-LLBEAN-WOMENS1-350x350.jpg" alt="">
                        <img src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/vionic-bella-350x350.jpg" alt="">
                        <button id="drb">shopNow</button>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div><!-- end col-3 -->
                        </div><!-- end row --> 
                    </div> <!-- dropdown-mega-menu.// -->
                </li>
                <li class="nav-item dropdown has-megamenu">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Kids  </a>
                    <div class="dropdown-menu megamenu" role="menu">
                        <div class="row g-3">
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">The Find</h6>
                                    <ul class="list-unstyled">
                                    
                                        <li>The Brightest, Boldest Spring Trends</li>
                                        <li>Zappos X Beach Riot</li>
                                        <li>The Ultimate Sneaker Guide</li>
                                        <li>Fresh Spring Denim</li>
                                        <li>The Spring Sandal Edit</li>
                                        <li>Energizing Sporty Looks</li>
                                        <li>Western-Inspired Wear</li>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div><!-- end col-3 -->
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">Title Menu Two</h6>
                                    <ul class="list-unstyled">
                                        <li>Super Puff with Coach</li>
                                        <li>Nurture Nature with Free People</li>
                                        <li>Summer Glam</li>
                                        <li>New Season, New Possibilities</li>
                                        <li>Dopamine Dressing</li>
                                        <li>Men’s Summer Staples</li>
                                        <li>Men’s Joyful Color</li>
                                        <li>Men’s Outdoor Utility</li>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div><!-- end col-3 -->
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">Title Menu Three</h6>
                                    <ul class="list-unstyled">
                                        <li>Fairfax and Favor</li>
                                        <li>Milwaukee Boot Co</li>
                                        <li>Jambys</li>
                                        <li>Moral Code</li>
                                        <li>UGG® Universal</li>
                                        <li>Rebel Nell</li>
                                        <li>CoFi</li>
                                        <li>MANGO</li>
                                        <li>SOREL Universal</li>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div>    
                            
                            
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">Title Menu Four</h6>
                                    <ul class="list-unstyled">
                                        <img src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/ugg-350x350.jpg" alt="">
                                        <img src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/PERFORMANCE-WORKOUT-SHOES-GLOBAL-NAV.jpg">
                                        <button id="dpb">ShopNow</button>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div><!-- end col-3 -->
                        </div><!-- end row --> 
                    </div> <!-- dropdown-mega-menu.// -->
                </li>
                <li class="nav-item dropdown has-megamenu">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Department</a>  </a>
                    <div class="dropdown-menu megamenu" role="menu">
                        <div class="row g-3">
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">The Find</h6>
                                    <ul class="list-unstyled">
                                    
                                        <li>The Brightest, Boldest Spring Trends</li>
                                        <li>Zappos X Beach Riot</li>
                                        <li>The Ultimate Sneaker Guide</li>
                                        <li>Fresh Spring Denim</li>
                                        <li>The Spring Sandal Edit</li>
                                        <li>Energizing Sporty Looks</li>
                                        <li>Western-Inspired Wear</li>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div><!-- end col-3 -->
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">Title Menu Two</h6>
                                    <ul class="list-unstyled">
                                        <li>Super Puff with Coach</li>
                                        <li>Nurture Nature with Free People</li>
                                        <li>Summer Glam</li>
                                        <li>New Season, New Possibilities</li>
                                        <li>Dopamine Dressing</li>
                                        <li>Men’s Summer Staples</li>
                                        <li>Men’s Joyful Color</li>
                                        <li>Men’s Outdoor Utility</li>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div><!-- end col-3 -->
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">Title Menu Three</h6>
                                    <ul class="list-unstyled">
                                        <li>Fairfax and Favor</li>
                                        <li>Milwaukee Boot Co</li>
                                        <li>Jambys</li>
                                        <li>Moral Code</li>
                                        <li>UGG® Universal</li>
                                        <li>Rebel Nell</li>
                                        <li>CoFi</li>
                                        <li>MANGO</li>
                                        <li>SOREL Universal</li>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div>    
                            
                            
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">Title Menu Four</h6>
                                    <ul class="list-unstyled">
                                        <img src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/ugg-350x350.jpg" alt="">
                                        <img src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/PERFORMANCE-WORKOUT-SHOES-GLOBAL-NAV.jpg">
                                        <button id="dpb">ShopNow</button>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div><!-- end col-3 -->
                        </div><!-- end row --> 
                    </div> <!-- dropdown-mega-menu.// -->
                </li>
                <li class="nav-item dropdown has-megamenu">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Store </a>
                    <div class="dropdown-menu megamenu" role="menu">
                        <div class="row g-3">
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">The Find</h6>
                                    <ul class="list-unstyled">
                                    
                                        <li>The Brightest, Boldest Spring Trends</li>
                                        <li>Zappos X Beach Riot</li>
                                        <li>The Ultimate Sneaker Guide</li>
                                        <li>Fresh Spring Denim</li>
                                        <li>The Spring Sandal Edit</li>
                                        <li>Energizing Sporty Looks</li>
                                        <li>Western-Inspired Wear</li>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div><!-- end col-3 -->
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">Title Menu Two</h6>
                                    <ul class="list-unstyled">
                                        <li>Super Puff with Coach</li>
                                        <li>Nurture Nature with Free People</li>
                                        <li>Summer Glam</li>
                                        <li>New Season, New Possibilities</li>
                                        <li>Dopamine Dressing</li>
                                        <li>Men’s Summer Staples</li>
                                        <li>Men’s Joyful Color</li>
                                        <li>Men’s Outdoor Utility</li>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div><!-- end col-3 -->
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">Title Menu Three</h6>
                                    <ul class="list-unstyled">
                                        <li>Fairfax and Favor</li>
                                        <li>Milwaukee Boot Co</li>
                                        <li>Jambys</li>
                                        <li>Moral Code</li>
                                        <li>UGG® Universal</li>
                                        <li>Rebel Nell</li>
                                        <li>CoFi</li>
                                        <li>MANGO</li>
                                        <li>SOREL Universal</li>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div>    
                            
                            
                            <div class="col-lg-3 col-6">
                                <div class="col-megamenu">
                                    <h6 class="title">Title Menu Four</h6>
                                    <ul class="list-unstyled">
                                        <img src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/ugg-350x350.jpg" alt="">
                                        <img src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/May/PERFORMANCE-WORKOUT-SHOES-GLOBAL-NAV.jpg">
                                        <button id="dpb">ShopNow</button>
                                    </ul>
                                </div>  <!-- col-megamenu.// -->
                            </div><!-- end col-3 -->
                        </div><!-- end row --> 
                    </div> <!-- dropdown-mega-menu.// -->
                </li>
            </ul>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="register.html"> Sign In / Register </a></li>
            </ul>
        </div> <!-- navbar-collapse.// -->
    </div> <!-- container-fluid.// -->
    </nav>`
}
export default megamenu