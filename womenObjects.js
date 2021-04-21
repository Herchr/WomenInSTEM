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
          text="Curie"
          img={require("./assets/popupAssets/NASA.png")}
          title="NASA"
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
    content: `Margaret Hamilton is one of the most famous computer programmers. She was born August 17, 1936. She was a curious child and always asked her dad tons of questions, question after question. 

In college Margaret majored in math, philosophy and physics. Though she was one of the only girls in math class, the head of the Department was a woman. For the first time Margaret saw a woman doing work she could imagine doing, too.

While she was working for NASA she was a little different from her coworkers. She was a mom. Margaret would bring her daughter more into the lab to play while Margaret wrote the programs that controlled the spaceships.

Margaret and her team worked on the Apollo 11 project`,
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
    content: `Rosalind Franklin, in full Rosalind Elsie Franklin, (born July 25, 1920,London, England—died April 16, 1958, London), British scientist best known for her contributions to the discovery of the molecular structure of deoxyribonucleic acid (DNA), a constituent of chromosomes that serves to encode genetic information. Franklin also contributed new insight on the structure of viruses, helping to lay the foundation for the field of structural virology. Franklin attended St. Paul’s Girls’ School before studying physical chemistry at Newnham College, University of Cambridge. After graduating in 1941, she received a fellowship to conduct research in physical chemistry at Cambridge. But the advance of World War II changed her course of action: not only did she serve as a London air raid warden, but in 1942 she gave up her fellowship to work for the British Coal Utilization Research Association, where she investigated the physical chemistry of carbon and coal for the war effort. Nevertheless, she was able to use this research for her doctoral thesis, and in 1945 she received a doctorate from Cambridge. From 1947 to 1950 she worked with Jacques Méring at the State Chemical Laboratory in Paris, studying X-ray diffraction technology. That work led to her research on the structural changes caused by the formation of graphite in heated carbons—work that proved valuable for the coking industry. 

      In 1951 Franklin joined the Biophysical Laboratory at King’s College, London, as a research fellow. There she applied X-ray diffraction methods to the study of DNA. When she began her research at King’s College, extraordinarily little was known about the chemical makeup or structure of DNA. However, she soon discovered the density of DNA and, more importantly, established that the molecule existed in a helical conformation. Her work to make clearer X-ray patterns of DNA molecules laid the foundation for James Watson and Francis Crick to suggest in 1953 that the structure of DNA is a double helix. polymer, a spiral consisting of two DNA strands wound around each other.`,
  },
];
