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
        Maria Sklodowska, was born in Warsaw on November 7, 1867, the daughter
        of a secondary-school teacher. She received a general education in local
        schools and some scientific training from her father. {"\n"}
        {"\n"}
        Her early research, together with her husband, were often performed
        under difficult conditions, laboratory arrangements were poor, and both
        had to undertake much teaching to earn a livelihood. {"\n"}
        {"\n"}
        She is one of the most prominent scientists of all time. She was the
        first and only person in history to win two separate{" "}
        <Popup
          linkText="Nobel prizes"
          img={require("./assets/popupAssets/NASA.png")}
          title="NASA"
          content="The National Aeronautics and Space Administration is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research"
        />{" "}
        in two separate sciences. She pioneered{" "}
        <Popup
          linkText="radiation"
          img={require("./assets/popupAssets/NASA.png")}
          title="NASA"
          content="The National Aeronautics and Space Administration is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research"
        />{" "}
        research and discovered two new elements: radium (named after the Latin
        word for ray) and polonium (named after Marie's home country, Poland).{" "}
        {"\n"}
        {"\n"}
        Through her incredible career she faced enormous amount of sexism and
        yet you have heard of her. She was Also denied membership in a French
        academy of science because she was a woman. Despite of all the obstacles
        she succeeded in her career and was recognized in her achievement.{" "}
        {"\n"}
        {"\n"}
        The importance of Curie’s work is reflected in the numerous awards
        bestowed on her. She received many honorary science, medicine and law
        degrees and honorary memberships of learned societies throughout the
        world.
      </Text>
    ),
  },
  {
    id: 2,
    name: "Mary Jackson",
    illustration: require("./assets/Mary_Jackson.png"),
    content: (
      <Text>
        She was born April 1921 and passed away February 2005 at the age of 83.{" "}
        {"\n"}
        {"\n"}
        She loves science and studies hard to get degree in mathematics and
        physics. She was a math teacher but then ended up working for{" "}
        <Popup
          linkText="NASA"
          img={require("./assets/popupAssets/NASA.png")}
          title="NASA"
          content="The National Aeronautics and Space Administration is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research"
        />
        . {"\n"}
        {"\n"}
        And worked as an engineer in NASA. An engineer is someone who wants to
        know how and why things work. They design and build things to solve
        specific problems. {"\n"}
        {"\n"}
        And Mary Jackson was working on this problem: what elements on a rocket
        ship make it go slower. So she invented{" "}
        <Popup
          linkText="Wind Tunnel"
          title="Wind Tunnel"
          content="Wind tunnels are large tubes with air moving inside. The tunnels are used to copy the actions of an object in flight."
        />
        .{"\n"}
        {"\n"}
        It was a great invention that leads to two results: 1- enabled
        scientists to make better space crafts and explore more of the galaxy at
        a better efficiency. 2- enabled other fields of manufacturing, car and
        airplane to build more advanced products, Specially airplanes.
      </Text>
    ),
  },

  {
    id: 3,
    name: "Chien-Shiung Wu",
    illustration: require("./assets/Chien_Shiung_Wu.png"),
    content: (
      <Text>
        Chen-Shiung Wu was a Chinese-American physicist. She was born in 1912 in
        the Jiangsu province in China. There she attended a school owned by her
        father. He encouraged Wu to study science even though education for
        girls was not common in China at the time. She later went to university
        in Shanghai, studying physics, and in 1936 she moved to California to do
        her Ph.D.{"\n"}
        {"\n"}
        Wu is known for her contribution to nuclear- and particle physics.
        During World War II she worked on the{" "}
        <Popup
          linkText="Manhattan project"
          title="Manhattan project"
          content="Lorem"
        />
        , helping figuring out the process of splitting{" "}
        <Popup linkText="Uranium" title="Uranium" content="Lorem" /> metal into
        uranium isotopes. In addition to contributing to significant
        breakthroughs in physics, her investigation into the structure of{" "}
        <Popup linkText="Hemoglobin" title="Hemoglobin" content="Lorem" />{" "}
        contributed to answering important questions in biology regarding blood
        and sickle cell anemia.
        {"\n"}
        {"\n"}
        In 1956 she did research with Tsung Dao Lee and Chen Ning Yang, who are
        both men. Their experiments made breakthroughs in nuclear physics which
        resulted in Lee and Yang winning the Nobel Prize in physics in 1957.
        Although Wu did not win this Nobel Prize, she has won several awards for
        her work. Among these are the National Medal of Science, and the Wolf
        prize in physics.
      </Text>
    ),
  },

  {
    id: 4,
    name: "Mae Jemison",
    illustration: require("./assets/Mae_Jemison.png"),
    content: (
      <Text>
        Jemison was born on October 17, 1956, in Decatur, Alabama. She is the
        youngest child of Charlie Jemison, a roofer and carpenter, and Dorothy
        (Green) Jemison, an elementary school teacher. {"\n"}
        {"\n"}
        Throughout her early school years, Jemison's parents were supportive and
        encouraging of her talents and abilities, and she spent a considerable
        amount of time in her school library reading about all aspects of
        science, especially astronomy. {"\n"}
        {"\n"}
        She received a Bachelor of Science degree in chemical engineering from
        the university in 1977.{"\n"}
        {"\n"}
        Mae C. Jemison is an American astronaut and physician who, on June 4,
        1987, became the first African American woman to be admitted into NASA’s
        astronaut training program. {"\n"}
        {"\n"}
        On September 12, 1992, Jemison finally flew into space with six other
        astronauts aboard the Endeavour on mission STS47, becoming the first
        African American woman in space. {"\n"}
        {"\n"}
        During her eight days in space, Jemison conducted experiments on
        weightlessness and motion sickness on the crew and herself. In all, she
        spent more than 190 hours in space before returning to Earth on
        September 20, 1992. Following her historic flight, Jemison noted that
        society should recognize how much both women and members of other
        minority groups can contribute if given the opportunity.{" "}
      </Text>
    ),
  },

  {
    id: 5,
    name: "Lise Meitner",
    illustration: require("./assets/Lise_Meitner.png"),
    content: (
      <Text>
        Lise Meitner was born on November 7, 1878, in Vienna, Austria. The third
        of eight children of a Jewish family. {"\n"}
        {"\n"}
        she entered the University of Vienna in 1901, studying physics under
        Ludwig Boltzmann. After she obtained her doctorate degree in 1906, she
        went to Berlin in 1907 to study with Max Planck and the chemist Otto
        Hahn. {"\n"}
        {"\n"}
        Hahn and Meitner collaborated closely, studying radioactivity, with her
        knowledge of physics and his knowledge of chemistry. In 1918, they
        discovered the element protactinium. {"\n"}
        {"\n"}
        In 1923, Meitner discovered the radiationless transition known as the
        Auger effect, which is named for Pierre Victor Auger, a French scientist
        who discovered the effect two years later. {"\n"}
        {"\n"}
        Meitner has shared the Enrico Fermi Award (1966) with the chemists Otto
        Hahn and Fritz Strassmann for their joint research that led to the
        discovery of uranium fission. {"\n"}
        {"\n"}
        In 1944 Hahn received the Nobel Prize for Chemistry for discovering
        nuclear fission, though some have argued that Meitner merited a share of
        the award.
      </Text>
    ),
  },
  {
    id: 6,
    name: "Grace Hopper",
    illustration: require("./assets/Grace_Hopper.png"),
    content: (
      <Text>
        Grace Hopper is one of the first computer scientists and the US Navy
        admiral (Admiral is a four-star commissioned naval flag officer rank in
        the United States Navy). {"\n"}
        {"\n"}
        Grace was born in New York city in 1906 and she died at age of 85 in
        1992. {"\n"}
        {"\n"}
        Grace applied to Vassar College for early admission but was rejected.
        She was admitted the next year and graduated from Vassar in 1928 with a
        degree in math and physics. She earned her PhD and math from Yale in
        1934 and returned to Vassar to teach math. {"\n"}
        {"\n"}
        During World War Two grace joined the US Navy reserves as part of the
        “mark 1” computer programming staff. (Howard Aiken and Grace Hopper
        designed the MARK series of computers at Harvard University beginning in
        1944. Picture of MARK1 computer) {"\n"}
        {"\n"}
        Next Greece joins the team developing the UNIVAC 1, the second
        commercial computer developed in the US. {"\n"}
        {"\n"}
        In 1959 she worked on the committee that defined a new computer language
        COBOL. Grace believed that programming languages should be close to
        English rather than machine code, which was the convention. {"\n"}
        {"\n"}
        She first retired from the Navy in 1966 at the age of 60, but the Navy
        recalled her to active duty because they still had work for her to do.
        by 1986 when she finally really retired, she was a Rear Admiral (Rear
        admiral is a senior naval flag officer rank, equivalent to a major
        general and air vice marshal and above that of a commodore and captain,
        but below that of a vice admiral.)
      </Text>
    ),
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
    content: (
      <Text>
        Rita Levi-Montalcini was a great scientist. She was born in April 1909
        and died December of 2012 in Italy.{"\n"}
        {"\n"}
        While lots of people died because of cancer, she decided to become a
        doctor. She was particularly fascinated by neurons.{"\n"}
        {"\n"}
        They were in the middle of very important research when a cruel dictator
        passed a law saying that Jewish people are not allowed to work at the
        university. She escaped to Belgium with her professor who was also
        Jewish. But when the Nazis invaded Belgium, she had to escape again and
        return to Italy.{"\n"}
        {"\n"}
        It is hard work as a scientist when you must hide all the time and you
        have no access to a lab. But Rita did not give up, she turned her
        bedroom into a small lab. {"\n"}
        {"\n"}
        When her city was bombed, Rita escaped again, then again, from hiding to
        hiding, no matter how difficult, wherever she went, she kept on working.
        {"\n"}
        {"\n"}
        For her work in the area of neurobiology she was awarded the Nobel Prize
        for medicine, which made her third person from her medical school class
        to win a Nobel prize.
      </Text>
    ),
  },
  {
    id: 9,
    name: "Emmy Noether",
    illustration: require("./assets/Emmy_Noether.png"),
    content: (
      <Text>
        Amalie Emmy Noether was a German mathematician who made many important
        contributions to abstract algebra.{"\n"}
        {"\n"}
        She had a difficult life. She had to work without pay for seven years
        after completing her dissertation as women were excluded from academic
        positions at the time. {"\n"}
        {"\n"}
        Later in her career she had to lecture under a male colleague’s name as
        the faculty at her University objected to a female lecturer.{"\n"}
        {"\n"}
        Noether’s theorem has been called one of the most important mathematical
        theorems ever proved in guiding development of modern physics.
      </Text>
    ),
  },
  {
    id: 10,
    name: "Tu Youyou",
    illustration: require("./assets/Tu_Youyou.png"),
    content: (
      <Text>
        Tu Youyou, (born December 30, 1930, Ningbo, Zhejiang province, China),
        Chinese scientist and phytochemist known for her isolation and study of
        the antimalarial substance qinghaosu, later known as artemisinin, one of
        the world’s most-effective malaria-fighting drugs. {"\n"}
        {"\n"}
        She was accepted by the Department of Pharmacy and became a student at
        the Medical School of Peking University. Her choice of learning pharmacy
        was driven by her interests, curiosity, and a desire to seek new
        medicines for patients. {"\n"}
        {"\n"}
        From 1959 to 1962, she participated in a full-time training course in
        the use of traditional Chinese medicine that was geared toward
        researchers with knowledge of Western medicine. {"\n"}
        {"\n"}
        In 1967, during the Vietnam War (1954–75), Tu was appointed to lead
        Project 523, a covert effort to discover a treatment for malaria. {"\n"}
        {"\n"}
        She has discovered the artemisinin, a drug therapy for malaria that has
        saved millions across the globe. {"\n"}
        {"\n"}
        For her discoveries, Tu received the 2015 Nobel Prize for Physiology or
        Medicine (shared with Irish-born American parasitologist William
        Campbell and Japanese microbiologist Ōmura Satoshi).{" "}
      </Text>
    ),
  },
  {
    id: 11,
    name: "Ada Lovelace",
    illustration: require("./assets/Ada_Lovelace.png"),
    content: (
      <Text>
        Ada was the daughter of the famous poet.Her mother gave her a logical
        and scientific education,something very unusual for girls of that time.{" "}
        {"\n"}
        {"\n"}
        Ada was highly intelligent very curious and wanted to know everything
        for example. she liked the idea of flying and wanted to make a flying
        machine. Ada imagined a world where machines did much more than
        calculations a world where machines could do many things. {"\n"}
        {"\n"}
        Ada is considered the first computer programmer in history every year on
        the second Tuesday of October we celebrate Ada Lovelace day a day that
        pays tribute to all the successes of women in the field of engineering
        mathematics and science. {"\n"}
        {"\n"}
        In the 200 years since Lovelace’s birth, we’ve thankfully overturned
        many Victorian ideals that kept women from exploring their potential
        outside the home. So how exactly are women faring in the STEM world of
        the 21st century?
      </Text>
    ),
  },
  {
    id: 12,
    name: "Katherine Johnson",
    illustration: require("./assets/Katherine_Johnson.png"),
    content: (
      <Text>
        Katherine Johnson was an American mathematician and physicist. Katherine
        was born in White Sulphur Springs in 1918. She grew up in a time when
        people of color, especially women, were limited in their careers.
        Katherine loved learning, especially mathematics. {"\n"}
        {"\n"}
        one of the NASA/NACA (agency of the U.S. federal government responsible
        for the civilian space program, as well as aeronautics and space
        research) “human computers".First woman in the NASA Flight Research
        Division to receive author credit on a scientific paper. {"\n"}
        {"\n"}
        Long before computers with keyboards and monitors, there were human
        ‘computers’ at NASA. When the Space Race to put a man on the moon took
        off, NACA became NASA. {"\n"}
        {"\n"}
        she challenged narrow stereotypes, NASA Administrator Jim Bridenstine
        called Johnson an “American hero.” “She ... opened doors for women and
        people of color in the universal human quest to explore space.”also she
        said Girls are capable of doing everything men are capable of doing,
      </Text>
    ),
  },
  {
    id: 13,
    name: "Maryam Mirzakhani",
    illustration: require("./assets/Maryam_Mirzakhani.png"),
    content: (
      <Text>
        Maryam Mirzakhani, (born May 3, 1977, Tehrān, Iran—died July 14, 2017,
        Palo Alto, California, U.S.), Iranian mathematician who became (2014)
        the first woman and the first Iranian to be awarded a Fields Medal(The
        Fields Medal is regarded as one of the highest honors a mathematician
        can receive). {"\n"}
        {"\n"}
        In 1999 she received a B.Sc. degree in mathematics from the Sharif
        University of Technology in Tehran. Five years later she earned a Ph.D.
        from Harvard University for her dissertation Simple. {"\n"}
        {"\n"}
        In 2008 she became a professor at Stanford University. Mirzakhani’s
        research involved calculating the number of a certain type of geodesic
        (the shortest path between two points in a surface), called simple
        closed geodesics, on hyperbolic surfaces. {"\n"}
        {"\n"}
        While it’s easy to jump to the conclusion that until now the math union
        has overlooked women, the truth is that the numbers are stacked against
        women in STEM
      </Text>
    ),
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
        The discovery of the structure of{" "}
        <Popup
          linkText="DNA"
          img={require("./assets/popupAssets/DNA.png")}
          title="DNA"
          content="DNA is short for deoxyribonucleic acid. It is present in every cell of every living thing. DNA is found in structures of the cell called chromosomes."
        />{" "}
        was one of the most important scientific achievements in the last
        century, and in human history. Rosalind wanted to become a scientist
        ever since she was a teenager, which was not a common or easy career
        path for girls at that time. She excelled at science anyway. {"\n"}
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
