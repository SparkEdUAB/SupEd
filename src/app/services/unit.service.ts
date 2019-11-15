import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
items:any;
  constructor() {

  this.items = [

            {
                "id": "g9bu1",
                "gid": "g9",
                "cid": "g9b",
                "unit": "1",
                "title": "Biology and Technology",
                "description": "Schistosomiasis (also Known as bilharziasis)is a common parsitic diease.It affects 200-300 million people in Africa(including Ethiopia),South America,Asia and parts of the Caribbean",
                "textbookUrl": "grade9/Biology/M01_BIOL_SB_ETHG9_0087_U01.html"
            },
            {
                "id": "g9bu2",
                "gid": "g9",
                "cid": "g9b",
                "unit": "2",
                "title": "Cell Biology",
                "description": "Biologists use different tools to help them study living organisms.One of the most important is the microscoope.Many important organisms are very small and biologists need to be able to see them",
                "textbookUrl": "grade9/Biology/M02_BIOL_SB_ETHY9_0087_U02.html"
            },
            {
                "id": "g9bu3",
                "gid": "g9",
                "cid": "g9b",
                "unit": "3",
                "title": " Human Biology and health",
                "description": "Food is the source of nutrients and energy for the body.It usually comes from an imals or plants and is taken in to the body where it is broken down to provide the nutrients needed by the body.",
                "textbookUrl": "grade9/Biology/M03_BIOL_SB_ETHG9_0087_U03.html"
            },
            {
                "id": "g9bu4",
                "gid": "g9",
                "cid": "g9b",
                "unit": "4",
                "title": " Micro-organisms and disease",
                "description": "Micro-organisms are tiny living organisms that are usually too small to be seen with the naked eye.To see them we need to use a microscope.In fact the definition of micro-organism is an organism that can only be seen with the aid of a microscope.",
                "textbookUrl": "grade9/Biology/M04_BIOL_SB_ETHG9_0087_U04.html"
            },
            {
                "id": "g9bu5",
                "gid": "g9",
                "cid": "g9b",
                "unit": "5",
                "title": "Classification",
                "description": "Classifying living organisms is central to understanding the variety of life of Earth.Scientists group organisms together in different ways, as you will see shortly.But the most important unit of classification is the species.",
                "textbookUrl": "grade9/Biology/M05_BIOL_SB_ETHY9_0087_U05.html"
            },
            {
                "id": "g9bu6",
                "gid": "g9",
                "cid": "g9b",
                "unit": "6",
                "title": "Environment",
                "description": "The abiotic components or factors are the non-living elements of an ecosystem.The climate and weather produce several important abiotic components.They include the amount of sunlight and the amount of rainfall.",
                "textbookUrl": "grade9/Biology/M06_BIOL_SB_ETHG9_0087_U06.html"
            },
            {
                "id": "g9cu1",
                "gid": "g9",
                "cid": "g9h",
                "unit": "1",
                "title": " Structure of the Atom",
                "description": "Even though the idea of the existence of atoms and atomic theory dates back to classical times,as discussed earlier,only Dalton's atomic theory ideas were the basis for the new era of science.",
                "textbookUrl": "grade9/Chemistry/web/ChemistryUnit1.html",
                "teacherGuide": "tg/chem/Chemistry_gr9/web/chem%209/Final%20grade%209%20Sept.07%20-%20Page%201-42.html"
            },
            {
                "id": "g9cu2",
                "gid": "g9",
                "cid": "g9h",
                "unit": "2",
                "title": " Periodic classification of the elements",
                "description": "early attempts to classify elements were based merely on atomic mass. Then scientists began to seek relationships between atomic mass and other properties of the element.",
                "textbookUrl": "grade9/Chemistry/web/ChemistryUnit2.html",
                "teacherGuide": "tg/chem/Chemistry_gr9/web/chem%209/Final%20grade%209%20Sept.07%20-%20Page%2043-68.html"
            },
            {
                "id": "g9cu3",
                "gid": "g9",
                "cid": "g9h",
                "unit": "3",
                "title": "Chemical bonding and intermoleculazr forces",
                "description": "scientists have identified different types of attractive forces between atoms in forming bond. The strength of the forces relies on the types of bonds. For instance, in covalent bond, the strength of the bonds depends on whether the bonds are single, double or triple bonds.",
                "textbookUrl": "grade9/Chemistry/web/ChemistryUnit3.html",
                "teacherGuide": "tg/chem/Chemistry_gr9/web/chem%209/Final%20grade%209%20Sept.07%20-%20Page%2069-96.html"
            },
            {
                "id": "g9cu4",
                "gid": "g9",
                "cid": "g9h",
                "unit": "4",
                "title": "Chemical reactions and stoichiomentry",
                "description": "Chemical reaction occurs around us all the time for example. The burning of fuel the souring of milk metabolic processes of our body and the decay of plants are some familiar chemical reactions in daily life",
                "textbookUrl": "grade9/Chemistry/web/ChemistryUnit4.html",
                "teacherGuide": "tg/chem/Chemistry_gr9/web/chem%209/Final%20grade%209%20Sept.07%20-%20Page%2097-138.html"
            },
            {
                "id": "g9cu5",
                "gid": "g9",
                "cid": "g9h",
                "unit": "5",
                "title": " Physical states of matter ",
                "description": "states of matter in which substances are chemically the same but physically different are explained by the kinetic theory of matter.",
                "textbookUrl": "grade9/Chemistry/web/ChemistryUnit5.html",
                "teacherGuide": "tg/chem/Chemistry_gr9/web/chem%209/Final%20grade%209%20Sept.07%20-%20Page%20139-223.html"
            },
            {
                "id": "g9mu1",
                "gid": "g9",
                "cid": "g9m",
                "unit": "1",
                "title": "The Number System Technology",
                "description": "important facts about the setes of natural numbers,prime numbers,composite numbers and integers.",
                "textbookUrl": "grade9/Maths/web/mathsUnit1.html"
            },
            {
                "id": "g9mu2",
                "gid": "g9",
                "cid": "g9m",
                "unit": "2",
                "title": "Solution of Equation",
                "description": "Equations are equality of expressions.There are different types of equations that depend on the variable condidered.when the variable in use has an exponent other than 1, it is said to be an equation involving exponents.",
                "textbookUrl": "grade9/Maths/web/mathsUnit2.html"
            },
            {
                "id": "g9mu3",
                "gid": "g9",
                "cid": "g9m",
                "unit": "3",
                "title": " Further on Sets",
                "description": "a set is well-defined,we mean that,given an object,we are able to determine whether the object is in the set or not.For instance,",
                "textbookUrl": "grade9/Maths/web/mathsUnit3.html"
            },
            {
                "id": "g9mu4",
                "gid": "g9",
                "cid": "g9m",
                "unit": "4",
                "title": "Relations and Functions",
                "description": "Let A and B be non-empty sets.A relation R from A to B is any subset of A x B. in other words,R is a relation from A to B if and only if R c(AxB).",
                "textbookUrl": "grade9/Maths/web/mathsUnit4.html"
            },
            {
                "id": "g9mu5",
                "gid": "g9",
                "cid": "g9m",
                "unit": "5",
                "title": "Geometry and Functions",
                "description": "A polygon is a simple closed curve,formed by the union of three or more Line segments, no two of which in succession are collinear.The line segments are called the sides of the polygon and the end the end points of the sides are called the vertices.",
                "textbookUrl": "grade9/Maths/web/mathsUnit5.html"
            },
            {
                "id": "g9mu6",
                "gid": "g9",
                "cid": "g9m",
                "unit": "6",
                "title": "Statistics and Probability",
                "description": "Statistics is the science of colllecting,organizing,presenting,analyzing and interpreting data (quantitative information)in order to draw conclusions.",
                "textbookUrl": "grade9/Maths/web/mathsUnit6.html"
            },
            {
                "id": "g9mu7",
                "gid": "g9",
                "cid": "g9m",
                "unit": "7",
                "title": "Vectors in two Dimansions",
                "description": "Scalar quantities are those quantities of measuress that have only magnitude and no direction.(Simply represented by a real numver and a specified unit).",
                "textbookUrl": "grade9/Maths/web/mathsUnit7.html"
            },
            {
                "id": "g9pu1",
                "gid": "g9",
                "cid": "g9p",
                "unit": "1",
                "title": " Vectors",
                "description": "We usually represent vectors using arrows.The length of this arrow represents the size of the quantity and the way it is pointing represents its direction.",
                "textbookUrl": "grade9/phy9/phy_Gread9_Unit1.html",
                "teacherGuide": "tg/phy/physics_gr9/phy%209/M01_PHYS_TG_ETHG9_0179_U01.html"
            },
            {
                "id": "g9pu2",
                "gid": "g9",
                "cid": "g9p",
                "unit": "2",
                "title": " Motion in a Straight line",
                "description": "Uniform motion refers to an object moving at a steady speed in a straight line.if it is speeding up,slowing down or changing its direction then its motion is not uniform.",
                "textbookUrl": "grade9/phy9/phy_Gread9_Unit2.html",
                "teacherGuide": "tg/phy/physics_gr9/phy%209/M02_PHYS_TG_ETHG9_0179_U02.html"
            },
            {
                "id": "g9pu3",
                "gid": "g9",
                "cid": "g9p",
                "unit": "3",
                "title": "Forces and Newton's law of motion",
                "description": "Force is a push or a pull.you might push a book across the desk or gravity might pull objects towards the centre of the Earth.",
                "textbookUrl": "grade9/phy9/phy_Gread9_Unit3.html",
                "teacherGuide": "tg/phy/physics_gr9/phy%209/M03_PHYS_TG_ETHG9_0179_U03.html"
            },
            {
                "id": "g9pu4",
                "gid": "g9",
                "cid": "g9p",
                "unit": "4",
                "title": "Work ,Energy and Power",
                "description": "The term work is used all the time in everyday language.you might go to work,a device may stop working,you might complete schoolwork, or work hard to solve problem.However,in physics,work means something very specif c.",
                "textbookUrl": "grade9/phy9/phy_Gread9_Unit4.html",
                "teacherGuide": "tg/phy/physics_gr9/phy%209/M04_PHYS_TG_ETHG9_0179_U04.html"
            },
            {
                "id": "g9pu5",
                "gid": "g9",
                "cid": "g9p",
                "unit": "5",
                "title": "Simple Mechines",
                "description": "A machine is a device that is specially designed or engineered to help make it easier to do mechanical work.",
                "textbookUrl": "grade9/phy9/phy-gread9-Unit5.html",
                "teacherGuide": "tg/phy/physics_gr9/phy%209/M05_PHYS_TG_ETHY9_0179_U05.html"
            },
            {
                "id": "g9pu6",
                "gid": "g9",
                "cid": "g9p",
                "unit": "6",
                "title": " Fluid statics",
                "description": "If a large force acts on a small area it creates a greater pressure.for example,most animal predators have pointed teeth. when a crocodile or shark bites into its prey, the pressure is very large and so the teth sink in!",
                "textbookUrl": "grade9/phy9/phy-gread9-Unit6.html",
                "teacherGuide": "tg/phy/physics_gr9/phy%209/M06_PHYS_TG_ETHG9_0179_U06.html"
            },
            {
                "id": "g9pu7",
                "gid": "g9",
                "cid": "g9p",
                "unit": "7",
                "title": "Temperature and heat",
                "description": "Heat is one form of energy;it is therefore measured in joules and is a scalar quantity.Heat is a flow fo energy from hotter regions to colder ones.",
                "textbookUrl": "grade9/phy9/phy-gread9-Unit7.html",
                "teacherGuide": "tg/phy/physics_gr9/phy%209/M07_PHYS_TG_ETHG9_0179_U07.html"
            },
            {
                "id": "g9pu8",
                "gid": "g9",
                "cid": "g9p",
                "unit": "8",
                "title": " Wave Motion and Sound",
                "description": "Waves can be thought of as aseries of vibrations that travel through a medium(a medium is another way of describing the material thriough which the wave is travelling).",
                "textbookUrl": "tg/en/english_gr9/english%209/M01_ENG_TB_ETHG9_0254_U01%20-%20Page%201-8.html",
                "teacherGuide": "tg/phy/physics_gr9/phy%209/M08_PHYS_TG_ETHG9_0179_U08.html"
            },
            {
                "id": "g9eu1",
                "gid": "g9",
                "cid": "g9e",
                "unit": "1",
                "title": " Learning to learn",
                "textbookUrl": "grade9/English/Eng-Grad9-unit1A.html",
                "teacherGuide": "tg/en/english_gr9/english%209/M01_ENG_TB_ETHG9_0254_U01%20-%20Page%201-8.html"
            },
            {
                "id": "g9eu2",
                "gid": "g9",
                "cid": "g9e",
                "unit": "2",
                "title": "Places to Visit",
                "textbookUrl": "grade9/English/Eng-gread9-unit2A.html",
                "teacherGuide": "tg/en/english_gr9/english%209/M01_ENG_TB_ETHG9_0254_U01%20-%20Page%209-16.html"
            },
            {
                "id": "g9eu3",
                "gid": "g9",
                "cid": "g9e",
                "unit": "3",
                "title": "Hobbies and crafts",
                "textbookUrl": "grade9/English/Eng-gread9A-unit3.html"
            },
            {
                "id": "g9eu4",
                "gid": "g9",
                "cid": "g9e",
                "unit": "4",
                "title": "Food for health",
                "textbookUrl": "grade9/English/Eng-Gread9-Unit4.html",
                "teacherGuide": "tg/en/english_gr9/english%209/M01_ENG_TB_ETHG9_0254_U01%20-%20Page%2017-24.html"
            },
            {
                "id": "g9eu5",
                "gid": "g9",
                "cid": "g9e",
                "unit": "5",
                "title": "HIV and AIDS",
                "textbookUrl": "grade9/English/Eng-Gread9-unit5.html",
                "teacherGuide": "tg/en/english_gr9/english%209/M02_ENG_TB_ETHG9_0254_U02%20-%20Page%201-8.html"
            },
            {
                "id": "g9eu6",
                "gid": "g9",
                "cid": "g9e",
                "unit": "6",
                "title": " Media,Tv and Radio",
                "textbookUrl": "grade9/English/Eng-Gread9-unit6.html",
                "teacherGuide": "tg/en/english_gr9/english%209/M02_ENG_TB_ETHG9_0254_U02%20-%20Page%209-14.html"
            },
            {
                "id": "g9eu7",
                "gid": "g9",
                "cid": "g9e",
                "unit": "7",
                "title": "Cities of the future",
                "textbookUrl": "grade9/English/Eng-Gread9-unit7.html",
                "teacherGuide": "tg/en/english_gr9/english%209/M02_ENG_TB_ETHG9_0254_U02%20-%20Page%2015-21.html"
            },
            {
                "id": "g9eu8",
                "gid": "g9",
                "cid": "g9e",
                "unit": "8",
                "title": "Money and finance",
                "textbookUrl": "grade9/English/Eng_Gread9_unit8.html",
                "teacherGuide": "tg/en/english_gr9/english%209/M03_ENG_TB_ETHG9_0254_U03%20-%20Page%201-7.html"
            },
            {
                "id": "g9eu9",
                "gid": "g9",
                "cid": "g9e",
                "unit": "9",
                "title": "People and traditional Culture",
                "textbookUrl": "grade9/English/Eng_Gread9_unit9.html",
                "teacherGuide": "tg/en/english_gr9/english%209/M03_ENG_TB_ETHG9_0254_U03%20-%20Page%208-13.html"
            },
            {
                "id": "g9eu10",
                "gid": "g9",
                "cid": "g9e",
                "unit": "10",
                "title": " Newspapers and Magazines",
                "textbookUrl": "grade9/English/Eng_Gread9_Unit10.html",
                "teacherGuide": "tg/en/english_gr9/english%209/M03_ENG_TB_ETHG9_0254_U03%20-%20Page%2014-19.html"
            },
            {
                "id": "g9eu11",
                "gid": "g9",
                "cid": "g9e",
                "unit": "11",
                "title": "Endangered animals",
                "textbookUrl": "grade9/English/Eng_Gread9_Unit11.html",
                "teacherGuide": "tg/en/english_gr9/english%209/M03_ENG_TB_ETHG9_0254_U03%20-%20Page%2020-20.html"
            },
            {
                "id": "g9eu12",
                "gid": "g9",
                "cid": "g9e",
                "unit": "12",
                "title": "Stigma and discrimination",
                "textbookUrl": "grade9/English/Eng_Gread9_Unit12.html",
                "teacherGuide": "tg/en/english_gr9/english%209/M03_ENG_TB_ETHG9_0254_U03%20-%20Page%2020-20.html"
            },
            {
                "id": "g9gu1",
                "gid": "g9",
                "cid": "g9g",
                "unit": "1",
                "title": "The concept of geography and map-reading",
                "description": "Geography, as a branch of knowledge, has been deﬁned by different people. The ancient Greeks and Romans deﬁned it as the description of the earth.",
                "textbookUrl": "grade9/geography/Geo_Grade_9_Book%20-%20Page%207-46.html",
                "teacherGuide": "tg/geo/geography_gr9/geo%209/Grade%209%20Geography%20Teacher's%20Guide%20%20-%20Page%2017-35.html"
            },
            {
                "id": "g9gu2",
                "gid": "g9",
                "cid": "g9g",
                "unit": "2",
                "title": " Physical environment of the world and ethiop",
                "description": "Geography, as a discipline, helps us to learn about people, their life styles, and the ways their lives are affected by their interactions with their physical environments.",
                "textbookUrl": "grade9/geography/Geo_Grade_9_Book%20-%20Page%2047-136.html",
                "teacherGuide": "tg/geo/geography_gr9/geo%209/Grade%209%20Geography%20Teacher's%20Guide%20%20-%20Page%2036-82.html"
            },
            {
                "id": "g9gu3",
                "gid": "g9",
                "cid": "g9g",
                "unit": "3",
                "title": "Human Population and Economic Activities",
                "description": "Through out human history, people have changed and adapted to the earth. They have done so in order to survive.",
                "textbookUrl": "grade9/geography/Geo_Grade_9_Book%20-%20Page%20137-182.html",
                "teacherGuide": "tg/geo/geography_gr9/geo%209/Grade%209%20Geography%20Teacher's%20Guide%20%20-%20Page%2083-114.html"
            },
            {
                "id": "g9gu4",
                "gid": "g9",
                "cid": "g9g",
                "unit": "4",
                "title": "Public and policy related issues in ethiopia",
                "textbookUrl": "grade9/geography/Geo_Grade_9_Book%20-%20Page%20183-198.html",
                "teacherGuide": "tg/geo/geography_gr9/geo%209/Grade%209%20Geography%20Teacher's%20Guide%20%20-%20Page%20115-158.html"
            },
            {
                "id": "g9ciu1",
                "gid": "g9",
                "cid": "g9ci",
                "unit": "1",
                "title": " Building a Democratic System",
                "description": "Democracy is a type of government where people elect their leaders. The ancient Greeks in Athens first practiced it. Women and slaves had no right to elect their leaders and were not able to be elected.",
                "textbookUrl": "grade9/civics/9-unit1.html"
            },
            {
                "id": "g9ciu2",
                "gid": "g9",
                "cid": "g9ci",
                "unit": "2",
                "title": "Rule of Law",
                "description": "A constitution is a document that lists the basic principles by which a group of people or state is governed.",
                "textbookUrl": "grade9/civics/9-unit2.html"
            },
            {
                "id": "g9ciu3",
                "gid": "g9",
                "cid": "g9ci",
                "unit": "3",
                "title": " Equality",
                "description": "Equality indicates some similarity between individuals and groups of people. It is a state of being equal in having similar rights, benefits, opportunities and burdens.",
                "textbookUrl": "grade9/civics/9-unit3.html"
            },
            {
                "id": "g9ciu4",
                "gid": "g9",
                "cid": "g9ci",
                "unit": "4",
                "title": "Justice",
                "description": "You have heard people say, “This is not right.” You may also have heard other people say, “This is not fair.” Justice is related to the idea of fairness.",
                "textbookUrl": "grade9/civics/9-unit4.html"
            },
            {
                "id": "g9ciu5",
                "gid": "g9",
                "cid": "g9ci",
                "unit": "5",
                "title": " Patriotism",
                "description": "Patriotism and citizenship are related to each other. Patriotism can mean: pride in the achievements and culture of one’s country; respect for national symbols such as the flag and national anthem.",
                "textbookUrl": "grade9/civics/9-unit5.html"
            },
            {
                "id": "g9ciu6",
                "gid": "g9",
                "cid": "g9ci",
                "unit": "6",
                "title": " Responsibility",
                "description": "Responsibility can be defined as having a duty of looking after someone or something and taking the blame if things go wrong.",
                "textbookUrl": "grade9/civics/9-unit6.html"
            },
            {
                "id": "g9ciu7",
                "gid": "g9",
                "cid": "g9ci",
                "unit": "7",
                "title": "Industriousness",
                "description": "You work to produce something useful. People first worked so they could eat. Because of this, they need to spend a lot of time working.",
                "textbookUrl": "grade9/civics/9-unit7.html"
            },
            {
                "id": "g9ciu8",
                "gid": "g9",
                "cid": "g9ci",
                "unit": "8",
                "title": "Self-Reliance",
                "description": "Self-reliance is the ability to support and take care of yourself. It is also the ability to make decisions independently. Self-reliance means to be free from the influence and control of others.",
                "textbookUrl": "grade9/civics/9-unit8.html"
            },
            {
                "id": "g9ciu9",
                "gid": "g9",
                "cid": "g9ci",
                "unit": "9",
                "title": "Saving",
                "description": "Saving means keeping something for the future. One of the reasons that people save is for the future. For example, most people save to buy or build a house, or buy a car.",
                "textbookUrl": "grade9/civics/9-unit9.html"
            },
            {
                "id": "g9ciu10",
                "gid": "g9",
                "cid": "g9ci",
                "unit": "10",
                "title": "Active Community Participation",
                "description": "People live together in villages, towns and cities. They form different associations like Iddir, mahiber, or kebele to make life better.",
                "textbookUrl": "grade9/civics/9-unit10.html"
            },
            {
                "id": "g9ciu11",
                "gid": "g9",
                "cid": "g9ci",
                "unit": "11",
                "title": "The Pursuit of Wisdom",
                "description": "Knowledge can be defined as understanding or learning that which is known. The purpose of knowledge is to know about things around us.",
                "textbookUrl": "grade9/civics/9-unit11.html"
            },
            {
                "id": "g9iu1",
                "gid": "g9",
                "cid": "g9i",
                "unit": "1",
                "title": " IntroductIon to Ict",
                "description": "Information and Communication Technologies (ICTs) have become a major factor in social and economic development of the society. The advances in technology and reductions in costs have made ICTs suitable for less developed countries.",
                "textbookUrl": "grade9/ICT/Complete%20Book%20ICT%20ST%20Grade-09%20-%20Page%205-48.html",
                "teacherGuide": "tg/ict/ICT_gr9/ict%209/Complete%20Book%20ICT%20TG%20Grade-09%20-%20Page%201-19.html"
            },
            {
                "id": "g9iu2",
                "gid": "g9",
                "cid": "g9i",
                "unit": "2",
                "title": "Application Software",
                "description": "Word processing software allows you to create, edit, format, print, and store text material. Word processor is the most common application software.",
                "textbookUrl": "grade9/ICT/Complete%20Book%20ICT%20ST%20Grade-09%20-%20Page%2049-71.html",
                "teacherGuide": "tg/ict/ICT_gr9/ict%209/Complete%20Book%20ICT%20TG%20Grade-09%20-%20Page%2020-27.html"
            },
            {
                "id": "g9iu3",
                "gid": "g9",
                "cid": "g9i",
                "unit": "3",
                "title": "Information And Computer Security",
                "description": "Security of information and related computer systems is a big concern for the computer users. So, the effective methods of protection are required. In this unit, you will learn about information and computer security.",
                "textbookUrl": "grade9/ICT/Complete%20Book%20ICT%20ST%20Grade-09%20-%20Page%2072-80.html",
                "teacherGuide": "tg/ict/ICT_gr9/ict%209/Complete%20Book%20ICT%20TG%20Grade-09%20-%20Page%2028-32.html"
            },
            {
                "id": "g9iu4",
                "gid": "g9",
                "cid": "g9i",
                "unit": "4",
                "title": "Application Software",
                "description": "The electronic spreadsheet is the brain child of Dan Bricklin and Bob Franktor. Behind the invention of first electronic worksheet VisiCalc (Visible Calculator) was this duo. Bricklin, a Harvard Business school student, got the idea of VisiCalc while spending hours manually to solve financial-planning problems.",
                "textbookUrl": "grade9/ICT/Complete%20Book%20ICT%20ST%20Grade-09%20-%20Page%2081-95.html",
                "teacherGuide": "tg/ict/ICT_gr9/ict%209/Complete%20Book%20ICT%20TG%20Grade-09%20-%20Page%2033-38.html"
            },
            {
                "id": "g9iu5",
                "gid": "g9",
                "cid": "g9i",
                "unit": "5",
                "title": " Using Internet",
                "description": "Internet is the network that contains other networks of computers around the globe into one seamless network",
                "textbookUrl": "grade9/ICT/Complete%20Book%20ICT%20ST%20Grade-09%20-%20Page%2096-120.html",
                "teacherGuide": "tg/ict/ICT_gr9/ict%209/Complete%20Book%20ICT%20TG%20Grade-09%20-%20Page%2039-46.html"
            },
            {
                "id": "g9iu6",
                "gid": "g9",
                "cid": "g9i",
                "unit": "6",
                "title": " controL And Learning with Logo",
                "description": "Logo is so easy that it can be understood by the 7 to 77 years old. Logo’s graphics language is called turtle graphics, which allows complex graphics images to be created with a minimum of coding. Logo has evolved into a powerful computer language.",
                "textbookUrl": "grade9/ICT/Complete%20Book%20ICT%20ST%20Grade-09%20-%20Page%20121-140.html",
                "teacherGuide": "tg/ict/ICT_gr9/ict%209/Complete%20Book%20ICT%20TG%20Grade-09%20-%20Page%2047-72.html"
            },
            {
                "id": "g9au1",
                "gid": "g9",
                "cid": "g9a",
                "unit": "1",
                "title": " ቋንቋና ህብረተሰብ",
                "textbookUrl": "grade9/Amharic/web/AmUnit1.html"
            },
            {
                "id": "g9au2",
                "gid": "g9",
                "cid": "g9a",
                "unit": "2",
                "title": "ስነ-ቃል",
                "textbookUrl": "grade9/Amharic/web/AmUnit2.html"
            },
            {
                "id": "g9au3",
                "gid": "g9",
                "cid": "g9a",
                "unit": "3",
                "title": "ቤተ- መጻህፍትና ስነ-ጽሑፍ",
                "textbookUrl": "grade9/Amharic/web/AmUnit3.html"
            },
            {
                "id": "g9au4",
                "gid": "g9",
                "cid": "g9a",
                "unit": "4",
                "title": "ልቦለድ",
                "textbookUrl": "grade9/Amharic/web/AmUnit4.html"
            },
            {
                "id": "g9au5",
                "gid": "g9",
                "cid": "g9a",
                "unit": "5",
                "title": "ሥነ- ግጥም",
                "textbookUrl": "grade9/Amharic/web/AmUnit5.html"
            },
            {
                "id": "g9au6",
                "gid": "g9",
                "cid": "g9a",
                "unit": "6",
                "title": " ተውኔት",
                "textbookUrl": "grade9/Amharic/web/AmUnit6.html"
            },
            {
                "id": "g9au7",
                "gid": "g9",
                "cid": "g9a",
                "unit": "7",
                "title": " አካባቢያችን",
                "textbookUrl": "grade9/Amharic/web/AmUnit7.html"
            },
            {
                "id": "g9au8",
                "gid": "g9",
                "cid": "g9a",
                "unit": "8",
                "title": "መገናኛ ብዙሃን",
                "textbookUrl": "grade9/Amharic/web/AmUnit8.html"
            },
            {
                "id": "g9au9",
                "gid": "g9",
                "cid": "g9a",
                "unit": "9",
                "title": "ምርጥ ንግግር",
                "textbookUrl": "grade9/Amharic/web/AmUnit9.html"
            },
            {
                "id": "g9au10",
                "gid": "g9",
                "cid": "g9a",
                "unit": "10",
                "title": "ክርክር",
                "textbookUrl": "grade9/Amharic/web/AmUnit10.html"
            },
            {
                "id": "g9aou1",
                "gid": "g9",
                "cid": "g9ao",
                "unit": "1",
                "title": "Afaaniiﬁ Faayidaa Isaa",
                "textbookUrl": "grade9/AO/GRADE%20ST%209%20-%20Page%207-18.html"
            },
            {
                "id": "g9aou2",
                "gid": "g9",
                "cid": "g9ao",
                "unit": "2",
                "title": " Addooyyee",
                "textbookUrl": "grade9/AO/GRADE%20ST%209%20-%20Page%2019-28.html"
            },
            {
                "id": "g9aou3",
                "gid": "g9",
                "cid": "g9ao",
                "unit": "3",
                "title": "Meeshaalee Walqunnamtii Ammayyaa",
                "textbookUrl": "grade9/AO/GRADE%20ST%209%20-%20Page%2029-36.html"
            },
            {
                "id": "g9aou4",
                "gid": "g9",
                "cid": "g9ao",
                "unit": "4",
                "title": "Barnootaafi Misooma",
                "textbookUrl": "grade9/AO/GRADE%20ST%209%20-%20Page%2037-46.html"
            },
            {
                "id": "g9aou5",
                "gid": "g9",
                "cid": "g9ao",
                "unit": "5",
                "title": " Faalama Qilleensaa",
                "textbookUrl": "grade9/AO/GRADE%20ST%209%20-%20Page%2047-56.html"
            },
            {
                "id": "g9aou6",
                "gid": "g9",
                "cid": "g9ao",
                "unit": "6",
                "title": " Nageenya Karaa",
                "textbookUrl": "grade9/AO/GRADE%20ST%209%20-%20Page%2057-68.html"
            },
            {
                "id": "g9aou7",
                "gid": "g9",
                "cid": "g9ao",
                "unit": "7",
                "title": "Jeneraal Taaddasaa Birruu",
                "textbookUrl": "grade9/AO/GRADE%20ST%209%20-%20Page%2069-80.html"
            },
            {
                "id": "g9aou8",
                "gid": "g9",
                "cid": "g9ao",
                "unit": "8",
                "title": "Sirna Nyaataa",
                "textbookUrl": "grade9/AO/GRADE%20ST%209%20-%20Page%2081-88.html"
            },
            {
                "id": "g9aou9",
                "gid": "g9",
                "cid": "g9ao",
                "unit": "9",
                "title": "Miidhaa Ilbiisoonni Qaama Beeyladaarratti Fidan",
                "textbookUrl": "grade9/AO/GRADE%20ST%209%20-%20Page%2089-100.html"
            },
            {
                "id": "g9aou10",
                "gid": "g9",
                "cid": "g9ao",
                "unit": "10",
                "title": "Dhiibbaa Eedsiin Misoomarratti Fidu",
                "textbookUrl": "grade9/AO/GRADE%20ST%209%20-%20Page%20101-112.html"
            },
            {
                "id": "g9aou11",
                "gid": "g9",
                "cid": "g9ao",
                "unit": "11",
                "title": "Ispoortii Aadaa",
                "textbookUrl": "grade9/AO/GRADE%20ST%209%20-%20Page%20113-120.html"
            },
            {
                "id": "g9aou12",
                "gid": "g9",
                "cid": "g9ao",
                "unit": "12",
                "title": "Fardaan Gulufuu",
                "textbookUrl": "grade9/AO/GRADE%20ST%209%20-%20Page%20121-130.html"
            },
            {
                "id": "g9aou13",
                "gid": "g9",
                "cid": "g9ao",
                "unit": "13",
                "title": "Aramaafi Dhukkuba Biqiltootaa",
                "textbookUrl": "grade9/AO/GRADE%20ST%209%20-%20Page%20131-136.html"
            },
            {
                "id": "g9aou14",
                "gid": "g9",
                "cid": "g9ao",
                "unit": "14",
                "title": " Bilillee/ Mahibuubaa",
                "textbookUrl": "grade9/AO/GRADE%20ST%209%20-%20Page%20137-148.html"
            },
            {
                "id": "g9aou15",
                "gid": "g9",
                "cid": "g9ao",
                "unit": "15",
                "title": "Looga Afaan Oromoo",
                "textbookUrl": "grade9/AO/GRADE%20ST%209%20-%20Page%20149-158.html"
            },
            {
                "id": "g9aou16",
                "gid": "g9",
                "cid": "g9ao",
                "unit": "16",
                "title": "Yeroo Yeroon Qabi",
                "textbookUrl": "grade9/AO/GRADE%20ST%209%20-%20Page%20159-166.html"
            },
            {
                "id": "g9aou17",
                "gid": "g9",
                "cid": "g9ao",
                "unit": "17",
                "title": " Garaa Walitti Nahe",
                "textbookUrl": "grade9/AO/GRADE%20ST%209%20-%20Page%20167-178.html"
            },
            {
                "id": "g9aou18",
                "gid": "g9",
                "cid": "g9ao",
                "unit": "18",
                "title": " Xalayaa Barreessuu",
                "textbookUrl": "grade9/AO/GRADE%20ST%209%20-%20Page%20179-189.html"
            },
            {
                "id": "g10bu1",
                "gid": "g10",
                "cid": "g10b",
                "unit": "1",
                "title": " Biotechnology",
                "description": "use of micro-organisms to make things that people want, often involving industrial production microbiology study of micro-organisms and their effect on humans",
                "textbookUrl": "grade10/biology_gr10/biology-gr10-unit%201.html"
            },
            {
                "id": "g10bu2",
                "gid": "g10",
                "cid": "g10b",
                "unit": "2",
                "title": "heredity",
                "description": "of the cells contains the information needed to build a whole new animal, plant, bacterium or fungus.",
                "textbookUrl": "grade10/biology_gr10/biology-gr10-unit%202.html"
            },
            {
                "id": "g10bu3",
                "gid": "g10",
                "cid": "g10b",
                "unit": "3",
                "title": "human biology and health",
                "textbookUrl": "grade10/biology_gr10/index.html#"
            },
            {
                "id": "g10bu4",
                "gid": "g10",
                "cid": "g10b",
                "unit": "4",
                "title": " Food making and growth in plants",
                "textbookUrl": "grade10/biology_gr10/index.html#"
            },
            {
                "id": "g10bu5",
                "gid": "g10",
                "cid": "g10b",
                "unit": "5",
                "title": "Classification",
                "textbookUrl": "grade10/biology_gr10/index.html#"
            },
            {
                "id": "g10cu1",
                "gid": "g10",
                "cid": "g10h",
                "unit": "1",
                "title": "Introduction to organic chemistry",
                "description": "Know the uses of organic compound in the manufacture of plastics, beverages, pharmaceuticals, soaps and detergents, dry cleaning chemicals, fuels, pesticides, and herbicides;",
                "textbookUrl": "grade10/chemistry_gr10/Chemistry%20Gr10-unit1.html",
                "teacherGuide": "tg/chem/Chemistry_gr10/chem%2010/Final%20Chemistry%20TG%20G_10%20-%20Page%201-65.html"
            },
            {
                "id": "g10cu2",
                "gid": "g10",
                "cid": "g10h",
                "unit": "2",
                "title": " Important inorganic compounds",
                "description": "Develop skills for identifying acidic, basic and neutral compounds;",
                "textbookUrl": "grade10/chemistry_gr10/Chemistry%20Gr10-unit2.html",
                "teacherGuide": "tg/chem/Chemistry_gr10/chem%2010/Final%20Chemistry%20TG%20G_10%20-%20Page%2066-106.html"
            },
            {
                "id": "g10cu3",
                "gid": "g10",
                "cid": "g10h",
                "unit": "3",
                "title": " Electrochemistry",
                "description": "Conductivity apparatus is used to test the conductivity of different solid substances or that of aqueous solutions of different compounds",
                "textbookUrl": "grade10/chemistry_gr10/Chemistry%20Gr%2010-unit3.html",
                "teacherGuide": "tg/chem/Chemistry_gr10/chem%2010/Final%20Chemistry%20TG%20G_10%20-%20Page%20107-128.html"
            },
            {
                "id": "g10cu4",
                "gid": "g10",
                "cid": "g10h",
                "unit": "4",
                "title": " Chemistry in industry and enivironmental pollution",
                "description": "Natural resources can be classified as renewable and non-renewable resources Renewable resources are resources that can be replenished (replaced) by natural",
                "textbookUrl": "grade10/chemistry_gr10/Chemistry%20Gr10-unit4.html",
                "teacherGuide": "tg/chem/Chemistry_gr10/chem%2010/Final%20Chemistry%20TG%20G_10%20-%20Page%20129-238.html"
            },
            {
                "id": "g10mu1",
                "gid": "g10",
                "cid": "g10m",
                "unit": "1",
                "title": "Polynomial functions",
                "description": "Constant, linear and quadratic functions are all special cases of a wider class of functions called polynomial functions.",
                "textbookUrl": "grade10/maths_gr10/web/mathsUnit1.html"
            },
            {
                "id": "g10mu2",
                "gid": "g10",
                "cid": "g10m",
                "unit": "2",
                "title": "Exponential and logarithmic functions",
                "description": "Exponential and logarithmic functions come into play when a variable appears as an exponent, for example, in an expression such as 2x.",
                "textbookUrl": "grade10/maths_gr10/web/mathsUnit2.html"
            },
            {
                "id": "g10mu3",
                "gid": "g10",
                "cid": "g10m",
                "unit": "3",
                "title": "Solving inequalities",
                "description": "you will study methods of solving inequalities involving absolute values, system of linear inequalities in two variables and quadratic inequalities. You will also learn about the applications of these methods in solving practical problems involving inequalities.",
                "textbookUrl": "grade10/maths_gr10/web/mathsUnit3.html"
            },
            {
                "id": "g10mu4",
                "gid": "g10",
                "cid": "g10m",
                "unit": "4",
                "title": "Coordinate geometry",
                "description": "you have seen an important connection between algebra and geometry. One of the great discoveries of 17th century mathematics was the subject of analytic geometry.",
                "textbookUrl": "grade10/maths_gr10/web/mathsUnit4.html"
            },
            {
                "id": "g10mu5",
                "gid": "g10",
                "cid": "g10m",
                "unit": "5",
                "title": "Trigonometic Functions",
                "description": "the trigonometric functions (also called circular functions) are functions of angles. They were originally used to relate the angles of a triangle to the lengths of the sides of a triangle.",
                "textbookUrl": "grade10/maths_gr10/web/mathsUnit5.html"
            },
            {
                "id": "g10mu6",
                "gid": "g10",
                "cid": "g10m",
                "unit": "6",
                "title": "Plane geometry",
                "description": "Geometry is one of the lessons that gives the best training in correct and accurate methods of thinking.",
                "textbookUrl": "grade10/maths_gr10/web/mathsUnit6.html"
            },
            {
                "id": "g10mu7",
                "gid": "g10",
                "cid": "g10m",
                "unit": "7",
                "title": "Measurement",
                "description": "You will learn more about surface areas and volumes of other solid figures. You will also study about surface areas and volumes of composed solids and frustums of pyramids and cones.",
                "textbookUrl": "grade10/maths_gr10/web/mathsUnit7.html"
            },
            {
                "id": "g10pu1",
                "gid": "g10",
                "cid": "g10p",
                "unit": "1",
                "title": "Motion in 2D",
                "description": "A detailed understanding of two-dimensional (2D) motion is essential for physicists, as it enables them to complete the calculations required to design objects from complex rockets to roads around cities.",
                "textbookUrl": "grade10/physics_gr10/M01_PHYS_SB_ETHG10_0186_U01.html",
                "teacherGuide": "tg/phy/physics_gr10/phy%2010/M01_PHYS_TG_ETHG10_0193_U01.html"
            },
            {
                "id": "g10pu2",
                "gid": "g10",
                "cid": "g10p",
                "unit": "2",
                "title": " Electrostatics",
                "description": "Electrostatics the buildup of electric charge on the surface of objects charge an electric charge, positive, negative, or zero, found on the elementary particles of matter",
                "textbookUrl": "grade10/physics_gr10/M02_PHYS_SB_ETHY10_0186_U02.html",
                "teacherGuide": "tg/phy/physics_gr10/phy%2010/M02_PHYS_TG_ETHG10_0193_U02.html"
            },
            {
                "id": "g10pu3",
                "gid": "g10",
                "cid": "g10p",
                "unit": "3",
                "title": "Current Electricity",
                "description": "An electric current is a flow of charge. Comparing it with water, asmall current is like a trickle passing through a pipe; a really large current is like a river in flood.",
                "textbookUrl": "grade10/physics_gr10/M03_PHYS_SB_ETHG10_0186_U03.html",
                "teacherGuide": "tg/phy/physics_gr10/phy%2010/M03_PHYS_TG_ETHG10_0193_U03.html"
            },
            {
                "id": "g10pu4",
                "gid": "g10",
                "cid": "g10p",
                "unit": "4",
                "title": "Electromagnetism",
                "description": "Fill a test tube two-thirds full with iron filings or shredded steel wool and bring the end of the tube towards first the north end of a compass needle and then the south end,",
                "textbookUrl": "grade10/physics_gr10/M04_PHYS_SB_ETHY10_0186_U04.html",
                "teacherGuide": "tg/phy/physics_gr10/phy%2010/M04_PHYS_TG_ETHG10_0193_U04.html"
            },
            {
                "id": "g10pu5",
                "gid": "g10",
                "cid": "g10p",
                "unit": "5",
                "title": "Introduction to Electronics",
                "description": "Electronics is the study and design of systems that use the flow of electrons through such components as semiconductors, resistors and capacitors..",
                "textbookUrl": "grade10/physics_gr10/M05_PHYS_SB_ETHG10_0186_U05-1.html",
                "teacherGuide": "tg/phy/physics_gr10/phy%2010/M05_PHYS_TG_ETHG10_1093_U05.html"
            },
            {
                "id": "g10pu6",
                "gid": "g10",
                "cid": "g10p",
                "unit": "6",
                "title": "Electromagnetic waves and geometrical optics",
                "description": "The vibrations in electromagnetic waves come from electric and magnetic fields. Electromagnetic waves are produced when a magnetic field and an electric field are at right angles to each other",
                "textbookUrl": "grade10/physics_gr10/M06_PHYS_SB_ETHG10_0186_U06.html",
                "teacherGuide": "tg/phy/physics_gr10/phy%2010/M06_PHYS_ETHY10_5414_U06.html"
            },
            {
                "id": "g10eu1",
                "gid": "g10",
                "cid": "g10e",
                "unit": "1",
                "title": "Sport and fitness",
                "description": "Catherine Ndereba is one of Kenya’s leading marathon runners. She was born in 1972 in Nyeri, Kenya. She started running at school, where she had to train before and after class. After leaving school,",
                "textbookUrl": "grade10/English_gr10/M01_ENG_SB_ETHG10_0261_M01.html",
                "teacherGuide": "tg/en/english_gr10/english%2010/M01_ENG_TB_ETHG10_0278_M01%20-%20Page%201-7.html"
            },
            {
                "id": "g10eu2",
                "gid": "g10",
                "cid": "g10e",
                "unit": "2",
                "title": " Health first aid",
                "description": "If you cut your hand badly and it begins to bleed, you should clean the wound and cover it with a bandage. If the person who has been wounded is in shock,",
                "textbookUrl": "grade10/English_gr10/M02_ENG_SB_ETHG10_0261_M02.html",
                "teacherGuide": "tg/en/english_gr10/english%2010/M01_ENG_TB_ETHG10_0278_M01%20-%20Page%208-16.html"
            },
            {
                "id": "g10eu3",
                "gid": "g10",
                "cid": "g10e",
                "unit": "3",
                "title": " Fiction",
                "description": "This is an extract from a book called Halima by Meshack Asare, a Ghanaian writer. Here Halima, a young girl, is in the market..",
                "textbookUrl": "grade10/English_gr10/M03_ENG_SB_ETHG10_0261_M03.html",
                "teacherGuide": "tg/en/english_gr10/english%2010/M01_ENG_TB_ETHG10_0278_M01%20-%20Page%2017-23.html"
            },
            {
                "id": "g10eu4",
                "gid": "g10",
                "cid": "g10e",
                "unit": "4",
                "title": "Moral education and personal reponsibility",
                "description": "If the work was not going as quickly as the headmaster expected, the big boys, instead of giving us a helping hand, used to whip us with branches pulled from the trees.",
                "textbookUrl": "grade10/English_gr10/M04_ENG_SB_ETHG10_0261_M04.html",
                "teacherGuide": "tg/en/english_gr10/english%2010/M02_ENG_TB_ETHG10_0278_M02%20-%20Page%201-6.html"
            },
            {
                "id": "g10eu5",
                "gid": "g10",
                "cid": "g10e",
                "unit": "5",
                "title": " Advertising",
                "description": "There are four basic elements to any successful advertisement: “keep it simple, a catchphrase is nice, brand recognition is vital, and sex, violence, animals, and kids sell”.",
                "textbookUrl": "grade10/English_gr10/M05_ENG_SB_ETHG10_0261_M05.html",
                "teacherGuide": "tg/en/english_gr10/english%2010/M02_ENG_TB_ETHG10_0278_M02%20-%20Page%207-13.html"
            },
            {
                "id": "g10eu6",
                "gid": "g10",
                "cid": "g10e",
                "unit": "6",
                "title": " Drugs",
                "description": "A drug is any chemical that alters how the body works, or how a person behaves or feels. Drugs are used to treat illnesses and diseases, to relieve pain and sometimes to relax and enhance pleasure.",
                "textbookUrl": "grade10/English_gr10/M06_ENG_SB_ETHG10_0261_M06.html",
                "teacherGuide": "tg/en/english_gr10/english%2010/M02_ENG_TB_ETHG10_0278_M02%20-%20Page%2020-21.html"
            },
            {
                "id": "g10eu7",
                "gid": "g10",
                "cid": "g10e",
                "unit": "7",
                "title": "Natural disasters",
                "description": "a sudden I was down here,” said Fernando Barzun, marveling that he escaped with no major injuries. He said a relative was still trapped in the rubble six hours after the quake, “but he keeps shouting.",
                "textbookUrl": "grade10/English_gr10/M07_ENG_SB_ETHG10_0261_M07.html",
                "teacherGuide": "tg/en/english_gr10/english%2010/M03_ENG_TB_ETHG10_0278_M03%20-%20Page%201-6.html"
            },
            {
                "id": "g10eu8",
                "gid": "g10",
                "cid": "g10e",
                "unit": "8",
                "title": "Education",
                "description": "By 1974, in spite of efforts by the government to improve the situation, less than 10 per cent of the total population was literate. Few children were able to receive an education",
                "textbookUrl": "grade10/English_gr10/M08_ENG_SB_ETHG10_0261_M08.html",
                "teacherGuide": "tg/en/english_gr10/english%2010/M03_ENG_TB_ETHG10_0278_M03%20-%20Page%201-6.html"
            },
            {
                "id": "g10eu9",
                "gid": "g10",
                "cid": "g10e",
                "unit": "9",
                "title": "Seas and rivers",
                "description": "One of the most important natural resources nature has endowed mankind with is rivers. In ancient times, great civilizations developed in fertile river valleys.",
                "textbookUrl": "grade10/English_gr10/M09_ENG_SB_ETHG10_0261_M09.html",
                "teacherGuide": "tg/en/english_gr10/english%2010/M03_ENG_TB_ETHG10_0278_M03%20-%20Page%2012-17.html"
            },
            {
                "id": "g10eu10",
                "gid": "g10",
                "cid": "g10e",
                "unit": "10",
                "title": "Energy",
                "description": "Energy makes change possible. We use it to do things for us. It moves cars along the road and boats over the water. It bakes a cake in the oven and keeps ice frozen in the freezer.",
                "textbookUrl": "grade10/English_gr10/M10_ENG_SB_ETHG10_0261_M10.html",
                "teacherGuide": "http://172.16.0.5:8082/tg/en/english_gr10/english%2010/M04_ENG_TB_ETHG10_0278_M04%20-%20Page%201-6.html"
            },
            {
                "id": "g10eu11",
                "gid": "g10",
                "cid": "g10e",
                "unit": "11",
                "title": " Applications for jobs/college",
                "description": "listen to advice when applying for a job talk about your plans for the future analyze your achievements draw up a CV for someone read some job advertisements read some letters of application for a job",
                "textbookUrl": "grade10/English_gr10/M11_ENG_SB_ETHG10_0261_M11.html",
                "teacherGuide": "tg/en/english_gr10/english%2010/M04_ENG_TB_ETHG10_0278_M04%20-%20Page%207-12.html"
            },
            {
                "id": "g10eu12",
                "gid": "g10",
                "cid": "g10e",
                "unit": "12",
                "title": "Births,weddings and funerals",
                "description": "Weddings in Europe and America are not arranged by the parents. The young people are free to choose their own partners and mark their agreement to marry by the gift from the man to the girl of an engagement ring.",
                "textbookUrl": "grade10/English_gr10/M12_ENG_SB_ETHG10_0261_M012.html",
                "teacherGuide": "tg/en/english_gr10/english%2010/M04_ENG_TB_ETHG10_0278_M04%20-%20Page%2013-18.html"
            },
            {
                "id": "g10gu1",
                "gid": "g10",
                "cid": "g10g",
                "unit": "1",
                "title": "Map reading",
                "description": " Maps are graphical representations of the earth’s surface. They give a bird’s eye-view of features of the earth’s surface.",
                "textbookUrl": "grade10/geography_gr10/Geo_Grade_10_1.html",
                "teacherGuide": "tg/geo/geography_gr10/geo%2010/Grade%2010%20Geography%20Teacher's%20Guide%20-%20Page%2025-59.html"
            },
            {
                "id": "g10gu2",
                "gid": "g10",
                "cid": "g10g",
                "unit": "2",
                "title": "The physical environment of the world and ethiopia",
                "description": "The universe is the totality of space and cosmos, in which everything is found. All heavenly bodies, including all stars, together with the sun, comets, meteors, planets and their satellites are found in the very vast space called the universe",
                "textbookUrl": "grade10/geography_gr10/Geo_Grade_10_2.html",
                "teacherGuide": "tg/geo/geography_gr10/geo%2010/Grade%2010%20Geography%20Teacher's%20Guide%20-%20Page%2060-101.html"
            },
            {
                "id": "g10gu3",
                "gid": "g10",
                "cid": "g10g",
                "unit": "3",
                "title": "World population",
                "description": "This unit deals with population of the world and Ethiopia.",
                "textbookUrl": "grade10/geography_gr10/Geo_Grade_10_3.html",
                "teacherGuide": "tg/geo/geography_gr10/geo%2010/Grade%2010%20Geography%20Teacher's%20Guide%20-%20Page%20102-141.html"
            },
            {
                "id": "g10gu4",
                "gid": "g10",
                "cid": "g10g",
                "unit": "4",
                "title": "Economic system and development",
                "description": "In this unit you will read about the three major categories of economic systems of the world and issues related to sustainable economic development.",
                "textbookUrl": "grade10/geography_gr10/Geo_Grade_10_4.html",
                "teacherGuide": "tg/geo/geography_gr10/geo%2010/Grade%2010%20Geography%20Teacher's%20Guide%20-%20Page%20142-179.html"
            },
            {
                "id": "g10ciu1",
                "gid": "g10",
                "cid": "g10ci",
                "unit": "1",
                "title": " Building a Democratic System",
                "description": " Building a Democratic SystemIn Grade 9, you learnt about ancient and modern forms of democracy. The first form of democracy was direct democracy, while the modern form is indirect democracy.",
                "textbookUrl": "grade10/civics_gr10/10-unit1.html"
            },
            {
                "id": "g10ciu2",
                "gid": "g10",
                "cid": "g10ci",
                "unit": "2",
                "title": "Rule of Law",
                "description": "All states have a constitution. Most constitutions, whether they are written or unwritten, are basic documents of that country or state.",
                "textbookUrl": "grade10/civics_gr10/10-unit2.html"
            },
            {
                "id": "g10ciu3",
                "gid": "g10",
                "cid": "g10ci",
                "unit": "3",
                "title": "Equality",
                "description": "Equality does not mean the provision of identical treatment and benefits.",
                "textbookUrl": "grade10/civics_gr10/10-unit3.html"
            },
            {
                "id": "g10ciu4",
                "gid": "g10",
                "cid": "g10ci",
                "unit": "4",
                "title": "Justice",
                "description": "In this lesson, you will learn the impact of the lack of justice, which includes civil war, instability, famine and poverty.",
                "textbookUrl": "grade10/civics_gr10/10-unit4.html"
            },
            {
                "id": "g10ciu5",
                "gid": "g10",
                "cid": "g10ci",
                "unit": "5",
                "title": "Patriotism",
                "description": "Citizens develop patriotic feelings about their country when they all feel equal.",
                "textbookUrl": "grade10/civics_gr10/10-unit5.html"
            },
            {
                "id": "g10ciu6",
                "gid": "g10",
                "cid": "g10ci",
                "unit": "6",
                "title": "Responsibility",
                "description": "Every citizen has civic duties. Civic duties are the responsibilities of all citizens. Civil duties are part of the constitutional responsibilities of citizens of a country",
                "textbookUrl": "grade10/civics_gr10/10-unit6.html"
            },
            {
                "id": "g10ciu7",
                "gid": "g10",
                "cid": "g10ci",
                "unit": "7",
                "title": "Industriousness",
                "description": "As you have seen in Grade 9, when we work we make something useful or serve others. We are going to look at the importance of work for our well-being.",
                "textbookUrl": "grade10/civics_gr10/10-unit7.html"
            },
            {
                "id": "g10ciu8",
                "gid": "g10",
                "cid": "g10ci",
                "unit": "8",
                "title": " Self-Reliance",
                "description": "Self-reliance is the ability to support and take care of yourself. It is also the ability to make decisions independently. Self-reliance means to be free from the influence and control of others.",
                "textbookUrl": "grade10/civics_gr10/10-unit8.html"
            },
            {
                "id": "g10ciu9",
                "gid": "g10",
                "cid": "g10ci",
                "unit": "9",
                "title": "Saving",
                "description": "Saving means keeping something for the future. One of the reasons that people save is for the future. For example, most people save to buy or build a house, or buy a car.",
                "textbookUrl": "grade10/civics_gr10/10-unit9.html"
            },
            {
                "id": "g10ciu10",
                "gid": "g10",
                "cid": "g10ci",
                "unit": "10",
                "title": "Active Community Participation",
                "description": "One level of participation is political participation. This includes being a member of a political party, commenting on its program and contacting public officials",
                "textbookUrl": "grade10/civics_gr10/10-unit10.html"
            },
            {
                "id": "g10ciu11",
                "gid": "g10",
                "cid": "g10ci",
                "unit": "11",
                "title": "The Pursuit of Wisdom",
                "description": "Learning means acquiring knowledge about the world around us and humans are the only animals that do this.",
                "textbookUrl": "grade10/civics_gr10/10-unit11.html"
            },
            {
                "id": "g10iu1",
                "gid": "g10",
                "cid": "g10i",
                "unit": "1",
                "title": "Introduction to ICT",
                "description": "Information and Communications Technology (ICT) refers to the concept of using technology to get information. ICT involves the use of computers and other electronic devices to access information easily and quickly.",
                "textbookUrl": "grade10/ICT/CompleteBookICTSTGrade-10%20-%20Page%205-21.html",
                "teacherGuide": "tg/ict/ICT_gr10/ict%2010/Complete%20Book%20ICT%20TG%20Grade-10%20-%20Page%201-10.html"
            },
            {
                "id": "g10iu2",
                "gid": "g10",
                "cid": "g10i",
                "unit": "2",
                "title": "ApplicAtion Software",
                "description": "Application software is a set of programs designed for specific uses or applications such as word processing, graphics or spreadsheet analysis.",
                "textbookUrl": "grade10/ICT/CompleteBookICTSTGrade-10%20-%20Page%2022-68.html",
                "teacherGuide": "tg/ict/ICT_gr10/ict%2010/Complete%20Book%20ICT%20TG%20Grade-10%20-%20Page%2011-23.html"
            },
            {
                "id": "g10iu3",
                "gid": "g10",
                "cid": "g10i",
                "unit": "3",
                "title": "information and computer security",
                "description": "Information and computer security risks arise from the intentional or unintentional misuse of computers, network resources as well as the Internet. These risks may result in the loss of or damage to computer hardware, software, confidential information, and data integrity as well as network and Internet availability.",
                "textbookUrl": "grade10/ICT/CompleteBookICTSTGrade-10%20-%20Page%2069-78.html",
                "teacherGuide": "tg/ict/ICT_gr10/ict%2010/Complete%20Book%20ICT%20TG%20Grade-10%20-%20Page%2024-28.html"
            },
            {
                "id": "g10iu4",
                "gid": "g10",
                "cid": "g10i",
                "unit": "4",
                "title": "Application Software",
                "description": "application software in the world. These are used everywhere from a small store to a large manufacturing house. These can be used for calculating accounts, managing inventory, managing payroll, managing and analysing the sales and marketing.",
                "textbookUrl": "grade10/ICT/CompleteBookICTSTGrade-10%20-%20Page%2079-119.html",
                "teacherGuide": "tg/ict/ICT_gr10/ict%2010/Complete%20Book%20ICT%20TG%20Grade-10%20-%20Page%2029-42.html"
            },
            {
                "id": "g10iu5",
                "gid": "g10",
                "cid": "g10i",
                "unit": "5",
                "title": "Using internet",
                "description": "The first step towards the construction of Internet was taken by U.S. Department of Defense in 1969, when they approved a project named ARPANET (acronym for Advanced Research Projects Agency NETwork).",
                "textbookUrl": "grade10/ICT/CompleteBookICTSTGrade-10%20-%20Page%20120-139.html",
                "teacherGuide": "tg/ict/ICT_gr10/ict%2010/Complete%20Book%20ICT%20TG%20Grade-10%20-%20Page%2043-49.html"
            },
            {
                "id": "g10iu6",
                "gid": "g10",
                "cid": "g10i",
                "unit": "6",
                "title": " Control and learning with logo",
                "description": "LOGO is one of the easiest and simplest computer languages. We can perform various functions using LOGO such as drawing figures, typing text and performing calculations.",
                "textbookUrl": "grade10/ICT/CompleteBookICTSTGrade-10%20-%20Page%20140-152.html",
                "teacherGuide": "tg/ict/ICT_gr10/ict%2010/Complete%20Book%20ICT%20TG%20Grade-10%20-%20Page%2050-76.html"
            },
            {
                "id": "g10au1",
                "gid": "g10",
                "cid": "g10a",
                "unit": "1",
                "title": "ቋንቋና ህብረተሰብ",
                "textbookUrl": "grade10/Amharic/web/AmUnit1.html"
            },
            {
                "id": "g10au2",
                "gid": "g10",
                "cid": "g10a",
                "unit": "2",
                "title": " ባህላዊ ጋብቻ",
                "textbookUrl": "grade10/Amharic/web/AmUnit2.html"
            },
            {
                "id": "g10au3",
                "gid": "g10",
                "cid": "g10a",
                "unit": "3",
                "title": " ልቦለድ",
                "textbookUrl": "grade10/Amharic/web/AmUnit3.html"
            },
            {
                "id": "g10au4",
                "gid": "g10",
                "cid": "g10a",
                "unit": "4",
                "title": "ማህበረሰብና ጤና",
                "textbookUrl": "grade10/Amharic/web/AmUnit4.html"
            },
            {
                "id": "g10au5",
                "gid": "g10",
                "cid": "g10a",
                "unit": "5",
                "title": "ቀና አመለካከት",
                "textbookUrl": "grade10/Amharic/web/AmUnit5.html"
            },
            {
                "id": "g10au6",
                "gid": "g10",
                "cid": "g10a",
                "unit": "6",
                "title": " ግጥም",
                "textbookUrl": "grade10/Amharic/web/AmUnit6.html"
            },
            {
                "id": "g10au7",
                "gid": "g10",
                "cid": "g10a",
                "unit": "7",
                "title": " የአረጋውያን ሚና",
                "textbookUrl": "grade10/Amharic/web/AmUnit7.html"
            },
            {
                "id": "g10au8",
                "gid": "g10",
                "cid": "g10a",
                "unit": "8",
                "title": "ሴቶች በባህል ውስጥ",
                "textbookUrl": "grade10/Amharic/web/AmUnit8.html"
            },
            {
                "id": "g10au9",
                "gid": "g10",
                "cid": "g10a",
                "unit": "9",
                "title": "ሱስ",
                "textbookUrl": "grade10/Amharic/web/AmUnit9.html"
            },
            {
                "id": "g10au10",
                "gid": "g10",
                "cid": "g10a",
                "unit": "10",
                "title": "ሥራና ምርት",
                "textbookUrl": "grade10/Amharic/web/AmUnit10.html"
            },
            {
                "id": "g10aou1",
                "gid": "g10",
                "cid": "g10ao",
                "unit": "1",
                "title": "Afaan Akkamitti Jalqabame?",
                "textbookUrl": "grade10/AO/GRADE%20ST%2010%20-%20Page%207-23.html"
            },
            {
                "id": "g10aou2",
                "gid": "g10",
                "cid": "g10ao",
                "unit": "2",
                "title": " Dhukkuboota Wal-Qunnamtii Saalaatin Darban",
                "textbookUrl": "grade10/AO/GRADE%20ST%2010%20-%20Page%2024-36.html"
            },
            {
                "id": "g10aou3",
                "gid": "g10",
                "cid": "g10ao",
                "unit": "3",
                "title": "Sirna Fuudhaafi Heeruma Oromiyaa Bahaa",
                "textbookUrl": "grade10/AO/GRADE%20ST%2010%20-%20Page%2037-44.html"
            },
            {
                "id": "g10aou4",
                "gid": "g10",
                "cid": "g10ao",
                "unit": "4",
                "title": "Toltuufi Hiree Ishii",
                "textbookUrl": "grade10/AO/GRADE%20ST%2010%20-%20Page%2045-52.html"
            },
            {
                "id": "g10aou5",
                "gid": "g10",
                "cid": "g10ao",
                "unit": "5",
                "title": " Burqaafi Dureettii",
                "textbookUrl": "grade10/AO/GRADE%20ST%2010%20-%20Page%2053-62.html"
            },
            {
                "id": "g10aou6",
                "gid": "g10",
                "cid": "g10ao",
                "unit": "6",
                "title": "Onismoos Nasiib",
                "textbookUrl": "grade10/AO/GRADE%20ST%2010%20-%20Page%2063-72.html"
            },
            {
                "id": "g10aou7",
                "gid": "g10",
                "cid": "g10ao",
                "unit": "7",
                "title": " Faayidaa Bosonaafi Bineensotaa",
                "textbookUrl": "grade10/AO/GRADE%20ST%2010%20-%20Page%2073-82.html"
            },
            {
                "id": "g10aou8",
                "gid": "g10",
                "cid": "g10ao",
                "unit": "8",
                "title": "Garaa Kaasaa",
                "textbookUrl": "grade10/AO/GRADE%20ST%2010%20-%20Page%2083-96.html"
            },
            {
                "id": "g10aou9",
                "gid": "g10",
                "cid": "g10ao",
                "unit": "9",
                "title": " Sirna Gadaa",
                "textbookUrl": "grade10/AO/GRADE%20ST%2010%20-%20Page%2097-106.html"
            },
            {
                "id": "g10aou10",
                "gid": "g10",
                "cid": "g10ao",
                "unit": "10",
                "title": "Guddifachaa",
                "textbookUrl": "grade10/AO/GRADE%20ST%2010%20-%20Page%20107-114.html"
            },
            {
                "id": "g10aou11",
                "gid": "g10",
                "cid": "g10ao",
                "unit": "11",
                "title": " Kunuunsa Qabeenya Uumamaa",
                "textbookUrl": "grade10/AO/GRADE%20ST%2010%20-%20Page%20115-122.html"
            },
            {
                "id": "g10aou12",
                "gid": "g10",
                "cid": "g10ao",
                "unit": "12",
                "title": "Jireenya Baadiyyaafi Magaalaa",
                "textbookUrl": "grade10/AO/GRADE%20ST%2010%20-%20Page%20123-130.html"
            },
            {
                "id": "g10aou13",
                "gid": "g10",
                "cid": "g10ao",
                "unit": "13",
                "title": "Sheek Bakrii Saaphaloo",
                "textbookUrl": "grade10/AO/GRADE%20ST%2010%20-%20Page%20131-138.html"
            },
            {
                "id": "g10aou14",
                "gid": "g10",
                "cid": "g10ao",
                "unit": "14",
                "title": " Afoola Oromoo",
                "textbookUrl": "grade10/AO/GRADE%20ST%2010%20-%20Page%20139-152.html"
            },
            {
                "id": "g10aou15",
                "gid": "g10",
                "cid": "g10ao",
                "unit": "15",
                "title": "Durba Morma Lamaa",
                "textbookUrl": "grade10/AO/GRADE%20ST%2010%20-%20Page%20153-162.html"
            },
            {
                "id": "g10aou16",
                "gid": "g10",
                "cid": "g10ao",
                "unit": "16",
                "title": "Gaabbii",
                "textbookUrl": "grade10/AO/GRADE%20ST%2010%20-%20Page%20163-170.html"
            },
            {
                "id": "g10aou17",
                "gid": "g10",
                "cid": "g10ao",
                "unit": "17",
                "title": "Xalayaa",
                "textbookUrl": "grade10/AO/GRADE%20ST%2010%20-%20Page%20171-176.html"
            },
            {
                "id": "g10aou18",
                "gid": "g10",
                "cid": "g10ao",
                "unit": "18",
                "title": " Barreeffama Odeeffannoo (Wabiitti) Fayyadamuu",
                "textbookUrl": "grade10/AO/GRADE%20ST%2010%20-%20Page%20177-182.html"
            },
            {
                "id": "g11bu1",
                "cid": "g11b",
                "unit": "1",
                "title": "The Science of Biology",
                "description": "What is the science of biology? Biology is the science of life and living organisms. You know from earlier studies that an organism is a living being made from one cell (for example bacteria, unicellular algae) or many cells (for example, animals, plants and most fungi).",
                "textbookUrl": "grade11/biology_gr11/M01_BIOL_SB_ETHG11_5346_U01.html",
                "teacherGuide": "tg/bio/biology_gr11/bio%2011/M01_BIOL_TG_ETHG11_0131_U01.html"
            },
            {
                "id": "g11bu2",
                "gid": "g11",
                "cid": "g11b",
                "unit": "2",
                "title": "Biochemical Molecules",
                "description": "Biological molecules can be classified into two main types:• inorganic molecules• organic molecules",
                "textbookUrl": "grade11/biology_gr11/M02_BIOL_SB_ETHG11_5346_U02.html",
                "teacherGuide": "tg/bio/biology_gr11/bio%2011/M02_BIOL_TG_ETHG11_0131_U02.html"
            },
            {
                "id": "g11bu3",
                "gid": "g11",
                "cid": "g11b",
                "unit": "3",
                "title": "Enzymes",
                "description": "First, all enzymes are globular proteins. We learned in unit 2 that globular proteins all have a unique tertiary structure, which gives them a unique shape",
                "textbookUrl": "grade11/biology_gr11/M03_BIOL_SB_ETHG11_5346_U03.html",
                "teacherGuide": "tg/bio/biology_gr11/bio%2011/M03_BIOL_TG_ETHG11_0131_U03.html"
            },
            {
                "id": "g11bu4",
                "gid": "g11",
                "cid": "g11b",
                "unit": "4",
                "title": "Cell Biology",
                "description": "the smallest bacterial cells are only just over 100 nm in length. This is approximately one hundred-thousandth of the size of the chicken’s egg. That’s quite a range of sizes!",
                "textbookUrl": "grade11/biology_gr11/web/bioUnit4.html",
                "teacherGuide": "tg/bio/biology_gr11/bio%2011/M04_BIOL_TG_ETHG11_0131_U04.html"
            },
            {
                "id": "g11bu5",
                "gid": "g11",
                "cid": "g11b",
                "unit": "5",
                "title": " Energy transformation",
                "description": "First, we must explain what we mean by an energy transfer molecule. Sunlight energy cannot be used directly by plants (and certainly not by other organisms) to ‘drive’ the synthesis of proteins – or any other molecules.",
                "textbookUrl": "grade11/biology_gr11/M04_BIOL_SB_ETHY11_5346_U05.html",
                "teacherGuide": "tg/bio/biology_gr11/bio%2011/M05_BIO_TG_ETHG11_0131_U05.html"
            },
            {
                "id": "g11cu1",
                "gid": "g11",
                "cid": "g11h",
                "unit": "1",
                "title": " Fundamental concepts of chemistry",
                "description": "People in the industrialized nations enjoy not only the highest standard of living, that is, the material comforts which are measured by the goods, services and luxuries available to an individual, but also quality life.",
                "textbookUrl": "grade11/chemistry_gr11/Final%20Chemistry%20Grade%2011_unit%201%201.1.html",
                "teacherGuide": "tg/chem/Chemistry_gr11/chem%2011/Grade%2011%20TG%20-%20Page%201-36.html"
            },
            {
                "id": "g11cu2",
                "gid": "g11",
                "cid": "g11h",
                "unit": "2",
                "title": "Atomic structure and the periodic table",
                "description": "in restricted, successive shells and that the valence electrons determine the chemical properties of different elements. In the 1920s, Bohr’s theory became the basis for quantum mechanics, which explained in greater detail the complex structure and behaviour of atoms.",
                "textbookUrl": "grade11/chemistry_gr11/Final%20Chemistry%20Grade%2011%20-%20Page%2046-113.html",
                "teacherGuide": "tg/chem/Chemistry_gr11/chem%2011/Grade%2011%20TG%20-%20Page%2037-78.html"
            },
            {
                "id": "g11cu3",
                "gid": "g11",
                "cid": "g11h",
                "unit": "3",
                "title": "Chemical bonding and structure",
                "description": "know the three different but related bonding models (Lewis model, Valence bond model and Molecular orbital model) and recognize the usefulness of the bonding theories in explaining and predicting molecular properties(bond angle, bond length, bond energy,",
                "textbookUrl": "grade11/chemistry_gr11/Final%20Chemistry%20Grade%2011%20-%20Page%20114-201.html",
                "teacherGuide": "tg/chem/Chemistry_gr11/chem%2011/Grade%2011%20TG%20-%20Page%2079-130.html"
            },
            {
                "id": "g11cu4",
                "gid": "g11",
                "cid": "g11h",
                "unit": "4",
                "title": "chemical kinetics",
                "description": "chemical kineticsyou will study the fundamental concepts of chemical kinetics. You will explore rate of reaction, factors affecting rate of reaction, theories of rate of reaction, rate equations or rate laws, and reaction mechanisms",
                "textbookUrl": "grade11/chemistry_gr11/Final%20Chemistry%20Grade%2011%20-%20Page%20202-257.html",
                "teacherGuide": "tg/chem/Chemistry_gr11/chem%2011/Grade%2011%20TG%20-%20Page%20131-186.html"
            },
            {
                "id": "g11cu5",
                "gid": "g11",
                "cid": "g11h",
                "unit": "5",
                "title": "Chemical equilibrium and phase equilibrium",
                "description": "you will study about equilibrium, how it is attained, different phases in which a system can exist and stability of these phases under different conditions of temperature and pressure.",
                "textbookUrl": "grade11/chemistry_gr11/Final%20Chemistry%20Grade%2011%20-%20Page%20258-319.html",
                "teacherGuide": "tg/chem/Chemistry_gr11/chem%2011/Grade%2011%20TG%20-%20Page%20187-224.html"
            },
            {
                "id": "g11cu6",
                "gid": "g11",
                "cid": "g11h",
                "unit": "6",
                "title": "Carboxylic acids, esters, fats and oils",
                "description": "Carboxylic acids, esters, fats and oilsstudy about another important class of organic compounds called carboxylic acids and esters. These compounds are present in many fruits and flowers. Many carboxylic acids are used as food additives in jams, jellies, candies and pickels,",
                "textbookUrl": "grade11/chemistry_gr11/Final%20Chemistry%20Grade%2011%20-%20Page%20320-367.html",
                "teacherGuide": "tg/chem/Chemistry_gr11/chem%2011/Grade%2011%20TG%20-%20Page%20225-325.html"
            },
            {
                "id": "g11mnu1",
                "gid": "g11",
                "cid": "g11mn",
                "unit": "1",
                "title": "Further on relations and functions",
                "description": "Relationships between elements of sets occur in many contexts. Examples of relations in society include one person being a brother of another person or one person being an employee of another",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit1.html"
            },
            {
                "id": "g11mnu2",
                "gid": "g11",
                "cid": "g11mn",
                "unit": "2",
                "title": " Rational expressions and rational functions",
                "description": "If both the numerator and denominator are polynomials, the fractional expression is called a rational expression. Just as rational numbers are defined in terms of quotients of integers, rational expressions are defined in terms of quotients of polynomials.",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit2.html"
            },
            {
                "id": "g11mnu3",
                "gid": "g11",
                "cid": "g11mn",
                "unit": "3",
                "title": "Coordinate geometry",
                "description": "The method of analytic geometry reduces a problem in geometry to an algebraic problem by establishing a correspondence between a curve and a definite equation",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit3.html"
            },
            {
                "id": "g11mnu4",
                "gid": "g11",
                "cid": "g11mn",
                "unit": "4",
                "title": "Mathematical Reasoning",
                "description": "Mathematical Reasoning is a tool for organizing evidence in a systematic way through mathematical logic. In this unit, you will study mathematical logic, the systematic study of the art of reasoning. In some ways,",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit4.html"
            },
            {
                "id": "g11mnu5",
                "gid": "g11",
                "cid": "g11mn",
                "unit": "5",
                "title": "Statistics and probability",
                "description": "The word statistics comes from the Italian word \"statista\" meaning stateman. It was used to signify the application of recorded data for purposes of the state. When statistics is used in its plural sense",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit5.html"
            },
            {
                "id": "g11mnu6",
                "gid": "g11",
                "cid": "g11mn",
                "unit": "6",
                "title": "Matrices and determinants",
                "description": "A matrix is simply a rectangular table or array of numbers written in either ( ) or[ ] brackets. Matrices have manyapplications in science,engineering and computing.",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit6.html"
            },
            {
                "id": "g11mnu7",
                "gid": "g11",
                "cid": "g11mn",
                "unit": "7",
                "title": " The set of complex numbers",
                "description": "“number” initially meant the whole numbers, 0, 1, 2, 3, . . .. Whole numbers give us a way to answer questions of the form “How many…?” But whole numbers can answer only some such questions",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit7.html"
            },
            {
                "id": "g11mnu8",
                "gid": "g11",
                "cid": "g11mn",
                "unit": "8",
                "title": "Vectors and transformation of the plane",
                "description": "vectors are not completely determined until both a magnitude and a direction are specified. For example, wind movement is usually described by giving the speed and the direction, say 20 km/hr northeast. The wind speed and wind direction together form a vector quantity - the wind velocity.",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit8.html"
            },
            {
                "id": "g11mnu9",
                "gid": "g11",
                "cid": "g11mn",
                "unit": "9",
                "title": "Further on trigonometric functions",
                "description": "Trigonometry is the branch of mathematics that studies the relationship between angles and sides of a triangle. The values of the basic trigonometric functions are the ratio of the lengths of the sides of right-angled triangles.",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit9.html"
            },
            {
                "id": "g11mnu10",
                "gid": "g11",
                "cid": "g11mn",
                "unit": "10",
                "title": " Introduction to linear programing",
                "description": "In particular, linear programming is a field of mathematics that deals with the problem of finding the maximum or minimum value of a given linear function, known as the objective function, subject to certain conditions expressed as linear inequalities known as constraints.",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit10.html"
            },
            {
                "id": "g11mnu11",
                "gid": "g11",
                "cid": "g11mn",
                "unit": "11",
                "title": "Mathematical applications in business",
                "description": "you will learn the basic mathematical concepts in business and the techniques of computing compound interest. Furthermore, you will observe how and why money is saved, invested and borrowed.",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit11.html"
            },
            {
                "id": "g11pu1",
                "gid": "g11",
                "cid": "g11p",
                "unit": "1",
                "title": "Measurement and practical work",
                "description": "Experiments may vary in size and expense, including using huge particle accelerators, making observations using space telescopes, testing simple circuits, or even just bouncing a ball! In order to be considered scientific,",
                "textbookUrl": "grade11/physics_gr11/M01_PHYS_SB_ETHG11_0209_U01.html",
                "teacherGuide": "tg/phy/physics_gr11/phy%2011/M01_PHYS_TG_ETHY11_0216_U01.html"
            },
            {
                "id": "g11pu2",
                "gid": "g11",
                "cid": "g11p",
                "unit": "2",
                "title": "Vector quantities",
                "description": "An understanding of vectors is essential for an understanding of physics. They help physicists and engineers to build amazing structures and to design spacecraft, and they also help you find your way home!",
                "textbookUrl": "grade11/physics_gr11/M02_PHYS_SB_ETHG11_0209_U02.html",
                "teacherGuide": "tg/phy/physics_gr11/phy%2011/M02_PHYS_TG_ETHG11_0216_U02.html"
            },
            {
                "id": "g11pu3",
                "gid": "g11",
                "cid": "g11p",
                "unit": "3",
                "title": "Kinematics",
                "description": "Explain the science of kinematics underlying familiar facts, observations and related phenomena.",
                "textbookUrl": "grade11/physics_gr11/M03_PHYS_SB_ETHG11_0209_U03.html",
                "teacherGuide": "tg/phy/physics_gr11/phy%2011/M03_PHYS_TG_ETHG11_0216_U03.html"
            },
            {
                "id": "g11pu4",
                "gid": "g11",
                "cid": "g11p",
                "unit": "4",
                "title": "Dynamics",
                "description": "In this unit you will be considering dynamics, which looks at the causes of motion. Dynamics is applied in every branch of physics.",
                "textbookUrl": "grade11/physics_gr11/M04_PHYS_SB_ETHG11_0209_U04.html",
                "teacherGuide": "tg/phy/physics_gr11/phy%2011/M04_PHYS_TG_ETHG11_0216_U04.html"
            },
            {
                "id": "g11pu5",
                "gid": "g11",
                "cid": "g11p",
                "unit": "5",
                "title": "Work ,Energy and Power",
                "description": "You do work wheneveryou move a displacement when exerting a force in the direction of the displacement. Work done is defined as the magnitude of the force exerted in the direction of the displacement (or distance moved) multiplied by the displacement.",
                "textbookUrl": "grade11/physics_gr11/M05_PHYS_SB_ETHG11_0209_U05.html",
                "teacherGuide": "tg/phy/physics_gr11/phy%2011/M05_PHYS_TG_ETHY11_0216_U05.html"
            },
            {
                "id": "g11pu6",
                "gid": "g11",
                "cid": "g11p",
                "unit": "6",
                "title": "Rotational motion",
                "description": "A rotating object spins about its axis of rotation. For example, the Earth’s axis of rotation goes between the geographic north and south poles.",
                "textbookUrl": "grade11/physics_gr11/M06_PHYS_SB_ETHG11_0209_U06.html",
                "teacherGuide": "tg/phy/physics_gr11/phy%2011/M06_PHYS_TG_ETHG11_0216_U06.html"
            },
            {
                "id": "g11pu7",
                "gid": "g11",
                "cid": "g11p",
                "unit": "7",
                "title": "Equilibrium",
                "description": "equilibrium and the conditions of equilibrium in rotational motion. Earlier in this book, you learnt more about moments and torque. In this unit, we will see how moments, torque and equilibrium are linked.",
                "textbookUrl": "grade11/physics_gr11/M07_PHYS_SB_ETHG11_0209_U07.html",
                "teacherGuide": "tg/phy/physics_gr11/phy%2011/M06_PHYS_TG_ETHG11_0216_U06.html"
            },
            {
                "id": "g11pu8",
                "gid": "g11",
                "cid": "g11p",
                "unit": "8",
                "title": "Properties of bulk matter",
                "description": "Carry out calculations involving stress, strain, Young’s modulus and the energy stored in a stretched material.",
                "textbookUrl": "grade11/physics_gr11/M08_PHYS_SB_ETHG11_0209_U08.html",
                "teacherGuide": "tg/phy/physics_gr11/phy%2011/M08_PHYS_TG_ETHG11_0216_U08.html"
            },
            {
                "id": "g11eu1",
                "gid": "g11",
                "cid": "g11e",
                "unit": "1",
                "title": "The african union",
                "textbookUrl": "grade11/englishe_gr11/M01_ENG_SB_ETHG11_0285_M01.html",
                "teacherGuide": "tg/en/english_gr11/english%2011/M01_ENG_TB_ETHG11_0292_M01%20-%20Page%201-10.html"
            },
            {
                "id": "g11eu2",
                "gid": "g11",
                "cid": "g11e",
                "unit": "2",
                "title": "Education",
                "textbookUrl": "grade11/englishe_gr11/M02_ENG_SB_ETHG11_0285_M02.html",
                "teacherGuide": "tg/en/english_gr11/english%2011/M01_ENG_TB_ETHG11_0292_M01%20-%20Page%2011-21.html"
            },
            {
                "id": "g11eu3",
                "gid": "g11",
                "cid": "g11e",
                "unit": "3",
                "title": "Traditional and modern medicien",
                "textbookUrl": "grade11/englishe_gr11/M03_ENG_SB_ETHG11_0285_M03.html",
                "teacherGuide": "tg/en/english_gr11/english%2011/M01_ENG_TB_ETHG11_0292_M01%20-%20Page%2022-34.html"
            },
            {
                "id": "g11eu4",
                "gid": "g11",
                "cid": "g11e",
                "unit": "4",
                "title": "HIV and AIDS",
                "textbookUrl": "grade11/englishe_gr11/M04_ENG_SB_ETHG11_0285_M04.html",
                "teacherGuide": "tg/en/english_gr11/english%2011/M02_ENG_TB_ETHG11_0292_M02%20-%20Page%201-11.html"
            },
            {
                "id": "g11eu5",
                "gid": "g11",
                "cid": "g11e",
                "unit": "5",
                "title": "Tourism",
                "textbookUrl": "grade11/englishe_gr11/M05_ENG_SB_ETHG11_0285_M05.html",
                "teacherGuide": "tg/en/english_gr11/english%2011/M02_ENG_TB_ETHG11_0292_M02%20-%20Page%2012-23.html"
            },
            {
                "id": "g11eu6",
                "gid": "g11",
                "cid": "g11e",
                "unit": "6",
                "title": "Fiction",
                "textbookUrl": "grade11/englishe_gr11/M06_ENG_SB_ETHG11_0285_M06.html",
                "teacherGuide": "tg/en/english_gr11/english%2011/%20%20M02_ENG_TB_ETHG11_0292_M02%20-%20Page%2024-32.html"
            },
            {
                "id": "g11eu7",
                "gid": "g11",
                "cid": "g11e",
                "unit": "7",
                "title": "Weather and climate change",
                "textbookUrl": "grade11/englishe_gr11/M07_ENG_SB_ETHG11_0285_M07.html",
                "teacherGuide": "tg/en/english_gr11/english%2011/M03_ENG_TB_ETHG11_0292_M03%20-%20Page%201-12.html"
            },
            {
                "id": "g11eu8",
                "gid": "g11",
                "cid": "g11e",
                "unit": "8",
                "title": "Water",
                "textbookUrl": "grade11/englishe_gr11/M08_ENG_SB_ETHG11_0285_M08.html",
                "teacherGuide": "tg/en/english_gr11/english%2011/M03_ENG_TB_ETHG11_0292_M03%20-%20Page%2013-21.html"
            },
            {
                "id": "g11eu9",
                "gid": "g11",
                "cid": "g11e",
                "unit": "9",
                "title": "Disability Awarness",
                "textbookUrl": "grade11/englishe_gr11/M09_ENG_SB_ETHG11_0285_M09.html",
                "teacherGuide": "tg/en/english_gr11/english%2011/M03_ENG_TB_ETHG11_0292_M03%20-%20Page%2022-29.html"
            },
            {
                "id": "g11eu10",
                "gid": "g11",
                "cid": "g11e",
                "unit": "10",
                "title": "Poverity and development",
                "textbookUrl": "grade11/englishe_gr11/M10_ENG_SB_ETHG11_0285_M10.html",
                "teacherGuide": "tg/en/english_gr11/english%2011/M04_eNG_TB_ETHG11_0292_M04%20-%20Page%201-10.html"
            },
            {
                "id": "g11eu11",
                "gid": "g11",
                "cid": "g11e",
                "unit": "11",
                "title": "Red cross /NGOs",
                "textbookUrl": "grade11/englishe_gr11/M11_ENG_SB_ETHG11_0285_M11.html",
                "teacherGuide": "tg/en/english_gr11/english%2011/M04_eNG_TB_ETHG11_0292_M04%20-%20Page%2011-20.html"
            },
            {
                "id": "g11eu12",
                "gid": "g11",
                "cid": "g11e",
                "unit": "12",
                "title": "Technological Advances",
                "textbookUrl": "grade11/englishe_gr11/M12_ENG_SB_ETHG11_0285_M12.html",
                "teacherGuide": "tg/en/english_gr11/english%2011/M04_eNG_TB_ETHG11_0292_M04%20-%20Page%2021-29.html"
            },
            {
                "id": "g11au1",
                "gid": "g11",
                "cid": "g11a",
                "unit": "1",
                "title": "ቋንቋና ህብረተሰብ",
                "textbookUrl": "grade11/Amharic/web/AmUnit1.html"
            },
            {
                "id": "g11au2",
                "gid": "g11",
                "cid": "g11a",
                "unit": "2",
                "title": "ቅርሶቻችን",
                "textbookUrl": "grade11/Amharic/web/AmUnit2.html"
            },
            {
                "id": "g11au3",
                "gid": "g11",
                "cid": "g11a",
                "unit": "3",
                "title": " ወግ",
                "textbookUrl": "grade11/Amharic/web/AmUnit3.html"
            },
            {
                "id": "g11au4",
                "gid": "g11",
                "cid": "g11a",
                "unit": "4",
                "title": "ልቦለድ",
                "textbookUrl": "grade11/Amharic/web/AmUnit4.html"
            },
            {
                "id": "g11au5",
                "gid": "g11",
                "cid": "g11a",
                "unit": "5",
                "title": " የቋንቋ ለዛ",
                "textbookUrl": "grade11/Amharic/web/AmUnit5.html"
            },
            {
                "id": "g11au6",
                "gid": "g11",
                "cid": "g11a",
                "unit": "6",
                "title": " ግጥም",
                "textbookUrl": "grade11/Amharic/web/AmUnit6.html"
            },
            {
                "id": "g11au7",
                "gid": "g11",
                "cid": "g11a",
                "unit": "7",
                "title": "አርበኝነት",
                "textbookUrl": "grade11/Amharic/web/AmUnit7.html"
            },
            {
                "id": "g11au8",
                "gid": "g11",
                "cid": "g11a",
                "unit": "8",
                "title": " ትውፊት",
                "textbookUrl": "grade11/Amharic/web/AmUnit8.html"
            },
            {
                "id": "g11au9",
                "gid": "g11",
                "cid": "g11a",
                "unit": "9",
                "title": "ስኬት",
                "textbookUrl": "grade11/Amharic/web/AmUnit9.html"
            },
            {
                "id": "g11au10",
                "gid": "g11",
                "cid": "g11a",
                "unit": "10",
                "title": "ኪነጥበብ",
                "textbookUrl": "grade11/Amharic/web/AmUnit10.html"
            },
            {
                "id": "g11aou1",
                "gid": "g11",
                "cid": "g11ao",
                "unit": "1",
                "title": "Afaan Akkamitti Jalqabame?",
                "textbookUrl": "grade11/AO/GRADE%20ST%2011%20-%20Page%207-34.html"
            },
            {
                "id": "g11aou2",
                "gid": "g11",
                "cid": "g11ao",
                "unit": "2",
                "title": "Garasuu Dhukii (Abbaa Booraa)",
                "textbookUrl": "grade11/AO/GRADE%20ST%2011%20-%20Page%2035-44.html"
            },
            {
                "id": "g11aou3",
                "gid": "g11",
                "cid": "g11ao",
                "unit": "3",
                "title": " Namootaafi Bineensota",
                "textbookUrl": "grade11/AO/GRADE%20ST%2011%20-%20Page%2045-64.html"
            },
            {
                "id": "g11aou4",
                "gid": "g11",
                "cid": "g11ao",
                "unit": "4",
                "title": " Hirmaannaa Dubartootaa",
                "textbookUrl": "grade11/AO/GRADE%20ST%2011%20-%20Page%2065-78.html"
            },
            {
                "id": "g11aou5",
                "gid": "g11",
                "cid": "g11ao",
                "unit": "5",
                "title": "Eenyu Haafuudhu?",
                "textbookUrl": "grade11/AO/GRADE%20ST%2011%20-%20Page%2079-92.html"
            },
            {
                "id": "g11aou6",
                "gid": "g11",
                "cid": "g11ao",
                "unit": "6",
                "title": " Addunyummaa",
                "textbookUrl": "grade11/AO/GRADE%20ST%2011%20-%20Page%2093-102.html"
            },
            {
                "id": "g11aou7",
                "gid": "g11",
                "cid": "g11ao",
                "unit": "7",
                "title": " Industiriifi Sochii Tuuriizimii Addunyaa",
                "textbookUrl": "grade11/AO/GRADE%20ST%2011%20-%20Page%20103-120.html"
            },
            {
                "id": "g11aou8",
                "gid": "g11",
                "cid": "g11ao",
                "unit": "8",
                "title": " Barumsa Addaan Kutuu",
                "textbookUrl": "grade11/AO/GRADE%20ST%2011%20-%20Page%20121-130.html"
            },
            {
                "id": "g11aou9",
                "gid": "g11",
                "cid": "g11ao",
                "unit": "9",
                "title": " Injifannoo Walmorkii Olompikii",
                "textbookUrl": "grade11/AO/GRADE%20ST%2011%20-%20Page%20131-140.html"
            },
            {
                "id": "g11aou10",
                "gid": "g11",
                "cid": "g11ao",
                "unit": "10",
                "title": " Kan Mana Baasan Manaa Nama Baasa",
                "textbookUrl": "grade11/AO/GRADE%20ST%2011%20-%20Page%20141-156.html"
            },
            {
                "id": "g11aou11",
                "gid": "g11",
                "cid": "g11ao",
                "unit": "11",
                "title": "Og-Walaloo",
                "textbookUrl": "grade11/AO/GRADE%20ST%2011%20-%20Page%20149-156.html"
            },
            {
                "id": "g11aou12",
                "gid": "g11",
                "cid": "g11ao",
                "unit": "12",
                "title": "Bifa Jireenya Hawaasa Sirna Gadaa",
                "textbookUrl": "grade11/AO/GRADE%20ST%2011%20-%20Page%20157-170.html"
            },
            {
                "id": "g11aou13",
                "gid": "g11",
                "cid": "g11ao",
                "unit": "13",
                "title": "Interpiraayizoota Daldaala Xixiqqaa",
                "textbookUrl": "grade11/AO/GRADE%20ST%2011%20-%20Page%20171-180.html"
            },
            {
                "id": "g11aou14",
                "gid": "g11",
                "cid": "g11ao",
                "unit": "14",
                "title": " Balaa Beelaa Biyyoota Addunyaa 3 ffaa Keessatti",
                "textbookUrl": "grade11/AO/GRADE%20ST%2011%20-%20Page%20181-192.html"
            },
            {
                "id": "g11aou15",
                "gid": "g11",
                "cid": "g11ao",
                "unit": "15",
                "title": " Faaya Mormaa",
                "textbookUrl": "grade11/AO/GRADE%20ST%2011%20-%20Page%20193-204.html"
            },
            {
                "id": "g11aou16",
                "gid": "g11",
                "cid": "g11ao",
                "unit": "16",
                "title": "Xalayaa Barreessuu",
                "textbookUrl": "grade11/AO/GRADE%20ST%2011%20-%20Page%20205-216.html"
            },
            {
                "id": "g11aou17",
                "gid": "g11",
                "cid": "g11ao",
                "unit": "17",
                "title": "Madda Odeeffannoo",
                "textbookUrl": "grade11/AO/GRADE%20ST%2011%20-%20Page%20217-231.html"
            },
            {
                "id": "g11ciu1",
                "gid": "g11",
                "cid": "g11ci",
                "unit": "1",
                "title": "Building a Democratic System",
                "description": "In this lesson, you are going to examine the basic principles of the FDRE Constitution. The knowledge you have obtained about democracy in Grades 9 and 10 will help you to understand how the Constitution has been formed.",
                "textbookUrl": "grade11/civics_gr11/11-unit1.html"
            },
            {
                "id": "g11ciu2",
                "gid": "g11",
                "cid": "g11ci",
                "unit": "2",
                "title": "Rule of Law",
                "description": "Rule of law prevails under a democratic government with a democratic constitution. The previous Constitutions of Ethiopia adapted a unitary system of government, but the FDRE Constitution set a federal system of government.",
                "textbookUrl": "grade11/civics_gr11/11-unit2.html"
            },
            {
                "id": "g11ciu3",
                "gid": "g11",
                "cid": "g11ci",
                "unit": "3",
                "title": "Equality",
                "description": "Equality is the right not to be treated differently because of age, race, sex, ability, political views or any other status; it means being treated the same as others.",
                "textbookUrl": "grade11/civics_gr11/11-unit3.html"
            },
            {
                "id": "g11ciu4",
                "gid": "g11",
                "cid": "g11ci",
                "unit": "4",
                "title": "Justice",
                "description": "Benefits are services or commodities that are believed to be good for an individual or group. Sometimes benefits are provided by the government to help the people.",
                "textbookUrl": "grade11/civics_gr11/11-unit4.html"
            },
            {
                "id": "g11ciu5",
                "gid": "g11",
                "cid": "g11ci",
                "unit": "5",
                "title": "Patriotism",
                "description": "History is a narration about the past based on facts. Every historian should use facts to write history. Even though most historical accounts are based on evidence, some of them can be misleading and far from the truth.",
                "textbookUrl": "grade11/civics_gr11/11-unit5.html"
            },
            {
                "id": "g11ciu6",
                "gid": "g11",
                "cid": "g11ci",
                "unit": "6",
                "title": "Responsibility",
                "description": "Every person in society has some obligations to undertake. Fulfilling obligations is the basis of social life and allows you to use your rights.",
                "textbookUrl": "grade11/civics_gr11/11-unit6.html"
            },
            {
                "id": "g11ciu7",
                "gid": "g11",
                "cid": "g11ci",
                "unit": "7",
                "title": "Industriousness",
                "description": "In this lesson, you will focus on respecting all types of work. In order for people to get what they need and want, they have to divide work",
                "textbookUrl": "grade11/civics_gr11/11-unit7.html"
            },
            {
                "id": "g11ciu8",
                "gid": "g11",
                "cid": "g11ci",
                "unit": "8",
                "title": "Self-Reliance",
                "description": "As individuals it is important that we all develop the ability to be self-reliant.",
                "textbookUrl": "grade11/civics_gr11/11-unit8.html"
            },
            {
                "id": "g11ciu9",
                "gid": "g11",
                "cid": "g11ci",
                "unit": "9",
                "title": "Saving",
                "description": "One way to help develop the habit of saving is to transform the way you think about spending. This may be related to the way you consume things.",
                "textbookUrl": "grade11/civics_gr11/11-unit9.html"
            },
            {
                "id": "g11ciu10",
                "gid": "g11",
                "cid": "g11ci",
                "unit": "10",
                "title": "Active Community Participation",
                "description": "Civil means related to citizens or to the public. Civil actions are outside of politics, religion, military etc.",
                "textbookUrl": "grade11/civics_gr11/11-unit10.html"
            },
            {
                "id": "g11ciu11",
                "gid": "g11",
                "cid": "g11ci",
                "unit": "11",
                "title": "The Pursuit of Wisdom",
                "description": "Humans have a natural tendency to want to know more about the world. They have an instinctive thirst for knowledge.",
                "textbookUrl": "grade11/civics_gr11/11-unit11.html"
            },
            {
                "id": "g11iu1",
                "gid": "g11",
                "cid": "g11i",
                "unit": "1",
                "title": "Information system ",
                "description": "Information systems, like all other systems, are assembled from parts, or components. What you consider to be the components or the system depends on the scale you choose to examine",
                "textbookUrl": "grade11/ICT/Complete%20Book%20ICT%20ST%20Grade-11%20-%20Page%205-29.html",
                "teacherGuide": "tg/en/english_gr11/english%2011/M04_eNG_TB_ETHG11_0292_M04%20-%20Page%2021-29.html"
            },
            {
                "id": "g11iu2",
                "gid": "g11",
                "cid": "g11i",
                "unit": "2",
                "title": "Enhancing The Use of Software",
                "description": "Software refers to the operating instructions and applications that allow computers to process the numbers, pictures, sounds, and text we enter into them",
                "textbookUrl": "grade11/ICT/Complete%20Book%20ICT%20ST%20Grade-11%20-%20Page%2030-56.html",
                "teacherGuide": "tg/ict/ICT_gr11/ict%2011/Complete%20Book%20ICT%20TG%20Grade-11%20-%20Page%2014-18.html"
            },
            {
                "id": "g11iu3",
                "gid": "g11",
                "cid": "g11i",
                "unit": "3",
                "title": "Basic Troubleshooting",
                "description": "Computers play an important role in our lives. Generally computers are built to be professional, reliable machines. A computer may hang; send error messages, or worse, no longer work at all.",
                "textbookUrl": "grade11/ICT/Complete%20Book%20ICT%20ST%20Grade-11%20-%20Page%2057-76.html",
                "teacherGuide": "tg/ict/ICT_gr11/ict%2011/Complete%20Book%20ICT%20TG%20Grade-11%20-%20Page%2019-25.html"
            },
            {
                "id": "g11iu4",
                "gid": "g11",
                "cid": "g11i",
                "unit": "4",
                "title": "Exploiting The Internet",
                "description": "Internet search engines are extremely useful tools—but the results you get back are often extremely numerous and sometimes irrelevant.",
                "textbookUrl": "grade11/ICT/Complete%20Book%20ICT%20ST%20Grade-11%20-%20Page%2077-96.html",
                "teacherGuide": "tg/ict/ICT_gr11/ict%2011/Complete%20Book%20ICT%20TG%20Grade-11%20-%20Page%2026-33.html"
            },
            {
                "id": "g11iu5",
                "gid": "g11",
                "cid": "g11i",
                "unit": "5",
                "title": "Image ProcessIng and multimedia Systems",
                "description": "An image can be the one generated by you on the computer screen or available using a scanner/camera. The field of digital image processing refers to processing digital images by means of a digital computer.",
                "textbookUrl": "grade11/ICT/Complete%20Book%20ICT%20ST%20Grade-11%20-%20Page%2097-120.html",
                "teacherGuide": "tg/ict/ICT_gr11/ict%2011/Complete%20Book%20ICT%20TG%20Grade-11%20-%20Page%2034-60.html"
            },
            {
                "id": "g11tdu1",
                "gid": "g11",
                "cid": "g11td",
                "unit": "1",
                "title": "Introduction to Basic Technical Drawing",
                "textbookUrl": "grade11/TD_gr11/11-unit1.html"
            },
            {
                "id": "g11tdu2",
                "gid": "g11",
                "cid": "g11td",
                "unit": "2",
                "title": "Basic Technical Drawing Equipments",
                "textbookUrl": "grade11/TD_gr11/11-unit2.html"
            },
            {
                "id": "g11tdu3",
                "gid": "g11",
                "cid": "g11td",
                "unit": "3",
                "title": "Alphabet of lines",
                "textbookUrl": "grade11/TD_gr11/11-unit3.html"
            },
            {
                "id": "g11tdu4",
                "gid": "g11",
                "cid": "g11td",
                "unit": "4",
                "title": " Lettering",
                "textbookUrl": "grade11/TD_gr11/11-unit4.html"
            },
            {
                "id": "g11tdu5",
                "gid": "g11",
                "cid": "g11td",
                "unit": "5",
                "title": " Geomeric construction",
                "textbookUrl": "grade11/TD_gr11/11-unit5.html"
            },
            {
                "id": "g11tdu6",
                "gid": "g11",
                "cid": "g11td",
                "unit": "6",
                "title": " Multi-View Drawing",
                "textbookUrl": "grade11/TD_gr11/11-unit6.html"
            },
            {
                "id": "g11tdu7",
                "gid": "g11",
                "cid": "g11td",
                "unit": "7",
                "title": "Pictorial Drawing",
                "textbookUrl": "grade11/TD_gr11/11-unit7.html"
            },
            {
                "id": "g11msu1",
                "gid": "g11",
                "cid": "g11ms",
                "unit": "1",
                "title": "Further on relations and functions",
                "description": "Relationships between elements of sets occur in many contexts. Examples of relations in society include one person being a brother of another person or one person being an employee of another",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit1.html"
            },
            {
                "id": "g11msu2",
                "gid": "g11",
                "cid": "g11ms",
                "unit": "2",
                "title": "Rational expressions and rational functions",
                "description": "If both the numerator and denominator are polynomials, the fractional expression is called a rational expression. Just as rational numbers are defined in terms of quotients of integers, rational expressions are defined in terms of quotients of polynomials.",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit2.html"
            },
            {
                "id": "g11msu3",
                "gid": "g11",
                "cid": "g11ms",
                "unit": "3",
                "title": "Coordinate geometry",
                "description": "The method of analytic geometry reduces a problem in geometry to an algebraic problem by establishing a correspondence between a curve and a definite equation",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit3.html"
            },
            {
                "id": "g11msu4",
                "gid": "g11",
                "cid": "g11ms",
                "unit": "4",
                "title": "Mathematical reasoning",
                "description": "Mathematical Reasoning is a tool for organizing evidence in a systematic way through mathematical logic. In this unit, you will study mathematical logic, the systematic study of the art of reasoning. In some ways,",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit4.html"
            },
            {
                "id": "g11msu5",
                "gid": "g11",
                "cid": "g11ms",
                "unit": "5",
                "title": "Statistics and probability",
                "description": "The word statistics comes from the Italian word \"statista\" meaning stateman. It was used to signify the application of recorded data for purposes of the state. When statistics is used in its plural sense",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit5.html"
            },
            {
                "id": "g11msu6",
                "gid": "g11",
                "cid": "g11ms",
                "unit": "6",
                "title": "Matrices and determinants",
                "description": "A matrix is simply a rectangular table or array of numbers written in either ( ) or[ ] brackets. Matrices have manyapplications in science,engineering and computing.",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit6.html"
            },
            {
                "id": "g11msu7",
                "gid": "g11",
                "cid": "g11ms",
                "unit": "7",
                "title": "The set of complex numbers",
                "description": "The set of complex numbers“number” initially meant the whole numbers, 0, 1, 2, 3, . . .. Whole numbers give us a way to answer questions of the form “How many…?” But whole numbers can answer only some such questions",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit7.html"
            },
            {
                "id": "g11msu8",
                "gid": "g11",
                "cid": "g11ms",
                "unit": "8",
                "title": "Vectors and transformation of the plane",
                "description": "vectors are not completely determined until both a magnitude and a direction are specified. For example, wind movement is usually described by giving the speed and the direction, say 20 km/hr northeast. The wind speed and wind direction together form a vector quantity - the wind velocity.",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit8.html"
            },
            {
                "id": "g11msu9",
                "gid": "g11",
                "cid": "g11ms",
                "unit": "9",
                "title": "Further on trigonometric functions",
                "description": "Trigonometry is the branch of mathematics that studies the relationship between angles and sides of a triangle. The values of the basic trigonometric functions are the ratio of the lengths of the sides of right-angled triangles.",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit9.html"
            },
            {
                "id": "g11msu10",
                "gid": "g11",
                "cid": "g11ms",
                "unit": "10",
                "title": "Introduction to linear programing",
                "description": "Introduction to linear programingIn particular, linear programming is a field of mathematics that deals with the problem of finding the maximum or minimum value of a given linear function, known as the objective function, subject to certain conditions expressed as linear inequalities known as constraints.",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit10.html"
            },
            {
                "id": "g11msu11",
                "gid": "g11",
                "cid": "g11ms",
                "unit": "11",
                "title": "Mathematical applications in business",
                "description": "you will learn the basic mathematical concepts in business and the techniques of computing compound interest. Furthermore, you will observe how and why money is saved, invested and borrowed.",
                "textbookUrl": "grade11/maths_gr11/web/mathsUnit11.html"
            },
            {
                "id": "g11gu1",
                "gid": "g11",
                "cid": "g11g",
                "unit": "1",
                "title": "The science of geography",
                "description": "you are going to learn about the geography of Africa. Hence, the topics to be discussed are the physical, social, cultural, economic and political aspects of Africa.",
                "textbookUrl": "grade11/geography_gr11/Geo_Grade_11_Book%20-%20Page%207-29.html",
                "teacherGuide": "tg/geo/geography_gr11/geo%2011/Grade%2011%20Geography%20Teacher's%20Guide%20-%20Page%201-42.html"
            },
            {
                "id": "g11gu2",
                "gid": "g11",
                "cid": "g11g",
                "unit": "2",
                "title": "Map reading and interpretation",
                "description": "The earth’s surface is not uniform due to variation in its geological formation. As a result, we observe altitudinal variation between places",
                "textbookUrl": "grade11/geography_gr11/Geo_Grade_11_Book%20-%20Page%2030-105.html",
                "teacherGuide": "tg/geo/geography_gr11/geo%2011/Grade%2011%20Geography%20Teacher's%20Guide%20-%20Page%2043-104.html"
            },
            {
                "id": "g11gu3",
                "gid": "g11",
                "cid": "g11g",
                "unit": "3",
                "title": "An overview of physical geography of africa",
                "description": "In this unit, you are going to learn aboutAfrica. The unit will give you an overview of the location, size and shape of the continent and its regional divisions,",
                "textbookUrl": "grade11/geography_gr11/Geo_Grade_11_Book%20-%20Page%20106-194.html",
                "teacherGuide": "tg/geo/geography_gr11/geo%2011/Grade%2011%20Geography%20Teacher's%20Guide%20-%20Page%20105-164.html"
            },
            {
                "id": "g11gu4",
                "gid": "g11",
                "cid": "g11g",
                "unit": "4",
                "title": "Population, economy and natural resources of africa",
                "description": "Africa has one of the world’s largest populations. The continent is the world’s second most populous next to Asia.",
                "textbookUrl": "grade11/geography_gr11/Geo_Grade_11_Book%20-%20Page%20195-255.html",
                "teacherGuide": "tg/geo/geography_gr11/geo%2011/Grade%2011%20Geography%20Teacher's%20Guide%20-%20Page%20165-240.html"
            },
            {
                "id": "g11ecu1",
                "gid": "g11",
                "cid": "g11ec",
                "unit": "1",
                "title": " Concepts of Economics",
                "description": "Economics is an important discipline, and its importance has increased in recent years in response to worldwide economic problems – particularly the global economic recession that started in December 2007",
                "textbookUrl": "grade11/economics_gr11/Econ%20Grade%2011%20Book%20-%20Page%208-55.html"
            },
            {
                "id": "g11ecu2",
                "gid": "g11",
                "cid": "g11ec",
                "unit": "2",
                "title": "Demand, Supply and Elasticity",
                "description": "In this unit we begin with the study of the concepts, laws, determinants and other aspects of demand and supply; examine the effects of changes in the market equilibrium",
                "textbookUrl": "grade11/economics_gr11/Econ%20Grade%2011%20Book%20-%20Page%2056-123.html"
            },
            {
                "id": "g11ecu3",
                "gid": "g11",
                "cid": "g11ec",
                "unit": "3",
                "title": "Theory of Consumer Behavior",
                "description": "It tells us that a consumer buys more of a commodity when its price falls and vice-versa",
                "textbookUrl": "grade11/economics_gr11/Econ%20Grade%2011%20Book%20-%20Page%20124-149.html"
            },
            {
                "id": "g11ecu4",
                "gid": "g11",
                "cid": "g11ec",
                "unit": "4",
                "title": "Theory of Production and Cost",
                "description": "Assuming that the prices of inputs are given, cost of production will depend upon the physical relationship between inputs and output. A study of the relationship between inputs and output is known as the ‘theory of production’.",
                "textbookUrl": "grade11/economics_gr11/Econ%20Grade%2011%20Book%20-%20Page%20150-193.html"
            },
            {
                "id": "g11ecu5",
                "gid": "g11",
                "cid": "g11ec",
                "unit": "5",
                "title": " Market Structures and The Decision of a Firm",
                "description": "the word market refers to a physical place where commodities are bought and sold. In economics, however, the term market does not necessarily refer to a particular place.",
                "textbookUrl": "grade11/economics_gr11/Econ%20Grade%2011%20Book%20-%20Page%20194-227.html"
            },
            {
                "id": "g11ecu6",
                "gid": "g11",
                "cid": "g11ec",
                "unit": "6",
                "title": "The Fundamental Concerns of Macroeconomics",
                "description": "which primarily deals with the behaviour of individual economic units. On the other hand, macroeconomics deals with the aggregates or averages covering an entire economy. For instance, total employment, national income, national output, total investments, total consumption, total savings, aggregate supply, aggregate demand and general price level",
                "textbookUrl": "grade11/economics_gr11/Econ%20Grade%2011%20Book%20-%20Page%20228-259.html"
            },
            {
                "id": "g11ecu7",
                "gid": "g11",
                "cid": "g11ec",
                "unit": "7",
                "title": "National Income Account",
                "description": "National income is often considered as the most comprehensive measure of how well an economy is performing. It is necessary and important, therefore, to measure the national income of a country so as to have an idea of the performance of the economy.",
                "textbookUrl": "grade11/economics_gr11/Econ%20Grade%2011%20Book%20-%20Page%20260-289.html"
            },
            {
                "id": "g11ecu8",
                "gid": "g11",
                "cid": "g11ec",
                "unit": "8",
                "title": " Consumption, Saving and Investment",
                "description": " Consumption, Saving and InvestmentThe main purpose of every economic activity is consumption, whatever the type of economy. Most people spend the major part of their income on the consumption of goods and services.",
                "textbookUrl": "grade11/economics_gr11/Econ%20Grade%2011%20Book%20-%20Page%20290-319.html"
            },
            {
                "id": "g11ecu9",
                "gid": "g11",
                "cid": "g11ec",
                "unit": "9",
                "title": "International Trade and Balance of Payments",
                "description": "No country in the world is completely self-sufficient, i.e., no country produces all the goods and services that it requires. Due to differences in the availability of natural resources and other inputs required for production",
                "textbookUrl": "grade11/economics_gr11/Econ%20Grade%2011%20Book%20-%20Page%20320-343.html"
            },
            {
                "id": "g11ecu10",
                "gid": "g11",
                "cid": "g11ec",
                "unit": "10",
                "title": "Macroeconomic Policy Instruments",
                "description": "Every economy aims at achieving certain well-defined targets relative to its national income and output. Not only that, economies over the world also strive for a full employment level",
                "textbookUrl": "grade11/economics_gr11/Econ%20Grade%2011%20Book%20-%20Page%20344-368.html"
            },
            {
                "id": "g11gbu1",
                "gid": "g11",
                "cid": "g11gb",
                "unit": "1",
                "title": "The nature of business",
                "description": "Business enterprises are among the major establishments in any country that influence social and individual life",
                "textbookUrl": "grade11/GB_gr11/Unit%201.html"
            },
            {
                "id": "g11gbu2",
                "gid": "g11",
                "cid": "g11gb",
                "unit": "2",
                "title": "Type and forms of business ownership",
                "description": "Type and forms of business ownershipThe world has experienced three economic systems: Free market, Socialist and Mixed economic systems.",
                "textbookUrl": "grade11/GB_gr11/Unit%202.html"
            },
            {
                "id": "g11gbu3",
                "gid": "g11",
                "cid": "g11gb",
                "unit": "3",
                "title": "Finanacing business organizations",
                "description": "The specific use to which money will be put partly determines the best source for the money.",
                "textbookUrl": "grade11/GB_gr11/Unit%203.html"
            },
            {
                "id": "g11gbu4",
                "gid": "g11",
                "cid": "g11gb",
                "unit": "4",
                "title": "production",
                "description": "Production is an activity of people towards the creation of things, which they need or want.",
                "textbookUrl": "grade11/GB_gr11/Unit%204.html"
            },
            {
                "id": "g12bu1",
                "gid": "g12",
                "cid": "g12b",
                "unit": "1",
                "title": " Micro-organisms",
                "description": "There are many different types of micro-organism. Stress that even in the microscopic world, there is huge variety in form and function. It is also worth spending some time explaining the difficulty of classifying some types of micro-organism.",
                "textbookUrl": "grade12/biology_gr12/bio-gr12/M01_BIOL_SB_ETHY12_0148_U01.html",
                "teacherGuide": "tg/bio/biology_gr12/bio%2012/M01_BIOL_TG_ETHG12_0155_U01.html"
            },
            {
                "id": "g12bu2",
                "gid": "g12",
                "cid": "g12b",
                "unit": "2",
                "title": " Ecology",
                "description": "Explain the need for the recycling of materials through ecosystems",
                "textbookUrl": "grade12/biology_gr12/bio-gr12/M02_BIOL_SB_ETHY12_0148_U02.html",
                "teacherGuide": "tg/bio/biology_gr12/bio%2012/M02_BIOL_TG_ETHG12_0155_U02.html"
            },
            {
                "id": "g12bu3",
                "gid": "g12",
                "cid": "g12b",
                "unit": "3",
                "title": "Genetics",
                "description": "Geneticshow a knowledge of genetics is important in artificially producing new varieties of crops and stock animals through artificial cross-breeding and inbreeding",
                "textbookUrl": "grade12/biology_gr12/M03/index.html",
                "teacherGuide": "tg/bio/biology_gr12/bio%2012/M03_BIOL_TG_ETHG12_0155_U03.html"
            },
            {
                "id": "g12bu4",
                "gid": "g12",
                "cid": "g12b",
                "unit": "4",
                "title": "evolution",
                "description": "evolution of natural selection (including directional selection, stabilising selection and disruptive selection), isolation and speciation, adaptive radiation (divergent evolution) and convergent evolution.",
                "textbookUrl": "grade12/biology_gr12/bio-gr12/M04_BIOL_SB_ETHY12_0148_U04.html",
                "teacherGuide": "tg/bio/biology_gr12/bio%2012/M04_BIOL_TG_ETHG12_0155_U04.html"
            },
            {
                "id": "g12bu5",
                "gid": "g12",
                "cid": "g12b",
                "unit": "5",
                "title": "Behaviour",
                "description": "there has to be a framework within which students can model any example of behaviour. The framework suggested in the textbook allows the analysis of most examples of behaviour to show their common components.",
                "textbookUrl": "grade12/biology_gr12/bio-gr12/M05_BIOL_SB_ETHY12_0148_U05.html",
                "teacherGuide": "tg/bio/biology_gr12/bio%2012/M05_BIOL_TG_ETHG12_0155_U05.html"
            },
            {
                "id": "g12cu1",
                "gid": "g12",
                "cid": "g12h",
                "unit": "1",
                "title": "solution ",
                "description": "the relationship between the colligative properties of solutions and know how to solve problems involving colligative properties of solutions;",
                "textbookUrl": "grade12/chemistry_gr12/web/ChemistryUnit1.html",
                "teacherGuide": "tg/chem/Chemistry_gr12/web/chem%2012/Grade%2012%20Book%20Sept%2022%20-%20Page%201-54.html"
            },
            {
                "id": "g12cu2",
                "gid": "g12",
                "cid": "g12h",
                "unit": "2",
                "title": "Acid -Base Equilibria",
                "description": "Acids and bases are important in numerous chemical processes that occur around us. Their importance vary greatly,",
                "textbookUrl": "grade12/chemistry_gr12/web/ChemistryUnit2.html",
                "teacherGuide": "tg/chem/Chemistry_gr12/web/chem%2012/Grade%2012%20Book%20Sept%2022%20-%20Page%2055-92.html"
            },
            {
                "id": "g12cu3",
                "gid": "g12",
                "cid": "g12h",
                "unit": "3",
                "title": "Introduction to Chemical Thermodynamics",
                "description": "Thermodynamics is the study of energy and its transformation. In a chemical reaction, thermodynamics determines whether a reaction is possible and how much product can be formed.",
                "textbookUrl": "grade12/chemistry_gr12/web/ChemistryUnit3.html",
                "teacherGuide": "tg/chem/Chemistry_gr12/web/chem%2012/Grade%2012%20Book%20Sept%2022%20-%20Page%2093-112.html"
            },
            {
                "id": "g12cu4",
                "gid": "g12",
                "cid": "g12h",
                "unit": "4",
                "title": "Electrochemistry",
                "description": "corrosion as an electrochemical process, and describe corrosion-inhibiting techniques (e.g. painting, galvanizing, cathodic protection)",
                "textbookUrl": "grade12/chemistry_gr12/web/ChemistryUnit4.html",
                "teacherGuide": "tg/chem/Chemistry_gr12/web/chem%2012/Grade%2012%20Book%20Sept%2022%20-%20Page%20113-150.html"
            },
            {
                "id": "g12cu5",
                "gid": "g12",
                "cid": "g12h",
                "unit": "5",
                "title": "Some Elements in Nature and Industry",
                "description": "There are 113 elements known at present. 92 elements occur in nature, while the rest are man-made. All the materials on the earth are made of the naturally occurring elements. The elements are classified as metals, non-metals and metalloids",
                "textbookUrl": "grade12/chemistry_gr12/web/ChemistryUnit5.html",
                "teacherGuide": "tg/chem/Chemistry_gr12/web/chem%2012/Grade%2012%20Book%20Sept%2022%20-%20Page%20151-152.html"
            },
            {
                "id": "g12cu6",
                "gid": "g12",
                "cid": "g12h",
                "unit": "6",
                "title": "Polymers",
                "description": "Polymers are macro (large) molecules made from smaller repeating units called monomers. Hence, monomers are the building blocks of polymers",
                "textbookUrl": "grade12/chemistry_gr12/web/ChemistryUnit6.html",
                "teacherGuide": "tg/chem/Chemistry_gr12/web/chem%2012/Grade%2012%20Book%20Sept%2022%20-%20Page%20179-258.html"
            },
            {
                "id": "g12mnu1",
                "gid": "g12",
                "cid": "g12mn",
                "unit": "1",
                "title": "Sequences and Series",
                "description": "Studying about number sequences is helpful to make predictions in the patterns of natural events",
                "textbookUrl": "grade12/maths_gr12/web/mathsUnit1.html"
            },
            {
                "id": "g12mnu2",
                "gid": "g12",
                "cid": "g12mn",
                "unit": "2",
                "title": " Introduction to Limits and Continuity",
                "description": "limits and continuity. Limits are theoretical in nature but we start with interpretations. Limit can be used to describe how a function behaves as the independent variable approaches a certain value.",
                "textbookUrl": "grade12/maths_gr12/web/mathsUnit2.html"
            },
            {
                "id": "g12mnu3",
                "gid": "g12",
                "cid": "g12mn",
                "unit": "3",
                "title": " Introduction to Differential Calculus",
                "description": "the meaning and methods of differentiation. The unit begins by considering slope as a rate of change",
                "textbookUrl": "grade12/maths_gr12/web/mathsUnit3.html"
            },
            {
                "id": "g12mnu4",
                "gid": "g12",
                "cid": "g12mn",
                "unit": "4",
                "title": "Applications of Differential Calculus",
                "description": "some of the applications of derivatives, but now that you know the differentiation rules, you are in a better position to pursue the applications of differentiation in greater depth.",
                "textbookUrl": "grade12/maths_gr12/web/mathsUnit4.html"
            },
            {
                "id": "g12mnu5",
                "gid": "g12",
                "cid": "g12mn",
                "unit": "5",
                "title": " Introduction to Integral Calculus",
                "description": "differential calculus, which is one of the two branches of calculus. In this unit you shall see the other branch of calculus, called integral calculus.",
                "textbookUrl": "grade12/maths_gr12/web/mathsUnit5.html"
            },
            {
                "id": "g12mnu6",
                "gid": "g12",
                "cid": "g12mn",
                "unit": "6",
                "title": " Three Dimensional Geometry and Vectors in Space",
                "description": "You will learn how the three dimensional coordinates are used to find distance between two points, the midpoint of a line segment in space and also how they are used to derive the equation of a sphere.",
                "textbookUrl": "grade12/maths_gr12/web/mathsUnit6.html"
            },
            {
                "id": "g12mnu7",
                "gid": "g12",
                "cid": "g12mn",
                "unit": "7",
                "title": "Mathematical Proofs",
                "description": "you will be introduced to different methods of mathematical proof and you will also see the role of mathematical logic in proving mathematical statements. We will begin the unit by briefly revising mathematical logic>",
                "textbookUrl": "grade12/maths_gr12/web/mathsUnit7.html"
            },
            {
                "id": "g12mnu8",
                "gid": "g12",
                "cid": "g12mn",
                "unit": "8",
                "title": " Further on Statistics",
                "description": "Statistics is widely used in business to make business forecasts. A successful business must keep a proper record of information in order to predict the future course of the business,",
                "textbookUrl": "grade12/maths_gr12/web/mathsUnit8.html"
            },
            {
                "id": "g12mnu9",
                "gid": "g12",
                "cid": "g12mn",
                "unit": "9",
                "title": " Mathematical Applications for Business and Consumers",
                "description": "you start thinking about how to apply classroom calculations to your everyday life. For example, before making purchases, you need to know how much you can spend,",
                "textbookUrl": "grade12/maths_gr12/web/mathsUnit9.html"
            },
            {
                "id": "g12pu1",
                "gid": "g12",
                "cid": "g12p",
                "unit": "1",
                "title": "Thermodynamics",
                "description": "Identify the appropriate form of the first law of thermodynamics for isobaric, isochoric and isothermal processes.",
                "textbookUrl": "grade12/physic_gr12/M01_PHYS_SB_ETHY12_0223_U01.html",
                "teacherGuide": "tg/phy/physics_gr12/phy%2012/M01_PHYS_TG_ETHY12_0230_U01.html"
            },
            {
                "id": "g12pu2",
                "gid": "g12",
                "cid": "g12p",
                "unit": "2",
                "title": "Oscillations and Waves",
                "description": "Identify the properties of standing waves and for both mechanical and sound waves, explain the conditions for standing waves to occur. Including definitions of the terms node and antinode.>",
                "textbookUrl": "grade12/physic_gr12/M02_PHYS_SB_ETHY12_0223_U02.html",
                "teacherGuide": "tg/phy/physics_gr12/phy%2012/M02_PHYS_TG_ETHY12_0230_U02.html"
            },
            {
                "id": "g12pu3",
                "gid": "g12",
                "cid": "g12p",
                "unit": "3",
                "title": "wave optics",
                "description": " When light passes through a small gap every point of the light wave within the gap creates its own circular wavelet. The gap therefore effectively creates a new wave source",
                "textbookUrl": "grade12/physic_gr12/M03_PHYS_SB_ETHY12_0223_U03.html",
                "teacherGuide": "tg/phy/physics_gr12/phy%2012/M03_PHYS_TG_ETHY12_0230_U03.html"
            },
            {
                "id": "g12pu4",
                "gid": "g12",
                "cid": "g12p",
                "unit": "4",
                "title": " Electrostatics",
                "description": "experiment with connecting capacitors in series and in parallel and observing the effects of the two arrangement",
                "textbookUrl": "grade12/physic_gr12/M04_PHYS_SB_ETHY12_0223_U04.html",
                "teacherGuide": "tg/phy/physics_gr12/phy%2012/M04_PHYS_TG_ETHY12_0230_U04.html"
            },
            {
                "id": "g12pu5",
                "gid": "g12",
                "cid": "g12p",
                "unit": "5",
                "title": "Steady Electric Current and Circuit Properties",
                "description": "use multimeters and agalvanometer to make various measurements in an electrical circuit, use an oscilloscope to show the characteristics of the electrical current",
                "textbookUrl": "grade12/physic_gr12/M05_PHYS_SB_ETHY12_0223_U05.html",
                "teacherGuide": "tg/phy/physics_gr12/phy%2012/M05_PHYS_TG_ETHY12_0230_U05.html"
            },
            {
                "id": "g12pu6",
                "gid": "g12",
                "cid": "g12p",
                "unit": "6",
                "title": "magnetism",
                "description": "They should plot the direction of the needle deflection at the points and, from these, produce the magnetic flux lines. The neutral points are where there is no magnetic flux",
                "textbookUrl": "grade12/physic_gr12/M06_PHYS_SB_ETHY12_0223_U06.html",
                "teacherGuide": "tg/phy/physics_gr12/phy%2012/M06_PHYS_TG_ETHY12_0230_U06.html"
            },
            {
                "id": "g12pu7",
                "gid": "g12",
                "cid": "g12p",
                "unit": "7",
                "title": " Elctromagnetic Induction and AC Circuits",
                "description": "Solve problems involving the magnitude and phase of current and applied p.d. in a.c. circuits which include resistors, capacitors and inductors.",
                "textbookUrl": "grade12/physic_gr12/M07_PHYS_SB_ETHY12_0223_U07.html",
                "teacherGuide": "tg/phy/physics_gr12/phy%2012/M07_PHYS_TG_ETHY12_0230_U07.html"
            },
            {
                "id": "g12pu8",
                "gid": "g12",
                "cid": "g12p",
                "unit": "8",
                "title": "Atomic Physics",
                "description": "If Thomson’s model of the atom had been correct then the particles would not have been deflected as much since Thomson said that negative charge was spread throughout the main part of the atom",
                "textbookUrl": "grade12/physic_gr12/M08_PHYS_SB_ETHY12_0223_U08.html",
                "teacherGuide": "tg/phy/physics_gr12/phy%2012/M08_PHYS_TG_ETHY12_0230_U08.html"
            },
            {
                "id": "g12eu1",
                "gid": "g12",
                "cid": "g12e",
                "unit": "1",
                "title": "family life",
                "textbookUrl": "grade12/english_gr12/M01_ENG_SB_ETHG12_0308_M01.html",
                "teacherGuide": "tg/en/english_gr12/english%2012/M01_ENG_TB_ETHG12_0315_M01%20-%20Page%201-11.html"
            },
            {
                "id": "g12eu2",
                "gid": "g12",
                "cid": "g12e",
                "unit": "2",
                "title": "communication ",
                "textbookUrl": "grade12/english_gr12/M02_ENG_SB_ETHG12_0308_M02.html",
                "teacherGuide": "tg/en/english_gr12/english%2012/M01_ENG_TB_ETHG12_0315_M01%20-%20Page%2012-20.html"
            },
            {
                "id": "g12eu3",
                "gid": "g12",
                "cid": "g12e",
                "unit": "3",
                "title": "Education",
                "textbookUrl": "grade12/english_gr12/M03_ENG_SB_ETHG12_0308_M03.html",
                "teacherGuide": "tg/en/english_gr12/english%2012/M01_ENG_TB_ETHG12_0315_M01%20-%20Page%2012-20.html"
            },
            {
                "id": "g12eu4",
                "gid": "g12",
                "cid": "g12e",
                "unit": "4",
                "title": "arts and litreature",
                "textbookUrl": "grade12/english_gr12/M04_ENG_SB_ETHG12_0308_M04.html",
                "teacherGuide": "tg/en/english_gr12/english%2012/M02_ENG_TB_ETHG12_0315_M02%20-%20Page%201-10.html"
            },
            {
                "id": "g12eu5",
                "gid": "g12",
                "cid": "g12e",
                "unit": "5",
                "title": "the united nation ",
                "textbookUrl": "grade12/english_gr12/M05_ENG_SB_ETHG12_0308_M05.html",
                "teacherGuide": "tg/en/english_gr12/english%2012/M02_ENG_TB_ETHG12_0315_M02%20-%20Page%2011-19.html"
            },
            {
                "id": "g12eu6",
                "gid": "g12",
                "cid": "g12e",
                "unit": "6",
                "title": "trade and globalization",
                "textbookUrl": "grade12/english_gr12/M06_ENG_SB_ETHG12_0308_M06.html",
                "teacherGuide": "tg/en/english_gr12/english%2012/M02_ENG_TB_ETHG12_0315_M02%20-%20Page%2020-30.html"
            },
            {
                "id": "g12eu7",
                "gid": "g12",
                "cid": "g12e",
                "unit": "7",
                "title": "finding a job",
                "textbookUrl": "grade12/english_gr12/M07_ENG_SB_ETHG12_0308_M07.html",
                "teacherGuide": "tg/en/english_gr12/english%2012/M03_ENG_TB_ETHG12_0315_M03%20-%20Page%201-11.html"
            },
            {
                "id": "g12eu8",
                "gid": "g12",
                "cid": "g12e",
                "unit": "8",
                "title": "human development",
                "textbookUrl": "grade12/english_gr12/M08_ENG_SB_ETHG12_0308_M08.html",
                "teacherGuide": "tg/en/english_gr12/english%2012/M03_ENG_TB_ETHG12_0315_M03%20-%20Page%2012-21.html"
            },
            {
                "id": "g12eu9",
                "gid": "g12",
                "cid": "g12e",
                "unit": "9",
                "title": "Tradition versus progress",
                "textbookUrl": "grade12/english_gr12/M09_ENG_SB_ETHG12_0308_M09.html",
                "teacherGuide": "tg/en/english_gr12/english%2012/M03_ENG_TB_ETHG12_0315_M03%20-%20Page%2022-31.html"
            },
            {
                "id": "g12eu10",
                "gid": "g12",
                "cid": "g12e",
                "unit": "10",
                "title": "fufure threat",
                "textbookUrl": "grade12/english_gr12/M10_ENG_SB_ETHG12_0308_M10.html",
                "teacherGuide": "tg/en/english_gr12/english%2012/M04_ENG_TB_ETHG12_0315_M04%20-%20Page%201-11.html"
            },
            {
                "id": "g12eu11",
                "gid": "g12",
                "cid": "g12e",
                "unit": "11",
                "title": "the film industry",
                "textbookUrl": "grade12/english_gr12/M11_ENG_SB_ETHG12_0308_M11.html",
                "teacherGuide": "tg/en/english_gr12/english%2012/M04_ENG_TB_ETHG12_0315_M04%20-%20Page%2012-20.html"
            },
            {
                "id": "g12eu12",
                "gid": "g12",
                "cid": "g12e",
                "unit": "12",
                "title": "class magazine",
                "textbookUrl": "grade12/english_gr12/M12_ENG_SB_ETHG12_0308_M12.html",
                "teacherGuide": "tg/en/english_gr12/english%2012/M04_ENG_TB_ETHG12_0315_M04%20-%20Page%2021-26.html"
            },
            {
                "id": "g12au1",
                "gid": "g12",
                "cid": "g12a",
                "unit": "1",
                "title": "ቋንቋና ህብረተሰብ",
                "textbookUrl": "grade12/Amharic/web/AmUnit1.html"
            },
            {
                "id": "g12au2",
                "gid": "g12",
                "cid": "g12a",
                "unit": "2",
                "title": "የአማርኛ አጀማመርና ዕድገት",
                "textbookUrl": "grade12/Amharic/web/AmUnit2.html"
            },
            {
                "id": "g12au3",
                "gid": "g12",
                "cid": "g12a",
                "unit": "3",
                "title": "ሒስ",
                "textbookUrl": "grade12/Amharic/web/AmUnit3.html"
            },
            {
                "id": "g12au4",
                "gid": "g12",
                "cid": "g12a",
                "unit": "4",
                "title": " ሥነጽሑፍ",
                "textbookUrl": "grade12/Amharic/web/AmUnit4.html"
            },
            {
                "id": "g12au5",
                "gid": "g12",
                "cid": "g12a",
                "unit": "5",
                "title": "ሰብዓዊነት",
                "textbookUrl": "grade12/Amharic/web/AmUnit5.html"
            },
            {
                "id": "g12au6",
                "gid": "g12",
                "cid": "g12a",
                "unit": "6",
                "title": "ጥናታዊ ጽሑፍ",
                "textbookUrl": "grade12/Amharic/web/AmUnit6.html"
            },
            {
                "id": "g12au7",
                "gid": "g12",
                "cid": "g12a",
                "unit": "7",
                "title": "ሥነግጥም",
                "textbookUrl": "grade12/Amharic/web/AmUnit7.html"
            },
            {
                "id": "g12au8",
                "gid": "g12",
                "cid": "g12a",
                "unit": "8",
                "title": "ውሳኔ ላይ መድረስ",
                "textbookUrl": "grade12/Amharic/web/AmUnit8.html"
            },
            {
                "id": "g12au9",
                "gid": "g12",
                "cid": "g12a",
                "unit": "9",
                "title": "ህብረተሰብና ጤና",
                "textbookUrl": "grade12/Amharic/web/AmUnit9.html"
            },
            {
                "id": "g12afu1",
                "gid": "g12",
                "cid": "g12af",
                "unit": "1",
                "title": "Maalummaafi Amaloota Afaanii",
                "textbookUrl": "grade12/AO/GRADE%20ST%2012%20-%20Page%207-24.html"
            },
            {
                "id": "g12afu2",
                "gid": "g12",
                "cid": "g12af",
                "unit": "2",
                "title": " Godaansa Uummataa",
                "textbookUrl": "grade12/AO/GRADE%20ST%2012%20-%20Page%2025-32.html"
            },
            {
                "id": "g12afu3",
                "gid": "g12",
                "cid": "g12af",
                "unit": "3",
                "title": " Beekumsa",
                "textbookUrl": "grade12/AO/GRADE%20ST%2012%20-%20Page%2033-44.html"
            },
            {
                "id": "g12afu4",
                "gid": "g12",
                "cid": "g12af",
                "unit": "4",
                "title": " Qaama Qaamaan Bakka Buusuu",
                "textbookUrl": "grade12/AO/GRADE%20ST%2012%20-%20Page%2045-54.html"
            },
            {
                "id": "g12afu5",
                "gid": "g12",
                "cid": "g12af",
                "unit": "5",
                "title": " Aadaa Fuudhaafi Heeruma Oromoo Gujii",
                "textbookUrl": "grade12/AO/GRADE%20ST%2012%20-%20Page%2055-62.html"
            },
            {
                "id": "g12afu6",
                "gid": "g12",
                "cid": "g12af",
                "unit": "6",
                "title": "Kufaatii Dinagdee Addunyaa",
                "textbookUrl": "grade12/AO/GRADE%20ST%2012%20-%20Page%2063-76.html"
            },
            {
                "id": "g12afu7",
                "gid": "g12",
                "cid": "g12af",
                "unit": "7",
                "title": "Harka Qullaa Kaatu Moo...?",
                "textbookUrl": "grade12/AO/GRADE%20ST%2012%20-%20Page%2077-84.html"
            },
            {
                "id": "g12afu8",
                "gid": "g12",
                "cid": "g12af",
                "unit": "8",
                "title": "Gabateerraa Odeeffannoo Dubbisuu",
                "textbookUrl": "grade12/AO/GRADE%20ST%2012%20-%20Page%2085-94.html"
            },
            {
                "id": "g12afu9",
                "gid": "g12",
                "cid": "g12af",
                "unit": "9",
                "title": "og-Walaloo",
                "textbookUrl": "grade12/AO/GRADE%20ST%2012%20-%20Page%2095-102.html"
            },
            {
                "id": "g12afu10",
                "gid": "g12",
                "cid": "g12af",
                "unit": "10",
                "title": " Babal’ina Barnoota Olaanaa",
                "textbookUrl": "grade12/AO/GRADE%20ST%2012%20-%20Page%20103-110.html"
            },
            {
                "id": "g12afu11",
                "gid": "g12",
                "cid": "g12af",
                "unit": "11",
                "title": "Asoosama",
                "textbookUrl": "grade12/AO/GRADE%20ST%2012%20-%20Page%20111-122.html"
            },
            {
                "id": "g12afu12",
                "gid": "g12",
                "cid": "g12af",
                "unit": "12",
                "title": "Diraamaafi Asoosama",
                "textbookUrl": "grade12/AO/GRADE%20ST%2012%20-%20Page%20123-126.html"
            },
            {
                "id": "g12afu13",
                "gid": "g12",
                "cid": "g12af",
                "unit": "13",
                "title": "tumaa",
                "textbookUrl": "grade12/AO/GRADE%20ST%2012%20-%20Page%20127-134.html"
            },
            {
                "id": "g12afu14",
                "gid": "g12",
                "cid": "g12af",
                "unit": "14",
                "title": "Seera Makoo Bil’ii",
                "textbookUrl": "grade12/AO/GRADE%20ST%2012%20-%20Page%20135-148.html"
            },
            {
                "id": "g12afu15",
                "gid": "g12",
                "cid": "g12af",
                "unit": "15",
                "title": "haroo wancii",
                "textbookUrl": "grade12/AO/GRADE%20ST%2012%20-%20Page%20149-158.html"
            },
            {
                "id": "g12afu16",
                "gid": "g12",
                "cid": "g12af",
                "unit": "16",
                "title": "gumaa",
                "textbookUrl": "grade12/AO/GRADE%20ST%2012%20-%20Page%20159-164.html"
            },
            {
                "id": "g12afu17",
                "gid": "g12",
                "cid": "g12af",
                "unit": "17",
                "title": "Mootummaan Maalii?",
                "textbookUrl": "grade12/AO/GRADE%20ST%2012%20-%20Page%20165-170.html"
            },
            {
                "id": "g12afu18",
                "gid": "g12",
                "cid": "g12af",
                "unit": "18",
                "title": "waaltina",
                "textbookUrl": "grade12/AO/GRADE%20ST%2012%20-%20Page%20171-180.html"
            },
            {
                "id": "g12ciu1",
                "gid": "g12",
                "cid": "g12ci",
                "unit": "1",
                "title": "Building a Democratic System",
                "description": "Today, many more countries in the world are marching on the road to democracy than ever before.",
                "textbookUrl": "grade12/civics_gr12/12-unit1.html"
            },
            {
                "id": "g12ciu2",
                "gid": "g12",
                "cid": "g12ci",
                "unit": "2",
                "title": "Rule of Law",
                "description": "Modern democratic governments are established and organized by a constitution.",
                "textbookUrl": "grade12/civics_gr12/12-unit2.html"
            },
            {
                "id": "g12ciu3",
                "gid": "g12",
                "cid": "g12ci",
                "unit": "3",
                "title": "Equality",
                "description": "Though the highest proportion of the Ethiopian population were peasants, they were severely exploited.",
                "textbookUrl": "grade12/civics_gr12/12-unit3.html"
            },
            {
                "id": "g12ciu4",
                "gid": "g12",
                "cid": "g12ci",
                "unit": "4",
                "title": "Justice",
                "description": "It is important that people share the benefits and burdens equally.",
                "textbookUrl": "grade12/civics_gr12/12-unit4.html"
            },
            {
                "id": "g12ciu5",
                "gid": "g12",
                "cid": "g12ci",
                "unit": "5",
                "title": "Patriotism",
                "description": "The human and democratic rights that we talk about today were not fully respected, even in countries which have a long history of a democratic culture.",
                "textbookUrl": "grade12/civics_gr12/12-unit5.html"
            },
            {
                "id": "g12ciu6",
                "gid": "g12",
                "cid": "g12ci",
                "unit": "6",
                "title": "Responsibility",
                "description": "The well-being of society is the basis for the wellbeing of its members. The opposite is equally true. In society, every person has some responsibilities to shoulder to make life better.",
                "textbookUrl": "grade12/civics_gr12/12-unit6.html"
            },
            {
                "id": "g12ciu7",
                "gid": "g12",
                "cid": "g12ci",
                "unit": "7",
                "title": "Industriousness",
                "description": "you will explore more about the personal benefits of work from the perspective of social interactions, interest, financial benefits and job satisfaction.",
                "textbookUrl": "grade12/civics_gr12/12-unit7.html"
            },
            {
                "id": "g12ciu8",
                "gid": "g12",
                "cid": "g12ci",
                "unit": "8",
                "title": "Self-Reliance",
                "description": "Self-reliant people have good selfawareness. They know their good qualities and weaknesses.",
                "textbookUrl": "grade12/civics_gr12/12-unit8.html"
            },
            {
                "id": "g12ciu9",
                "gid": "g12",
                "cid": "g12ci",
                "unit": "9",
                "title": "Saving",
                "description": "This importance generally arises from the fact that the resources we use to satisfy our needs and wants are scarce.",
                "textbookUrl": "grade12/civics_gr12/12-unit9.html"
            },
            {
                "id": "g12ciu10",
                "gid": "g12",
                "cid": "g12ci",
                "unit": "10",
                "title": "Active Community Participation",
                "description": "The success of an organization depends on its leader — his/her attributes, approaches, and problemsolving techniques.",
                "textbookUrl": "grade12/civics_gr12/12-unit10.html"
            },
            {
                "id": "g12ciu11",
                "gid": "g12",
                "cid": "g12ci",
                "unit": "11",
                "title": "The Pursuit of Wisdom",
                "description": "Knowledge is the most powerful tool in the hands of man. It influences the way man lives and interacts with nature.",
                "textbookUrl": "grade12/civics_gr12/12-unit11.html"
            },
            {
                "id": "g12iu1",
                "gid": "g12",
                "cid": "g12i",
                "unit": "1",
                "title": "Information system ",
                "description": "Electronic technologies are playing an important role in shaping the mindset of Ethiopian citizens, and they will want that mindset reflected in social governance.",
                "textbookUrl": "grade12/ICT/Complete%20Book%20ICT%20ST%20Grade-12%20-%20Page%205-33.html",
                "teacherGuide": "tg/ict/ICT_gr12/ict%2012/ICT%20TG%20Grade-12%20Final%20J.B.%20Dixit%2012-08-2011(For%20Printing)%20-%20Page%201-18.html"
            },
            {
                "id": "g12iu2",
                "gid": "g12",
                "cid": "g12i",
                "unit": "2",
                "title": "Enhancing The Use of Software",
                "description": "Software required to solve some specific task of daily use is generally called application software.",
                "textbookUrl": "grade12/ICT/Complete%20Book%20ICT%20ST%20Grade-12%20-%20Page%2034-61.html",
                "teacherGuide": "tg/ict/ICT_gr12/ict%2012/ICT%20TG%20Grade-12%20Final%20J.B.%20Dixit%2012-08-2011(For%20Printing)%20-%20Page%2019-22.html"
            },
            {
                "id": "g12iu3",
                "gid": "g12",
                "cid": "g12i",
                "unit": "3",
                "title": "Exploiting The Internet",
                "description": "There are several applications of websites on the Internet each specializing in a particular service or use. Some are selling something, some are entertaining everyone and some just want to share their knowledge with others.",
                "textbookUrl": "grade12/ICT/Complete%20Book%20ICT%20ST%20Grade-12%20-%20Page%2062-80.html",
                "teacherGuide": "tg/ict/ICT_gr12/ict%2012/ICT%20TG%20Grade-12%20Final%20J.B.%20Dixit%2012-08-2011(For%20Printing)%20-%20Page%2023-39.html"
            },
            {
                "id": "g12iu4",
                "gid": "g12",
                "cid": "g12i",
                "unit": "4",
                "title": "image ProcessIng and multimedia Systems",
                "description": "Media is the means of communication i.e., plural of medium. Multimedia is the combined use of several media, such as motion-pictures, slides and music. Or in other words, multimedia refers to technology that presents information in more than one medium—such as text, pictures, video, sound, and animation—in",
                "textbookUrl": "grade12/ICT/Complete%20Book%20ICT%20ST%20Grade-12%20-%20Page%2081-112.html",
                "teacherGuide": "tg/ict/ICT_gr12/ict%2012/ICT%20TG%20Grade-12%20Final%20J.B.%20Dixit%2012-08-2011(For%20Printing)%20-%20Page%2040-68.html"
            },
            {
                "id": "g12tdu1",
                "gid": "g12",
                "cid": "g12td",
                "unit": "1",
                "title": "principle of skeching",
                "textbookUrl": "grade12/TD_gr12/index.html#"
            },
            {
                "id": "g12tdu2",
                "gid": "g12",
                "cid": "g12td",
                "unit": "2",
                "title": "Postion of Reference line horizontal",
                "textbookUrl": "grade12/TD_gr12/index.html#"
            },
            {
                "id": "g12tdu3",
                "gid": "g12",
                "cid": "g12td",
                "unit": "3",
                "title": "full,half and offset sections",
                "textbookUrl": "grade12/TD_gr12/index.html#"
            },
            {
                "id": "g12tdu4",
                "gid": "g12",
                "cid": "g12td",
                "unit": "4",
                "title": "introduction to dimenshining",
                "textbookUrl": "grade12/TD_gr12/index.html#"
            },
            {
                "id": "g12tdu5",
                "gid": "g12",
                "cid": "g12td",
                "unit": "5",
                "title": "methods of development",
                "textbookUrl": "grade12/TD_gr12/index.html#"
            },
            {
                "id": "g12msu1",
                "gid": "g12",
                "cid": "g12ms",
                "unit": "1",
                "title": "Sequences and Series",
                "description": "Studying about number sequences is helpful to make predictions in the patterns of natural events",
                "textbookUrl": "grade12/maths_gr12/web/mathsUnit1.html"
            },
            {
                "id": "g12msu2",
                "gid": "g12",
                "cid": "g12ms",
                "unit": "2",
                "title": "Introduction to Limits and Continuity",
                "description": "limits and continuity. Limits are theoretical in nature but we start with interpretations. Limit can be used to describe how a function behaves as the independent variable approaches a certain value.",
                "textbookUrl": "grade12/maths_gr12/web/mathsUnit2.html"
            },
            {
                "id": "g12msu3",
                "gid": "g12",
                "cid": "g12ms",
                "unit": "3",
                "title": " Introduction to Differential Calculus",
                "description": "the meaning and methods of differentiation. The unit begins by considering slope as a rate of change",
                "textbookUrl": "grade12/maths_gr12/web/mathsUnit3.html"
            },
            {
                "id": "g12msu4",
                "gid": "g12",
                "cid": "g12ms",
                "unit": "4",
                "title": "Applications of Differential Calculus",
                "description": "some of the applications of derivatives, but now that you know the differentiation rules, you are in a better position to pursue the applications of differentiation in greater depth.",
                "textbookUrl": "grade12/maths_gr12/web/mathsUnit4.html"
            },
            {
                "id": "g12msu5",
                "gid": "g12",
                "cid": "g12ms",
                "unit": "5",
                "title": "Introduction to Integral Calculus",
                "description": "differential calculus, which is one of the two branches of calculus. In this unit you shall see the other branch of calculus, called integral calculus.",
                "textbookUrl": "grade12/maths_gr12/web/mathsUnit5.html"
            },
            {
                "id": "g12msu6",
                "gid": "g12",
                "cid": "g12ms",
                "unit": "6",
                "title": "Three Dimensional Geometry and Vectors in Space",
                "description": "You will learn how the three dimensional coordinates are used to find distance between two points, the midpoint of a line segment in space and also how they are used to derive the equation of a sphere.",
                "textbookUrl": "grade12/maths_gr12/web/mathsUnit6.html"
            },
            {
                "id": "g12msu7",
                "gid": "g12",
                "cid": "g12ms",
                "unit": "7",
                "title": "Mathematical Proofs",
                "description": "you will be introduced to different methods of mathematical proof and you will also see the role of mathematical logic in proving mathematical statements. We will begin the unit by briefly revising mathematical logic>",
                "textbookUrl": "grade12/maths_gr12/web/mathsUnit7.html"
            },
            {
                "id": "g12msu8",
                "gid": "g12",
                "cid": "g12ms",
                "unit": "8",
                "title": "Further on Statistics",
                "description": "Statistics is widely used in business to make business forecasts. A successful business must keep a proper record of information in order to predict the future course of the business,",
                "textbookUrl": "grade12/maths_gr12/web/mathsUnit8.html"
            },
            {
                "id": "g12msu9",
                "gid": "g12",
                "cid": "g12ms",
                "unit": "9",
                "title": " Mathematical Applications for Business and Consumer",
                "description": "you start thinking about how to apply classroom calculations to your everyday life. For example, before making purchases, you need to know how much you can spend,",
                "textbookUrl": "grade12/maths_gr12/web/mathsUnit9.html"
            },
            {
                "id": "g12gu1",
                "gid": "g12",
                "cid": "g12g",
                "unit": "1",
                "title": "Basic research methodologies in geography",
                "description": "Geography is a discipline that attempts to understand human and physical aspects of the world.",
                "textbookUrl": "grade12/geography_gr12/Geo_Grade_12_Book%20-%20Page%209-35.html"
            },
            {
                "id": "g12gu2",
                "gid": "g12",
                "cid": "g12g",
                "unit": "2",
                "title": "Map use and map work",
                "description": "Human beings have kept track of locations and the directions to and from them since we first appeared on earth.",
                "textbookUrl": "grade12/geography_gr12/Geo_Grade_12_Book%20-%20Page%2069-156.html"
            },
            {
                "id": "g12gu3",
                "gid": "g12",
                "cid": "g12g",
                "unit": "3",
                "title": "Physical geography of ethiopia and the horn",
                "description": "Physical geography of ethiopia and the hornThe Horn of Africa consists of four countries: Djibouti, Ethiopia, Eritrea and Somalia.",
                "textbookUrl": "grade12/geography_gr12/Geo_Grade_12_Book%20-%20Page%2069-156.html"
            },
            {
                "id": "g12gu4",
                "gid": "g12",
                "cid": "g12g",
                "unit": "4",
                "title": "Population of ethiopia and the horn",
                "textbookUrl": "grade12/geography_gr12/web/GeoUnit4.html"
            },
            {
                "id": "g12ecu1",
                "gid": "g12",
                "cid": "g12ec",
                "unit": "1",
                "title": "Main Sectors of the Ethiopian Economy",
                "description": "the Ethiopian economy has experienced changes from market-oriented to centrally planned and back again to a market-oriented economy. Under the Monarchy (up to 1974), the economy was primarily agricultural.",
                "textbookUrl": "grade12/economics_gr12/Econ%20Grade%2012%20Book%20-%20Page%208-39.html"
            },
            {
                "id": "g12ecu2",
                "gid": "g12",
                "cid": "g12ec",
                "unit": "2",
                "title": "The Agricultural Sector in Ethiopian Economy",
                "description": "the agricultural sector in Ethiopia is the mainstay of the country’s economy. It is also the most volatile sector, as exhibited in the unevenness of its growth patterns, which is the effect of its heavy dependence on rainfall and the seasonal shocks that are frequently observed in Ethiopia.",
                "textbookUrl": "grade12/economics_gr12/Econ%20Grade%2012%20Book%20-%20Page%2040-73.html"
            },
            {
                "id": "g12ecu3",
                "gid": "g12",
                "cid": "g12ec",
                "unit": "3",
                "title": " The Industrial Sector in Ethiopia",
                "description": "A developed industry is likely to boost the entire economy by making it nationally integrated, flexible, and capable of self-generated and self-sustained growth. That is why the ultimate objective of the developing nations, including Ethiopia, is industrial development.",
                "textbookUrl": "grade12/economics_gr12/Econ%20Grade%2012%20Book%20-%20Page%2074-115.html"
            },
            {
                "id": "g12ecu4",
                "gid": "g12",
                "cid": "g12ec",
                "unit": "4",
                "title": "The Service Sector in Ethiopia",
                "description": "the different service sectors such as education, health, transport, communication, and tourism in Ethiopia. We will also examine the policies and strategies of the Imperial, Derg and EPRDF governments regarding the education, health, and communication sectors.",
                "textbookUrl": "grade12/economics_gr12/Econ%20Grade%2012%20Book%20-%20Page%20116-161.html"
            },
            {
                "id": "g12ecu5",
                "gid": "g12",
                "cid": "g12ec",
                "unit": "5",
                "title": "Trade in the Ethiopian Economy",
                "description": "Trade can be of two types. These are domestic and international trade. Domestic trade involves the exchange of goods and services among citizens in a country, whereas international trade is the exchange of goods and services among the citizens of independent or sovereign nations.",
                "textbookUrl": "grade12/economics_gr12/Econ%20Grade%2012%20Book%20-%20Page%20162-209.html"
            },
            {
                "id": "g12ecu6",
                "gid": "g12",
                "cid": "g12ec",
                "unit": "6",
                "title": "Fiscal Policy and Public Development in Ethiopia",
                "description": "fiscal policies and public developments in Ethiopia. Among them, the economic role of the government, structure and performance of revenue and expenditure,",
                "textbookUrl": "grade12/economics_gr12/Econ%20Grade%2012%20Book%20-%20Page%20210-230.html"
            },
            {
                "id": "g12ecu7",
                "gid": "g12",
                "cid": "g12ec",
                "unit": "7",
                "title": "Monetary Policy and Financial Sectors in Ethiopia",
                "description": "Monetary policy refers to the management of the money supply and its link to prices, interest rates and other economic variables. More generally, monetary policy is a bundle of actions and regulatory stances taken by the central bank",
                "textbookUrl": "grade12/economics_gr12/Econ%20Grade%2012%20Book%20-%20Page%20231-256.html"
            },
            {
                "id": "g12ecu8",
                "gid": "g12",
                "cid": "g12ec",
                "unit": "8",
                "title": "The Economic Reform Program in Ethiopia",
                "description": "In 1974/75 Ethiopia made a transition from a mixed economic system to a totally controlled economy that pushed the economy downward. During the central planned economy, the restrictions and taxation on the Ethiopian economy were substantial.",
                "textbookUrl": "grade12/economics_gr12/Econ%20Grade%2012%20Book%20-%20Page%20257-283.html"
            },
            {
                "id": "g12gbu1",
                "gid": "g12",
                "cid": "g12gb",
                "unit": "1",
                "title": "marketing",
                "description": "Marketing completes the basic mission of an economy. It tries to identify the needs and wants of customers.",
                "textbookUrl": "grade12/GB_gr12/Chapter%201.html"
            },
            {
                "id": "g12gbu2",
                "gid": "g12",
                "cid": "g12gb",
                "unit": "2",
                "title": "communication ",
                "description": "Communication is very important for two basic reasons. Firstly, communication is important for managerial tasks or duties such as planning, organizing, directing and controlling.",
                "textbookUrl": "grade12/GB_gr12/Chapter%202.html"
            },
            {
                "id": "g12gbu3",
                "gid": "g12",
                "cid": "g12gb",
                "unit": "3",
                "title": "trade",
                "description": "The growth of world trade offers tremendous potential for Ethiopian business organizations that are engaged in buying and selling goods and services in overseas markets.",
                "textbookUrl": "grade12/GB_gr12/Chapter%203.html"
            },
            {
                "id": "g12gbu4",
                "gid": "g12",
                "cid": "g12gb",
                "unit": "4",
                "title": "Business records keeping and financial",
                "description": "The primary purpose of this unit is to explore the nature of accounting information and the environment in which it is developed and used",
                "textbookUrl": "grade12/GB_gr12/Chapter%204.html"
            }



    ]

   }

filterItems(searchTerm){
  return this.items.filter((item) => {
    const searchFields:string[] = ['cid'];
    if (searchFields.some((field) => {
      return item[field].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    })) {
      return 'Not found';
    }

  });
}
}
