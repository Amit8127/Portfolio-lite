import React from "react";
import H1 from "./Components/H1";
import A from "./Components/A";
import Img from "./Components/Img";
import P from "./Components/P";
import logo from "./images/Amit_Pic.jpeg";

const App = () => {
  return (
    <div>
      <div className="top-bar">
        <H1 heading="Amit Kumar" />
        <A name="Home" src="#" />
        <A name="About" src="#" />
        <A name="Contact" src="#" />
        <A name="Skills" src="#" />
        <A name="Qualification" src="#" />
      </div>
      <div className="body">
        <H1 heading="About Me" />
        <Img src={logo} alt="images" />
        <P paraText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda beatae minus eveniet molestias. Dolorum, voluptates. Ducimus placeat dignissimos, sint blanditiis ipsa, hic vero quos ullam deleniti libero voluptate nihil adipisci in, dolore inventore numquam ut dolorem sit saepe? A labore sit vitae eos dolores beatae minima recusandae dolorem dolore." />
        <P paraText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda beatae minus eveniet molestias. Dolorum, voluptates. Ducimus placeat dignissimos, sint blanditiis ipsa, hic vero quos ullam deleniti libero voluptate nihil adipisci in, dolore inventore numquam ut dolorem sit saepe? A labore sit vitae eos dolores beatae minima recusandae dolorem dolore." />
        <P paraText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda beatae minus eveniet molestias. Dolorum, voluptates. Ducimus placeat dignissimos, sint blanditiis ipsa, hic vero quos ullam deleniti libero voluptate nihil adipisci in, dolore inventore numquam ut dolorem sit saepe? A labore sit vitae eos dolores beatae minima recusandae dolorem dolore." />
        <P paraText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda beatae minus eveniet molestias. Dolorum, voluptates. Ducimus placeat dignissimos, sint blanditiis ipsa, hic vero quos ullam deleniti libero voluptate nihil adipisci in, dolore inventore numquam ut dolorem sit saepe? A labore sit vitae eos dolores beatae minima recusandae dolorem dolore." />
        <hr />
        <H1 heading="Skills" />
        <P paraText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis asperiores ipsam exercitationem doloremque. Sint minima facilis et architecto ducimus reiciendis eius animi saepe expedita nostrum? Quae aliquid animi praesentium voluptatum? Blanditiis quis maiores dolor quod dignissimos consequuntur amet voluptates fuga eveniet similique est iste, culpa ipsa id quisquam magnam. Quam veritatis at, fuga nobis, perferendis ex praesentium voluptatem provident, laudantium qui neque tempore consectetur impedit dicta. Aperiam tenetur, earum animi dicta natus tempora veritatis illo, sed est facilis exercitationem minima labore facere? Aliquam vitae, quia, ad laboriosam quo earum adipisci ratione tenetur nobis in provident nemo expedita enim impedit iure fuga obcaecati ducimus blanditiis nam cumque praesentium sed eos quisquam illum. Dolore a assumenda hic architecto! Pariatur deleniti voluptatem maiores cumque amet consequatur eligendi similique facilis voluptatibus facere nisi officiis, modi quos unde excepturi aliquid magnam blanditiis consectetur, ex exercitationem necessitatibus quod quibusdam quidem quae! Voluptate placeat harum blanditiis praesentium." />
        <hr />
        <H1 heading="Qualifications" />
        <P paraText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis asperiores ipsam exercitationem doloremque. Sint minima facilis et architecto ducimus reiciendis eius animi saepe expedita nostrum? Quae aliquid animi praesentium voluptatum? Blanditiis quis maiores dolor quod dignissimos consequuntur amet voluptates fuga eveniet similique est iste, culpa ipsa id quisquam magnam. Quam veritatis at, fuga nobis, perferendis ex praesentium voluptatem provident, laudantium qui neque tempore consectetur impedit dicta. Aperiam tenetur, earum animi dicta natus tempora veritatis illo, sed est facilis exercitationem minima labore facere? Aliquam vitae, quia, ad laboriosam quo earum adipisci ratione tenetur nobis in provident nemo expedita enim impedit iure fuga obcaecati ducimus blanditiis nam cumque praesentium sed eos quisquam illum. Dolore a assumenda hic architecto! Pariatur deleniti voluptatem maiores cumque amet consequatur eligendi similique facilis voluptatibus facere nisi officiis, modi quos unde excepturi aliquid magnam blanditiis consectetur, ex exercitationem necessitatibus quod quibusdam quidem quae! Voluptate placeat harum blanditiis praesentium." />
        <hr />
        <H1 heading="Projects" />
        <P paraText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis asperiores ipsam exercitationem doloremque. Sint minima facilis et architecto ducimus reiciendis eius animi saepe expedita nostrum? Quae aliquid animi praesentium voluptatum? Blanditiis quis maiores dolor quod dignissimos consequuntur amet voluptates fuga eveniet similique est iste, culpa ipsa id quisquam magnam. Quam veritatis at, fuga nobis, perferendis ex praesentium voluptatem provident, laudantium qui neque tempore consectetur impedit dicta. Aperiam tenetur, earum animi dicta natus tempora veritatis illo, sed est facilis exercitationem minima labore facere? Aliquam vitae, quia, ad laboriosam quo earum adipisci ratione tenetur nobis in provident nemo expedita enim impedit iure fuga obcaecati ducimus blanditiis nam cumque praesentium sed eos quisquam illum. Dolore a assumenda hic architecto! Pariatur deleniti voluptatem maiores cumque amet consequatur eligendi similique facilis voluptatibus facere nisi officiis, modi quos unde excepturi aliquid magnam blanditiis consectetur, ex exercitationem necessitatibus quod quibusdam quidem quae! Voluptate placeat harum blanditiis praesentium." />
      </div>
      <div className="footer">
        <H1 heading="© 2023 Amit Kumar. Feel Free to Copy" />
        <A name="LinkedIn" src="#" />
        <A name="Facebook" src="#" />
        <A name="Instagram" src="#" />
        <A name="X" src="#" />
        <A name="GitHub" src="#" />
      </div>
    </div>
  );
};
export default App;
