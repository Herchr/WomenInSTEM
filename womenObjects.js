import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Popup from "./components/Popup/Popup";

export const women = [
  {
    id: 1,
    name: "Marie Curie",
    illustration: require("./assets/Marie_Curie.png"),
    content: (
      <Text>
        Marie Skłodowska{" "}
        <Popup
          linkText="Curie"
          img={require("./assets/popupAssets/NASA.png")}
          title="NASA"
          content="The National Aeronautics and Space Administration is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research"
          sound={require("./assets/sound/rocket.mp3")}
        />{" "}
      </Text>
    ),
  },
  {
    id: 2,
    name: "Mary Jackson",
    illustration: require("./assets/Mary_Jackson.png"),
    popups: [
      {
        img: require("./assets/Mary_Jackson.png"),
        linkText: "NASA",
        popupContent: "titit",
      },
    ],
    content: `She was born April 1921 and passed away February 2005 at the age of 83.

She loves science and studies hard to get degree in mathematics and physics. She was a math teacher but then ended up working for NASA.

And worked as an engineer in NASA. An engineer is someone who wants to know how and why things work. They design and build things to solve specific problems. 

And Mary Jackson was working on this problem: what elements on a rocket ship make it go slower. So she invented Wind Tunnel.

It was a great invention that leads to two results: 

1- enabled scientists to make better space crafts and explore more of the galaxy at a better efficiency. 

2- enabled other fields of manufacturing, car and airplane to build more advanced products, Specially airplanes.`,
    popupWords: ["NASA"],
  },

  {
    id: 3,
    name: "Chien-Shiung Wu",
    illustration: require("./assets/Chien_Shiung_Wu.png"),
    content: `Chen-Shiung Wu was a Chinese-American physicist. She was born in 1912 in the Jiangsu province in China. There she attended a school owned by her father. He encouraged Wu to study science even though education for girls was not common in China at the time. She later went to university in Shanghai, studying physics, and in 1936 she moved to California to do her Ph.D.

Wu is known for her contribution to nuclear- and particle physics. During World War II she worked on the [Manhattan project], helping figuring out the process of splitting [uranium] metal into uranium isotopes. In addition to contributing to significant breakthroughs in physics, her investigation into the structure of [hemoglobin] contributed to answering important questions in biology regarding blood and sickle cell anemia. 

In 1956 she did research with Tsung Dao Lee and Chen Ning Yang, who are both men. Their experiments made breakthroughs in nuclear physics which resulted in Lee and Yang winning the Nobel Prize in physics in 1957. Although Wu did not win this Nobel Prize, she has won several awards for her work. Among these are the National Medal of Science, and the Wolf prize in physics. 
    `,
  },

  {
    id: 4,
    name: "Mae Jemison",
    illustration: require("./assets/Mae_Jemison.png"),
    content:
      "Marie Skłodowska Curie , born Maria Salomea Skłodowska 7 November 1867 – 4 July 1934, was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. ",
  },

  {
    id: 5,
    name: "Lise Meitner",
    illustration: require("./assets/Lise_Meitner.png"),
    content:
      "Rosalind Elsie Franklin (25 July 1920 – 16 April 1958) was an English chemist and X-ray crystallographer whose work was central to the understanding of the molecular structures of DNA (deoxyribonucleic acid), RNA (ribonucleic acid), viruses, coal, and graphite. ",
  },
  {
    id: 6,
    name: "Grace Hopper",
    illustration: require("./assets/Grace_Hopper.png"),
    content: `Grace Hopper is one of the first computer scientists and a US Navy admiral.
    
Grace was born in New York city in 1906 and she died at age of 85 in 1992. 

Grace applied to Vassar College for early admission but was rejected. She was admitted the next year and graduated from Vassar in 1928 with a degree in math and physics. She earned her PhD and math from Yale in 1934 and returned to Vassar to teach math.

During World War Two grace joined the US Navy reserves as part of the “mark 1” computer programming staff.

Next Greece joins the team developing the UNIVAC 1, the second commercial computer developed in the US.

In 1959 she worked on the committee that defined a new computer language COBOL. Grace believed that programming languages should be close to English rather than machine code, which was the convention.   

She first retired from the Navy in 1966 at the age of 60, but the Navy recalled her to active duty because they still had work for her to do. by 1986 when she finally really retired, she was a Rear Admiral`,
  },
  {
    id: 7,
    name: "Margaret Hamilton",
    illustration: require("./assets/Margaret_Hamilton.png"),
    content: (
      <Text>
        Margaret Hamilton is one of the most famous computer programmers. She
        was born in 1936 in Indiana, US. She was a curious child. {"\n"}
        {"\n"}In college Margaret majored in math, philosophy and physics.
        Though she was one of the only girls in math class, the head of the
        Department was a woman. For the first time Margaret saw a woman doing
        work she could imagine doing, too. {"\n"}
        {"\n"}While she was working for{" "}
        <Popup
          linkText="NASA"
          img={require("./assets/popupAssets/NASA.png")}
          title="NASA"
          content="The National Aeronautics and Space Administration is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research"
        />{" "}
        Margaret and her team worked on developing the on-flight software for
        the{" "}
        <Popup
          linkText="Apollo 11"
          img={require("./assets/popupAssets/APOLLO11.png")}
          title="Apollo 11"
          content="The spaceflight that first landed humans on the Moon. Neil Armstrong and Buzz Aldrin formed the American crew that landed the Apollo Lunar Module Eagle on July 20, 1969"
        />{" "}
        project
      </Text>
    ),
  },

  {
    id: 8,
    name: "Rita Levi-Montalcini",
    illustration: require("./assets/Rita_Levi-Montalcini.png"),
    content: `Rita Levi-Montalcini was a great scientist. She was born in April 1909 and died December of 2012 in Italy.

While lots of people died because of cancer, she decided to become a doctor. She was particularly fascinated by neurons.

They were in the middle of very important research when a cruel dictator passed a law saying that Jewish people are not allowed to work at the university. She escaped to Belgium with her professor who was also Jewish. But when the Nazis invaded Belgium, she had to escape again and return to Italy.

It is hard work as a scientist when you must hide all the time and you have no access to a lab. But Rita did not give up, she turned her bedroom into a small lab. 

When her city was bombed, Rita escaped again, then again, from hiding to hiding, no matter how difficult, wherever she went, she kept on working.

For her work in the area of neurobiology she was awarded the Nobel Prize for medicine, which made her third person from her medical school class to win a Nobel prize.`,
  },
  {
    id: 9,
    name: "Emmy Noether",
    illustration: require("./assets/Emmy_Noether.png"),
    content: `Amalie Emmy Noether was a German mathematician who made many important contributions to abstract algebra.

She had a difficult life. She had to work without pay for seven years after completing her dissertation as women were excluded from academic positions at the time.  

Later in her career she had to lecture under a male colleague’s name as the faculty at her University objected to a female lecturer.

Noether’s  theorem has been called one of the most important mathematical theorems ever proved in guiding development of modern physics.`,
  },
  {
    id: 10,
    name: "Tu Youyou",
    illustration: require("./assets/Tu_Youyou.png"),
    content:
      "Mary Jackson (née Winston,[1] April 9, 1921 – February 11, 2005) was an American mathematician and aerospace engineer at the National Advisory Committee for Aeronautics (NACA), which in 1958 was succeeded by the National Aeronautics and Space Administration (NASA).  ",
  },
  {
    id: 11,
    name: "Ada Lovelace",
    illustration: require("./assets/Ada_Lovelace.png"),
    content:
      "Mary Jackson (née Winston,[1] April 9, 1921 – February 11, 2005) was an American mathematician and aerospace engineer at the National Advisory Committee for Aeronautics (NACA), which in 1958 was succeeded by the National Aeronautics and Space Administration (NASA).  ",
  },
  {
    id: 12,
    name: "Katherine Johnson",
    illustration: require("./assets/Katherine_Johnson.png"),
    content:
      "Mary Jackson (née Winston,[1] April 9, 1921 – February 11, 2005) was an American mathematician and aerospace engineer at the National Advisory Committee for Aeronautics (NACA), which in 1958 was succeeded by the National Aeronautics and Space Administration (NASA).  ",
  },
  {
    id: 13,
    name: "Maryam Mirzakhani",
    illustration: require("./assets/Maryam_Mirzakhani.png"),
    content:
      "Mary Jackson (née Winston,[1] April 9, 1921 – February 11, 2005) was an American mathematician and aerospace engineer at the National Advisory Committee for Aeronautics (NACA), which in 1958 was succeeded by the National Aeronautics and Space Administration (NASA).  ",
  },
  {
    id: 14,
    name: "Rosalind Franklin",
    illustration: require("./assets/Rosalind_Franklin.png"),
    content: (
      <Text>
        Rosalind Franklin was born in 1920 in London, England, and died in 1958.
        She was a British scientist best known for her contributions to the
        discovery of the molecular structure of{" "}
        <Popup
          linkText="DNA"
          img={require("./assets/popupAssets/DNA.png")}
          title="DNA"
          content="DNA is short for deoxyribonucleic acid. It is present in every cell of every living thing. DNA is found in structures of the cell called chromosomes."
        />
        . {"\n"}
        {"\n"}
        The discovery of the structure of DNA was one of the most important
        scientific achievements in the last century, and in human history.
        Rosalind wanted to become a scientist ever since she was a teenager,
        which was not a common or easy career path for girls at that time. She
        excelled at science anyway. {"\n"}
        {"\n"}
        She is famous for applying{" "}
        <Popup
          linkText="X-Ray Diffraction"
          img={require("./assets/popupAssets/XRAY.png")}
          title="X-Ray Diffraction"
          content="The experimental science determining the atomic and molecular structure of a crystal, in which the crystalline structure causes a beam of incident X-rays to diffract into many specific directions"
        />{" "}
        methods to the study of{" "}
        <Popup
          linkText="DNA"
          img={require("./assets/popupAssets/DNA.png")}
          title="DNA"
          content="DNA is short for deoxyribonucleic acid. It is present in every cell of every living thing. DNA is found in structures of the cell called chromosomes."
        />
        . This work make her the unsung mother of the double helix.
      </Text>
    ),
  },
];
