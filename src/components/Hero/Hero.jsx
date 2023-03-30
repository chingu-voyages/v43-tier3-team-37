import React from 'react';

import { TertiaryButton } from "../../styles/ThemeButton.styled";
import {
  HeroDiv,
  IntroSection,
  Icon,
  Contact,
  About,
  DIV,
  Story,
  Menu,
} from "./Home.styled";
import Photo from "../../assets/images/Photo.png";
import View from "../../assets/images/View.png";
import Pattern from "../../assets/images/Pattern.png";
import Cake from "../../assets/images/cake.png";
import Pizza from "../../assets/images/pizza2.png";
import {useNavigate} from 'react-router-dom';

export default function Hero() {
  const nevigate = useNavigate();
  return (
    <HeroDiv>
        <IntroSection>
          <div>
            <h3>Welcome to Restaurantate</h3>
            <p>Welcome to our culinary haven, where every dish is 
              crafted with passion, using only the freshest ingredients
              sourced from local farmers and producers.
            </p>
            <TertiaryButton onClick={()=>nevigate('/menu')}>View Menu</TertiaryButton>
          </div>
            <img src={Photo} alt="img of restaurantate" />
        </IntroSection>
      <About>
        <Contact>
          <DIV>
            <Icon>
              <i></i>
            </Icon>

            <div className="right-side">
              <p>Find Us</p>
              <p>Riverside 25, San Francisco, California</p>
            </div>
          </DIV>
          <DIV>
            <Icon>
              <i></i>
            </Icon>
            <div className="right-side">
              <p>Open Hours</p>
              <p>Mon To Fri 9:00 AM - 9:00 PM</p>
            </div>
          </DIV>
          <DIV>
            <Icon>
              <i></i>
            </Icon>

            <div className="right-side">
              <p>Reservation</p>
              <p>hirestaurantate@gmail.com</p>
            </div>
          </DIV>
        </Contact>
        <Story>
          <div className="left-side">
            <img src={View} alt="view of resurant" />
          </div>
          <div className="right-side">
            <div className="story">
              <h4>The Story</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                soluta aliquam placeat accusantium totam perferendis veritatis
                numquam voluptates
              </p>
            </div>
            <div className="start-to-end">
              <div>
                <h4>1996</h4>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
              <div>
                <h4>2023</h4>
                <p>Lorem ipsum dolor sit amet consectetur </p>
              </div>
              <div></div>
            </div>
          </div>
        </Story>
      </About>
      <Menu>
        <div className="left-side">
          <h6>Menu</h6>
          <h4>Try Our Special Offers</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fugiat
            laborum autem obcaecati assumenda amet aliquam ipsam doloremqu
          </p>
          <img src={Cake} alt="cake"></img>
          <TertiaryButton>See all dishes</TertiaryButton>
        </div>
        <div className="right-side">
          <h4>Main Dishs</h4>
          <div className="item">
            <img src={Pizza} alt="Pizza"></img>
            <div>
              <h5>Raw Scallops from Erquy</h5>
              <p>Candied Jerusalem artichokes, truffle</p>
            </div>
            <p>-------------------------</p>
            <div>
              <h6> $40</h6>
            </div>
          </div>
        </div>
      </Menu>
    </HeroDiv>
  )
}

