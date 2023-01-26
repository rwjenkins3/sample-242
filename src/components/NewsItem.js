import React from 'react'
import './NewsItem.css';

export const NewsItem = () => {
  return (
    <div className="sectionContainer">
        <div className="sectionLeft">
            <img src="../images/ferrell.jpg" alt="" />
        </div>

        <div className="sectionRight">
            <div className="sectionHeading">
                <div>
                    <a href="#">Entertainment</a>
                    Some Magazine
                </div>
                <div>
                    <img src="../images/hamburger.png" style="width: 1.5em; height: 1.5em;" alt="" />
                </div>
            </div>
            <div className="sectionHeadline">
                <a href="#">Will Ferrell confirms he's on board for Zoolander sequel</a>
            </div>
            <div className="sectionBody">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat commodi consequuntur, maiores, optio quidem sit dignissimos culpa tenetur aspernatur quas molestiae dolorem. Ad esse temporibus animi facilis atque? Soluta adipisci rem vel esse quam, voluptatum explicabo dolorem saepe dignissimos ipsam veritatis modi corporis. Voluptates fuga doloremque atque nostrum.</p>
            </div>
        </div>
    </div>


  )
}
