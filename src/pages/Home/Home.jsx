import React from "react";
import { Button } from "../../styles/ThemeButton.styled";
import {
  Section,
  Img,
  Pattern,
  Div,
  H3,
  P,
  Icon,
  Contact,
  About,
  DIV,
  Story,
  Menu,
} from "./Home.styled";
import Photo from "../../assets/images/Photo.png";
import View from "../../assets/images/View.png";
import pattern from "../../assets/images/Pattern.png";
import Cake from "../../assets/images/cake.png";
import Pizza from "../../assets/images/pizza2.png";

export default function Home() {
  return (
    <>
      <Section>
        <Div>
          <H3>Welcome to Restaurantate</H3>
          <P>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy.
          </P>
          <Button>View Menu</Button>
        </Div>

        <div>
          <Pattern src={pattern} alt="pattern" />
          <Img src={Photo} alt="img of restaurantate" />
        </div>
      </Section>
      <About>
        <Contact>
          <DIV>
            <Icon>
              <i class="ri-map-pin-line"></i>
            </Icon>

            <div className="right-side">
              <h7>Find Us</h7>
              <p>Riverside 25, San Francisco, California</p>
            </div>
          </DIV>
          <DIV>
            <Icon>
              <i class="ri-time-line"></i>
            </Icon>
            <div className="right-side">
              <h7>Open Hours</h7>
              <p>Mon To Fri 9:00 AM - 9:00 PM</p>
            </div>
          </DIV>
          <DIV>
            <Icon>
              <i class="ri-calendar-todo-line"></i>
            </Icon>

            <div className="right-side">
              <h7>Reservation</h7>
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
          <img src={Cake}></img>
          <Button color="#e1b168">See all dishes</Button>
        </div>
        <div className="right-side">
          <h4>Main Dishs</h4>
          <div className="item">
            <img src={Pizza}></img>
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
    </>
  );
}
