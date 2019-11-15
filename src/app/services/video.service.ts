import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
items: any;
  constructor() {
  this.items= [
        {
            "id": "g9bu1v1",
            "gid": "g9",
            "cid": "g9b",
            "uid": "g9bu1",
            "episode": "1",
            "title": "Renowned Ethiopian Biologists",
            "vurl": ".grade9/Biology/resources/bio_un1/bio-unit1-Eps1.mp4"
        },
        {
            "id": "g9bu1v2",
            "gid": "g9",
            "cid": "g9b",
            "uid": "g9bu1",
            "episode": "2",
            "title": " Ethiopian isnstitutions involved in Biological Research Part I",
            "vurl": ".grade9/Biology/resources/bio_un1/bio-unit1-Eps2.mp4"
        },
        {
            "id": "g9bu2v1",
            "gid": "g9",
            "cid": "g9b",
            "uid": "g9bu2",
            "episode": "1",
            "title": " The Microscope Part I",
            "vurl": ".grade9/Biology/resources/bio_un2/bio-unit2-Eps1.mp4"
        },
        {
            "id": "g9bu2v2",
            "gid": "g9",
            "cid": "g9b",
            "uid": "g9bu2",
            "episode": "2",
            "title": "The Microscope part II",
            "vurl": ".grade9/Biology/resources/bio_un2/bio-unit2-Eps2.mp4"
        },
        {
            "id": "g9bu2v3",
            "gid": "g9",
            "cid": "g9b",
            "uid": "g9bu2",
            "episode": "3",
            "title": "Basic Techniques of a Microscope",
            "vurl": ".grade9/Biology/resources/bio_un2/bio-unit2-Eps3.mp4"
        },
        {
            "id": "g9bu2v4",
            "gid": "g9",
            "cid": "g9b",
            "uid": "g9bu2",
            "episode": "5",
            "title": "Cell Type, size and shape",
            "vurl": ".grade9/Biology/resources/bio_un2/bio-unit2-Eps5..mp4"
        },
        {
            "id": "g9bu2v5",
            "gid": "g9",
            "cid": "g9b",
            "uid": "g9bu2",
            "episode": "9",
            "title": "Comparing plant and Animal Cells",
            "vurl": ".grade9/Biology/resources/bio_un2/bio-unit2-Eps9.mp4"
        },
        {
            "id": "g9bu2v6",
            "gid": "g9",
            "cid": "g9b",
            "uid": "g9bu2",
            "episode": "11",
            "title": "Permeability of the Cell MembranePermeability of the Cell Membrane",
            "vurl": ".grade9/Biology/resources/bio_un2/bio-unit2-Eps11.mp4"
        },
        {
            "id": "g9bu2v7",
            "gid": "g9",
            "cid": "g9b",
            "uid": "g9bu2",
            "episode": "12",
            "title": "Diffusion",
            "vurl": ".grade9/Biology/resources/bio_un2/bio-unit2-Eps12.mp4"
        },
        {
            "id": "g9bu2v8",
            "gid": "g9",
            "cid": "g9b",
            "uid": "g9bu2",
            "episode": "13",
            "title": "Osmosis",
            "vurl": ".grade9/Biology/resources/bio_un2/bio-unit2-Eps13.mp4"
        },
        {
            "id": "g9bu2v9",
            "gid": "g9",
            "cid": "g9b",
            "uid": "g9bu2",
            "episode": "14",
            "title": " Isotonic,Hypotonic and Hypertonic Conditions",
            "vurl": ".grade9/Biology/resources/bio_un2/bio-unit2-Eps14.mp4"
        },
        {
            "id": "g9bu2v10",
            "gid": "g9",
            "cid": "g9b",
            "uid": "g9bu2",
            "episode": "15",
            "title": "Plasmolysis and Turgor Pressure",
            "vurl": ".grade9/Biology/resources/bio_un2/bio-unit2-Eps15..mp4"
        },
        {
            "id": "g9cu1v1",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "1",
            "title": "Dalton’s atomic theory",
            "vurl": ".grade9/Chemistry/web/resources/chem_u1/chemistry-unit1-eps1.mp4"
        },
        {
            "id": "g9cu1v2",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "3",
            "title": "Discovery of the electron",
            "vurl": ".grade9/Chemistry/web/resources/chem_u1/chemistry-unit1-eps3.mp4"
        },
        {
            "id": "g9cu1v3",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "4",
            "title": "Discovery of the nucleus part 1",
            "vurl": ".grade9/Chemistry/web/resources/chem_u1/chemistry-unit1-eps4.mp4"
        },
        {
            "id": "g9cu1v4",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "5",
            "title": "Discovery of the nucleus part 2",
            "vurl": ".grade9/Chemistry/web/resources/chem_u1/chemistry-unit1-eps5.mp4"
        },
        {
            "id": "g9cu1v5",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "9",
            "title": "Atomic model part 2",
            "vurl": ".grade9/Chemistry/web/resources/chem_u1/chemistry-unit1-eps9.mp4"
        },
        {
            "id": "g9cu1v6",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "10",
            "title": " Atomic model part 3",
            "vurl": ".grade9/Chemistry/web/resources/chem_u1/chemistry-unit1-eps10.mp4"
        },
        {
            "id": "g9cu1v7",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "14",
            "title": "Unit revision part 1",
            "vurl": ".grade9/Chemistry/web/resources/chem_u1/chemistry-unit1-eps14.mp4"
        },
        {
            "id": "g9cu1v8",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "15",
            "title": "Unit revision part 2",
            "vurl": ".grade9/Chemistry/web/resources/chem_u1/chemistry-unit1-eps15.mp4"
        },
        {
            "id": "g9cu1v9",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "13",
            "title": " Double displacement reactions",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps13.mp4"
        },
        {
            "id": "g9cu1v10",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "16",
            "title": "Volume-volume relationships",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps16.mp4"
        },
        {
            "id": "g9cu1v11",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "19",
            "title": " Limiting and excess reactants part1",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps19.mp4"
        },
        {
            "id": "g9cu1v12",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "21",
            "title": "Theoretical, actual and percentage yields",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps21.mp4"
        },
        {
            "id": "g9cu1v13",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "22",
            "title": " Oxidation and reduction",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps22.mp4"
        },
        {
            "id": "g9cu1v14",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "24",
            "title": " Oxidizing and reducing agents",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps24.mp4"
        },
        {
            "id": "g9cu1v15",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "26",
            "title": "Reaction rate part 1",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps26.mp4"
        },
        {
            "id": "g9cu1v16",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "27",
            "title": " Reaction rate part 2",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps27.mp4"
        },
        {
            "id": "g9cu1v17",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "28",
            "title": "Pre-conditions for a chemical reaction to occur",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps28.mp4"
        },
        {
            "id": "g9cu1v18",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "29",
            "title": "Factors affecting rate of chemical reaction part 1",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps29.mp4"
        },
        {
            "id": "g9cu1v19",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "30",
            "title": "Factors affecting rate of chemical reaction part 2",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps30.mp4"
        },
        {
            "id": "g9cu1v20",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "31",
            "title": " Factors affecting rate of chemical reaction part 3",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps31.mp4"
        },
        {
            "id": "g9cu1v21",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "32",
            "title": " Reversible and irreversible reactions and chemical equilibrium",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps32.mp4"
        },
        {
            "id": "g9cu1v22",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "34",
            "title": " Factors that affect chemical equilibrium part 1",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps34.mp4"
        },
        {
            "id": "g9cu1v23",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu1",
            "episode": "35",
            "title": "Factors that affect chemical equilibrium part 2",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps35.mp4"
        },
        {
            "id": "g9cu2v1",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu2",
            "episode": "6",
            "title": "Periodic properties within a group part 1",
            "vurl": ".grade9/Chemistry/web/resources/chem_u2/chemistry-unit2-eps6.mp4"
        },
        {
            "id": "g9cu2v2",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu2",
            "episode": "7",
            "title": " Periodic properties within a group part 2",
            "vurl": ".grade9/Chemistry/web/resources/chem_u2/chemistry-unit2-eps7.mp4"
        },
        {
            "id": "g9cu2v3",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu2",
            "episode": "8",
            "title": " Periodic properties within a group part 3",
            "vurl": ".grade9/Chemistry/web/resources/chem_u2/chemistry-unit2-eps8.mp4"
        },
        {
            "id": "g9cu2v4",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu2",
            "episode": "9",
            "title": " Periodic properties within a period part 1",
            "vurl": ".grade9/Chemistry/web/resources/chem_u2/chemistry-unit2-eps9.mp4"
        },
        {
            "id": "g9cu2v5",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu2",
            "episode": "10",
            "title": " Periodic properties within a period part 2",
            "vurl": ".grade9/Chemistry/web/resources/chem_u2/chemistry-unit2-eps10.mp4"
        },
        {
            "id": "g9cu3v1",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu2",
            "episode": "11",
            "title": " Periodic properties within a period part 3",
            "vurl": ".grade9/Chemistry/web/resources/chem_u2/chemistry-unit2-eps11.mp4"
        },
        {
            "id": "g9cu3v2",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu3",
            "episode": "1",
            "title": " introduction",
            "vurl": ".grade9/Chemistry/web/resources/chem_u3/chemistry-unit3-eps1.mp4"
        },
        {
            "id": "g9cu3v3",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu3",
            "episode": "2",
            "title": "Formation of ionic bonding",
            "vurl": ".grade9/Chemistry/web/resources/chem_u3/chemistry-unit3-eps2.mp4"
        },
        {
            "id": "g9cu3v4",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu3",
            "episode": "4",
            "title": "General properties of ionic compounds",
            "vurl": ".grade9/Chemistry/web/resources/chem_u3/chemistry-unit3-eps4.mp4"
        },
        {
            "id": "g9cu3v5",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu3",
            "episode": "5",
            "title": "Formation of covalent bonds",
            "vurl": ".grade9/Chemistry/web/resources/chem_u3/chemistry-unit3-eps5.mp4"
        },
        {
            "id": "g9cu3v6",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu3",
            "episode": "8",
            "title": " Polar and non-polar covalent molecules",
            "vurl": ".grade9/Chemistry/web/resources/chem_u3/chemistry-unit3-eps8.mp4"
        },
        {
            "id": "g9cu3v7",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu3",
            "episode": "9",
            "title": "Coordinate covalent bond (dative bond",
            "vurl": ".grade9/Chemistry/web/resources/chem_u3/chemistry-unit3-eps9.mp4"
        },
        {
            "id": "g9cu3v8",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu3",
            "episode": "10",
            "title": " General properties of covalent compounds",
            "vurl": ".grade9/Chemistry/web/resources/chem_u3/chemistry-unit3-eps10.mp4"
        },
        {
            "id": "g9cu3v9",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu3",
            "episode": "11",
            "title": " Metallic bonding",
            "vurl": ".grade9/Chemistry/web/resources/chem_u3/chemistry-unit3-eps11.mp4"
        },
        {
            "id": "g9cu3v10",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu3",
            "episode": "12",
            "title": "Hydrogen bonding",
            "vurl": ".grade9/Chemistry/web/resources/chem_u3/chemistry-unit3-eps12.mp4"
        },
        {
            "id": "g9cu3v11",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu3",
            "episode": "13",
            "title": " Van der waals force part 1",
            "vurl": ".grade9/Chemistry/web/resources/chem_u3/chemistry-unit3-eps13.mp4"
        },
        {
            "id": "g9cu3v12",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu3",
            "episode": "14",
            "title": "Van der waal force part 2 (dispersion force)",
            "vurl": ".grade9/Chemistry/web/resources/chem_u3/chemistry-unit3-eps14.mp4"
        },
        {
            "id": "g9cu4v1",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "1",
            "title": "introduction",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps1.mp4"
        },
        {
            "id": "g9cu4v2",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "2",
            "title": " The law of conservation of mass",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps2.mp4"
        },
        {
            "id": "g9cu4v3",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "3",
            "title": "The law of definite proportion and law of multiple proportion",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps3.mp4"
        },
        {
            "id": "g9cu4v4",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "8",
            "title": " Energy changes in chemical reactions part 2",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps8.mp4"
        },
        {
            "id": "g9cu4v5",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "9",
            "title": " Importance of chemical changes",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps9.mp4"
        },
        {
            "id": "g9cu4v6",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "10",
            "title": " Combination reaction",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps10.mp4"
        },
        {
            "id": "g9cu4v7",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "11",
            "title": "Decomposition reaction",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps11.mp4"
        },
        {
            "id": "g9cu4v8",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "12",
            "title": "Single displacement reactions",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps12.mp4"
        },
        {
            "id": "g9cu4v9",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "13",
            "title": "Double displacement reactions",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps13.mp4"
        },
        {
            "id": "g9cu4v10",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "16",
            "title": " Volume-volume relationships",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps16.mp4"
        },
        {
            "id": "g9cu4v11",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "19",
            "title": "Limiting and excess reactants part1",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps19.mp4"
        },
        {
            "id": "g9cu4v12",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "21",
            "title": "Theoretical, actual and percentage yields",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps21.mp4"
        },
        {
            "id": "g9cu4v13",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "22",
            "title": " Oxidation and reduction",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps22.mp4"
        },
        {
            "id": "g9cu4v14",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "24",
            "title": "Oxidizing and reducing agents",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps24.mp4"
        },
        {
            "id": "g9cu4v15",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "26",
            "title": "Reaction rate part 1",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps26.mp4"
        },
        {
            "id": "g9cu4v16",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "27",
            "title": " Reaction rate part 2",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps27.mp4"
        },
        {
            "id": "g9cu4v17",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "28",
            "title": " Pre-conditions for a chemical reaction to occur",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps28.mp4"
        },
        {
            "id": "g9cu4v18",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "29",
            "title": " Factors affecting rate of chemical reaction part 1",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps29.mp4"
        },
        {
            "id": "g9cu4v19",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "30",
            "title": " Factors affecting rate of chemical reaction part 2",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps30.mp4"
        },
        {
            "id": "g9cu4v20",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "31",
            "title": " Factors affecting rate of chemical reaction part 3",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps31.mp4"
        },
        {
            "id": "g9cu4v21",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "32",
            "title": "Reversible and irreversible reactions and chemical equilibrium",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps32.mp4"
        },
        {
            "id": "g9cu4v22",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "34",
            "title": "Factors that affect chemical equilibrium part 1",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps34.mp4"
        },
        {
            "id": "g9cu4v23",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu4",
            "episode": "35",
            "title": "Factors that affect chemical equilibrium part 2",
            "vurl": ".grade9/Chemistry/web/resources/chem_u4/chemistry-unit4-eps35.mp4"
        },
        {
            "id": "g9cu5v1",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu5",
            "episode": "1",
            "title": "introduction",
            "vurl": ".grade9/Chemistry/web/resources/chem_u5/chemistry-unit5-eps1.mp4"
        },
        {
            "id": "g9cu5v2",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu5",
            "episode": "2",
            "title": " Properties of matter",
            "vurl": ".grade9/Chemistry/web/resources/chem_u5/chemistry-unit5-eps2.mp4"
        },
        {
            "id": "g9cu5v3",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu5",
            "episode": "3",
            "title": " The gaseous state",
            "vurl": ".grade9/Chemistry/web/resources/chem_u5/chemistry-unit5-eps3.mp4"
        },
        {
            "id": "g9cu5v4",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu5",
            "episode": "5",
            "title": "Boyle’s law part 1",
            "vurl": ".grade9/Chemistry/web/resources/chem_u5/chemistry-unit5-eps5.mp4"
        },
        {
            "id": "g9cu5v5",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu5",
            "episode": "7",
            "title": "Charles’s law part 1",
            "vurl": ".grade9/Chemistry/web/resources/chem_u5/chemistry-unit5-eps7.mp4"
        },
        {
            "id": "g9cu5v6",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu5",
            "episode": "13",
            "title": " Graham’s law of diffusion part 1",
            "vurl": ".grade9/Chemistry/web/resources/chem_u5/chemistry-unit5-eps13.mp4"
        },
        {
            "id": "g9cu5v7",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu5",
            "episode": "15",
            "title": "The liquid state part 1",
            "vurl": ".grade9/Chemistry/web/resources/chem_u5/chemistry-unit5-eps15.mp4"
        },
        {
            "id": "g9cu5v8",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu5",
            "episode": "16",
            "title": "The liquid sate part 2",
            "vurl": ".grade9/Chemistry/web/resources/chem_u5/chemistry-unit5-eps16.mp4"
        },
        {
            "id": "g9cu5v9",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu5",
            "episode": "17",
            "title": "The solid state part 1",
            "vurl": ".grade9/Chemistry/web/resources/chem_u5/chemistry-unit5-eps17.mp4"
        },
        {
            "id": "g9cu5v10",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu5",
            "episode": "18",
            "title": "The solid state part 2",
            "vurl": ".grade9/Chemistry/web/resources/chem_u5/chemistry-unit5-eps18.mp4"
        },
        {
            "id": "g9cu5v11",
            "gid": "g9",
            "cid": "g9h",
            "uid": "g9cu5",
            "episode": "19",
            "title": "Phase changes",
            "vurl": ".grade9/Chemistry/web/resources/chem_u5/chemistry-unit5-eps19.mp4"
        },
        {
            "id": "g9mu1v1",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu1",
            "episode": "1",
            "title": "Revision on the set of Rational Numbers",
            "vurl": ".grade9/Maths/web/resources/math_u1/Math-unit1-Eps1.mp4"
        },
        {
            "id": "g9mu1v2",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu1",
            "episode": "4",
            "title": "Rational Numbers",
            "vurl": ".grade9/Maths/web/resources/math_u1/Math-unit1-Eps4.mp4"
        },
        {
            "id": "g9mu1v3",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu1",
            "episode": "7",
            "title": "Representation of Rational Numbers by Decimals",
            "vurl": ".grade9/Maths/web/resources/math_u1/Math-unit1-Eps7.mp4"
        },
        {
            "id": "g9mu1v4",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu1",
            "episode": "10",
            "title": "Irrational Numbers",
            "vurl": ".grade9/Maths/web/resources/math_u1/Math-unit1-Eps10.mp4"
        },
        {
            "id": "g9mu1v5",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu1",
            "episode": "11",
            "title": " Real Numbers",
            "vurl": ".grade9/Maths/web/resources/math_u1/Math-unit1-Eps11.mp4"
        },
        {
            "id": "g9mu1v6",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu1",
            "episode": "24",
            "title": "Limits of Accuracy",
            "vurl": ".grade9/Maths/web/resources/math_u1/Math-unit1-Eps24.mp4"
        },
        {
            "id": "g9mu1v7",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu1",
            "episode": "25",
            "title": "Limits of Accuracy Part II",
            "vurl": ".grade9/Maths/web/resources/math_u1/Math-Unit1-Eps25.mp4"
        },
        {
            "id": "g9mu1v8",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu1",
            "episode": "27",
            "title": "Scientific Notation Part I",
            "vurl": ".grade9/Maths/web/resources/math_u1/Math-unit1-Eps27.mp4"
        },
        {
            "id": "g9mu1v9",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu1",
            "episode": "31",
            "title": " Euclid's Division Algorithm",
            "vurl": ".grade9/Maths/web/resources/math_u1/Math-unit1-Eps31.mp4"
        },
        {
            "id": "g9mu2v1",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu2",
            "episode": "1",
            "title": " Equations Involving Exponents and Radicals",
            "vurl": ".grade9/Maths/web/resources/math_u2/Math-Unit2-Eps1.mp4"
        },
        {
            "id": "g9mu2v2",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu2",
            "episode": "4",
            "title": "System of linear Equations in Two Variables",
            "vurl": ".grade9/Maths/web/resources/math_u2/Math-Unit2-Eps4.mp4"
        },
        {
            "id": "g9mu2v3",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu2",
            "episode": "6",
            "title": "Systems of Linear Equations and Their solutions Part II",
            "vurl": ".grade9/Maths/web/resources/math_u2/Math-Unit2-Eps6.mp4"
        },
        {
            "id": "g9mu2v4",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu2",
            "episode": "12",
            "title": " Equations involving Absolute Value",
            "vurl": ".grade9/Maths/web/resources/math_u2/Math-Unit2-Eps12.mp4"
        },
        {
            "id": "g9mu2v5",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu2",
            "episode": "15",
            "title": "Quadratic Equation Part I",
            "vurl": ".grade9/Maths/web/resources/math_u2/Math-Unit2-Eps15.mp4"
        },
        {
            "id": "g9mu3v1",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu3",
            "episode": "3",
            "title": "The Notion of sets",
            "vurl": ".grade9/Maths/web/resources/math_u3/Math-Unit3-Eps3.mp4"
        },
        {
            "id": "g9mu3v2",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu3",
            "episode": "7",
            "title": " Representation of Rattional numbers by Decimals",
            "vurl": ".grade9/Maths/web/resources/math_u3/Math-Unit3-Eps7.mp4"
        },
        {
            "id": "g9mu3v3",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu3",
            "episode": "9",
            "title": "operatins on sets Part II",
            "vurl": ".grade9/Maths/web/resources/math_u3/Math-Unit3-Eps9.mp4"
        },
        {
            "id": "g9mu3v4",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu3",
            "episode": "11",
            "title": "operations on sets Part III",
            "vurl": ".grade9/Maths/web/resources/math_u3/Math-Unit3-Eps11.mp4"
        },
        {
            "id": "g9mu4v1",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu4",
            "episode": "1",
            "title": " Relations Part I",
            "vurl": ".grade9/Maths/web/resources/math_u4/Math-Unit4-Eps1.mp4"
        },
        {
            "id": "g9mu4v2",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu4",
            "episode": "5",
            "title": "Relations Part II",
            "vurl": ".grade9/Maths/web/resources/math_u4/Math-Unit4-Eps5.mp4"
        },
        {
            "id": "g9mu4v3",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu4",
            "episode": "8",
            "title": " Functions Part I",
            "vurl": ".grade9/Maths/web/resources/math_u4/Math-Unit4-Eps8.mp4"
        },
        {
            "id": "g9mu4v4",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu4",
            "episode": "10",
            "title": " Functions Part II",
            "vurl": ".grade9/Maths/web/resources/math_u4/Math-Unit4-Eps10.mp4"
        },
        {
            "id": "g9mu4v5",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu4",
            "episode": "14",
            "title": "Graphs functions Part I",
            "vurl": ".grade9/Maths/web/resources/math_u4/Math-Unit4-Eps14.mp4"
        },
        {
            "id": "g9mu4v6",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu4",
            "episode": "17",
            "title": "Graphs functions Part II",
            "vurl": ".grade9/Maths/web/resources/math_u4/Math-Unit4-Eps17.mp4"
        },
        {
            "id": "g9mu5v1",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu5",
            "episode": "1",
            "title": " Regular Polygons",
            "vurl": ".grade9/Maths/web/resources/math_u5/Math-unit5-Eps1.mp4"
        },
        {
            "id": "g9mu5v2",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu5",
            "episode": "6",
            "title": "Further on congruency and Similarity",
            "vurl": ".grade9/Maths/web/resources/math_u5/Math-unit5-Eps6.mp4"
        },
        {
            "id": "g9mu5v3",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu5",
            "episode": "8",
            "title": " Further on congruency and Similarity",
            "vurl": ".grade9/Maths/web/resources/math_u5/Math-unit5-Eps8.mp4"
        },
        {
            "id": "g9mu5v4",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu5",
            "episode": "10",
            "title": "Further on congruency and Similarity",
            "vurl": ".grade9/Maths/web/resources/math_u5/Math-unit5-Eps10.mp4"
        },
        {
            "id": "g9mu5v5",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu5",
            "episode": "12",
            "title": "Further on congruency and Similarity",
            "vurl": ".grade9/Maths/web/resources/math_u5/Math-unit5-Eps12.mp4"
        },
        {
            "id": "g9mu5v6",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu5",
            "episode": "13",
            "title": "Futther on Trigonometry",
            "vurl": ".grade9/Maths/web/resources/math_u5/Math-unit5-Eps13.mp4"
        },
        {
            "id": "g9mu5v7",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu5",
            "episode": "15",
            "title": " Furthing on Trigonometry",
            "vurl": ".grade9/Maths/web/resources/math_u5/Math-unit5-Eps15.mp4"
        },
        {
            "id": "g9mu5v8",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu5",
            "episode": "17",
            "title": "Trigonometric Values of angles from tables",
            "vurl": ".grade9/Maths/web/resources/math_u5/Math-unit5-Eps17.mp4"
        },
        {
            "id": "g9mu5v9",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu5",
            "episode": "19",
            "title": "Trigonometric values for obtuse angles",
            "vurl": ".grade9/Maths/web/resources/math_u5/Math-unit5-Eps19.mp4"
        },
        {
            "id": "g9mu5v10",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu5",
            "episode": "21",
            "title": " The symmetrical properties of circles",
            "vurl": ".grade9/Maths/web/resources/math_u5/Math-unit5-Eps21.mp4"
        },
        {
            "id": "g9mu5v11",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu5",
            "episode": "23",
            "title": " Angle properties of circles",
            "vurl": ".grade9/Maths/web/resources/math_u5/Math-unit5-Eps23.mp4"
        },
        {
            "id": "g9mu5v12",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu5",
            "episode": "25",
            "title": "areas of triangles and parallelograms",
            "vurl": ".grade9/Maths/web/resources/math_u5/Math-unit5-Eps25.mp4"
        },
        {
            "id": "g9mu5v13",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu5",
            "episode": "28",
            "title": " Prisms and cylinders",
            "vurl": ".grade9/Maths/web/resources/math_u5/Math-unit5-Eps28.mp4"
        },
        {
            "id": "g9mu6v1",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu6",
            "episode": "2",
            "title": " Collection and Tabulation of statical Data",
            "vurl": ".grade9/Maths/web/resources/math_u6/Math-Unit6-Eps2.mp4"
        },
        {
            "id": "g9mu6v2",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu6",
            "episode": "6",
            "title": " Probability Part I",
            "vurl": ".grade9/Maths/web/resources/math_u6/Math-Unit6-Eps6.mp4"
        },
        {
            "id": "g9mu6v3",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu6",
            "episode": "9",
            "title": "Mesures of location:Arithmetic Mean",
            "vurl": ".grade9/Maths/web/resources/math_u6/Math-Unit6-Eps9.mp4"
        },
        {
            "id": "g9mu6v4",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu6",
            "episode": "10",
            "title": " Measures of location:Media and Mode",
            "vurl": ".grade9/Maths/web/resources/math_u6/Math-Unit6-Eps10.mp4"
        },
        {
            "id": "g9mu6v5",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu6",
            "episode": "13",
            "title": " Measures of Dispersion for Ungrouped Data",
            "vurl": ".grade9/Maths/web/resources/math_u6/Math-Unit6-Eps13.mp4"
        },
        {
            "id": "g9mu6v6",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu6",
            "episode": "16",
            "title": "Probability Part I",
            "vurl": ".grade9/Maths/web/resources/math_u6/Math-Unit6-Eps16.mp4"
        },
        {
            "id": "g9mu6v7",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu6",
            "episode": "18",
            "title": "Probability Part II",
            "vurl": ".grade9/Maths/web/resources/math_u6/Math-Unit6-Eps18.mp4"
        },
        {
            "id": "g9mu6v8",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu6",
            "episode": "20",
            "title": "Probability Part III",
            "vurl": ".grade9/Maths/web/resources/math_u6/Math-Unit6-Eps20.mp4"
        },
        {
            "id": "g9mu7v1",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu7",
            "episode": "1",
            "title": " Vectors and Scalars",
            "vurl": ".grade9/Maths/web/resources/math_u7/Math-Unit7-Eps1.mp4"
        },
        {
            "id": "g9mu7v2",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu7",
            "episode": "3",
            "title": "Representation of a vector",
            "vurl": ".grade9/Maths/web/resources/math_u7/Math-Unit7-Eps3.mp4"
        },
        {
            "id": "g9mu7v3",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu7",
            "episode": "9",
            "title": " Addition and Subtraction of vectors",
            "vurl": ".grade9/Maths/web/resources/math_u7/Math-Unit7-Eps9.mp4"
        },
        {
            "id": "g9mu7v4",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu7",
            "episode": "10",
            "title": "Multiplication of a vector by a scalar",
            "vurl": ".grade9/Maths/web/resources/math_u7/Math-Unit7-Eps10.mp4"
        },
        {
            "id": "g9mu7v5",
            "gid": "g9",
            "cid": "g9m",
            "uid": "g9mu7",
            "episode": "11",
            "title": "Position Vector of a point",
            "vurl": ".grade9/Maths/web/resources/math_u7/Math-Unit7-Eps11.mp4"
        },
        {
            "id": "g9pu1v1",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu1",
            "episode": "1",
            "title": " Resolving Vectors in to Rectangular",
            "vurl": ".grade9/phy9/resources/phy_u1/phy-unit1-Eps1.mp4"
        },
        {
            "id": "g9pu1v2",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu1",
            "episode": "3",
            "title": "Addition and Subtraction of Two vectors",
            "vurl": ".grade9/phy9/resources/phy_u1/phy-unit1-Eps1.mp4"
        },
        {
            "id": "g9pu1v3",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu1",
            "episode": "8",
            "title": " First Condition of Equilibrium",
            "vurl": ".grade9/phy9/resources/phy_u1/phy-unit1-Eps8.mp4"
        },
        {
            "id": "g9pu2v1",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu2",
            "episode": "1",
            "title": " Uniform Motion",
            "vurl": ".grade9/phy9/resources/phy_u2/phy-unit2-Eps1.mp4"
        },
        {
            "id": "g9pu2v2",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu2",
            "episode": "4",
            "title": "Uniformly Accelerated Motion",
            "vurl": ".grade9/phy9/resources/phy_u2/phy-unit2-Eps4.mp4"
        },
        {
            "id": "g9pu2v3",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu2",
            "episode": "6",
            "title": "Graphical Description Uniformly",
            "vurl": ".grade9/phy9/resources/phy_u2/phy-unit2-Eps6.mp4"
        },
        {
            "id": "g9pu2v4",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu2",
            "episode": "10",
            "title": "Free Fall Motion",
            "vurl": ".grade9/phy9/resources/phy_u2/phy-unit2-Eps10.mp4"
        },
        {
            "id": "g9pu2v5",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu2",
            "episode": "11",
            "title": " Relative velocity in one Dimension",
            "vurl": ".grade9/phy9/resources/phy_u2/phy-unit2-Eps11.mp4"
        },
        {
            "id": "g9pu3v1",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu3",
            "episode": "2",
            "title": " Newton's First Law",
            "vurl": ".grade9/phy9/resources/phy_u3/phy-unit3-Eps2.mp4"
        },
        {
            "id": "g9pu3v2",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu3",
            "episode": "3",
            "title": "Hooke's Law",
            "vurl": ".grade9/phy9/resources/phy_u3/phy-unit3-Eps3.mp4"
        },
        {
            "id": "g9pu3v3",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu3",
            "episode": "4",
            "title": "Newton's Second Law Part I",
            "vurl": ".grade9/phy9/resources/phy_u3/phy-unit3-Eps4.mp4"
        },
        {
            "id": "g9pu3v4",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu3",
            "episode": "5",
            "title": "Newton's Second Law Part II",
            "vurl": ".grade9/phy9/resources/phy_u3/phy-unit3-Eps5.mp4"
        },
        {
            "id": "g9pu3v5",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu3",
            "episode": "9",
            "title": " Newton's third law | momentum and Impulse",
            "vurl": ".grade9/phy9/resources/phy_u3/phy-unit3-Eps9.mp4"
        },
        {
            "id": "g9pu3v6",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu3",
            "episode": "12",
            "title": "Conservation of Linear Momentum",
            "vurl": ".grade9/phy9/resources/phy_u3/phy-unit3-Eps12.mp4"
        },
        {
            "id": "g9pu3v7",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu3",
            "episode": "15",
            "title": " Collision",
            "vurl": ".grade9/phy9/resources/phy_u3/phy-unit3-Eps15.mp4"
        },
        {
            "id": "g9pu3v8",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu3",
            "episode": "17",
            "title": "The First condition of Equilibrium",
            "vurl": ".grade9/phy9/resources/phy_u3/phy-unit3-Eps17.mp4"
        },
        {
            "id": "g9pu4v1",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu4",
            "episode": "1",
            "title": "Mechanical Work",
            "vurl": ".grade9/phy9/resources/phy_u4/phy-unit4-Eps1.mp4"
        },
        {
            "id": "g9pu4v2",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu4",
            "episode": "6",
            "title": " Energy",
            "vurl": ".grade9/phy9/resources/phy_u4/phy-unit4-Eps6.mp4"
        },
        {
            "id": "g9pu4v3",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu4",
            "episode": "7",
            "title": "Conservation of Mechanical Energy",
            "vurl": ".grade9/phy9/resources/phy_u4/phy-unit4-Eps7.mp4"
        },
        {
            "id": "g9pu4v4",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu4",
            "episode": "11",
            "title": " Relative velocity in one Dimension",
            "vurl": ".grade9/phy9/resources/phy_u2/phy-unit2-Eps11.mp4"
        },
        {
            "id": "g9pu5v1",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu5",
            "episode": "1",
            "title": " Simple Machines Part I",
            "vurl": ".grade9/phy9/resources/phy_u5/phy-unit5-Eps1.mp4"
        },
        {
            "id": "g9pu5v2",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu5",
            "episode": "2",
            "title": "Simple Machines Part II",
            "vurl": ".grade9/phy9/resources/phy_u5/phy-unit5-Eps2.mp4"
        },
        {
            "id": "g9pu5v3",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu5",
            "episode": "3",
            "title": " Lever",
            "vurl": ".grade9/phy9/resources/phy_u5/phy-unit5-Eps3.mp4"
        },
        {
            "id": "g9pu5v4",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu5",
            "episode": "5",
            "title": " Pulleys",
            "vurl": ".grade9/phy9/resources/phy_u5/phy-unit5-Eps5.mp4"
        },
        {
            "id": "g9pu5v5",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu5",
            "episode": "7",
            "title": " Wheel and Axle",
            "vurl": ".grade9/phy9/resources/phy_u5/phy-unit5-Eps7.mp4"
        },
        {
            "id": "g9pu5v6",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu5",
            "episode": "8",
            "title": "Inclined Plane",
            "vurl": ".grade9/phy9/resources/phy_u5/phy-unit5-Eps8.mp4"
        },
        {
            "id": "g9pu5v7",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu5",
            "episode": "9",
            "title": "Wedge and Screws",
            "vurl": ".grade9/phy9/resources/phy_u5/phy-unit5-Eps9.mp4"
        },
        {
            "id": "g9pu5v8",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu5",
            "episode": "11",
            "title": "Compound Machines",
            "vurl": ".grade9/phy9/resources/phy_u5/phy-unit5-Eps11.mp4"
        },
        {
            "id": "g9pu6v1",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu6",
            "episode": "1",
            "title": " Pressure and Density",
            "vurl": ".grade9/phy9/resources/phy_u6/phy-unit6-Eps1.mp4"
        },
        {
            "id": "g9pu6v2",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu6",
            "episode": "3",
            "title": "Pressure Due to a Liquid at Rest",
            "vurl": ".grade9/phy9/resources/phy_u6/phy-unit6-Eps3.mp4"
        },
        {
            "id": "g9pu6v3",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu6",
            "episode": "5",
            "title": "Atmospheric Pressure",
            "vurl": ".grade9/phy9/resources/phy_u6/phy-unit6-Eps5.mp4"
        },
        {
            "id": "g9pu6v4",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu6",
            "episode": "7",
            "title": " Pascal's Principle",
            "vurl": ".grade9/phy9/resources/phy_u6/phy-unit6-Eps7.mp4"
        },
        {
            "id": "g9pu6v5",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu6",
            "episode": "9",
            "title": "Pressure due to gases in a container",
            "vurl": ".grade9/phy9/resources/phy_u6/phy-unit6-Eps9.mp4"
        },
        {
            "id": "g9pu6v6",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu6",
            "episode": "10",
            "title": "Archimedes' Principle",
            "vurl": ".grade9/phy9/resources/phy_u6/phy-unit6-Eps10.mp4"
        },
        {
            "id": "g9pu7v1",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu7",
            "episode": "1",
            "title": " Temperature and heat",
            "vurl": ".grade9/phy9/resources/phy_u7/phy-unit7-Eps1.mp4"
        },
        {
            "id": "g9pu7v2",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu7",
            "episode": "3",
            "title": "Therminal Expansion Part II",
            "vurl": ".grade9/phy9/resources/phy_u7/phy-unit7-Eps3.mp4"
        },
        {
            "id": "g9pu7v3",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu7",
            "episode": "6",
            "title": " Quantity of Heat Part I",
            "vurl": ".grade9/phy9/resources/phy_u7/phy-unit7-Eps6.mp4"
        },
        {
            "id": "g9pu7v4",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu7",
            "episode": "7",
            "title": " Quantity of Heat Part II",
            "vurl": ".grade9/phy9/resources/phy_u7/phy-unit7-Eps7.mp4"
        },
        {
            "id": "g9pu7v5",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu7",
            "episode": "10",
            "title": "Change of State",
            "vurl": ".grade9/phy9/resources/phy_u7/phy-unit7-Eps10.mp4"
        },
        {
            "id": "g9pu8v1",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu8",
            "episode": "1",
            "title": " Wave Propagation part I"
        },
        {
            "id": "g9pu8v2",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu8",
            "episode": "2",
            "title": " Wave prpagation part II",
            "vurl": ".grade9/phy9/resources/phy_u8/phy-unit8-Eps2.mp4"
        },
        {
            "id": "g9pu8v3",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu8",
            "episode": "5",
            "title": "Mechanical Waves",
            "vurl": ".grade9/phy9/resources/phy_u8/phy-unit8-Eps5.mp4"
        },
        {
            "id": "g9pu8v4",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu8",
            "episode": "6",
            "title": "Properties of Waves",
            "vurl": ".grade9/phy9/resources/phy_u8/phy-unit8-Eps6.mp4"
        },
        {
            "id": "g9pu8v5",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu8",
            "episode": "9",
            "title": " Sound Waves Part I",
            "vurl": ".grade9/phy9/resources/phy_u8/phy-unit8-Eps9.mp4"
        },
        {
            "id": "g9pu8v6",
            "gid": "g9",
            "cid": "g9p",
            "uid": "g9pu8",
            "episode": "10",
            "title": "Sound Waves Part II",
            "vurl": ".grade9/phy9/resources/phy_u8/phy-unit8-Eps13.mp4"
        },
        {
            "id": "g9eu1v1",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu1",
            "episode": "1",
            "title": " Liseting: Metting others",
            "vurl": ".grade9/English/resources/Eng_un1/Eng-unit1-Eps1.mp4"
        },
        {
            "id": "g9eu1v2",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu1",
            "episode": "5",
            "title": " speaking pronuncation practice",
            "vurl": ".grade9/English/resources/Eng_un1/Eng-unit1-Eps5.mp4"
        },
        {
            "id": "g9eu1v3",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu1",
            "episode": "7",
            "title": " Speaking Class Survey",
            "vurl": ".grade9/English/resources/Eng_un1/Eng-unit1-Eps7.mp4"
        },
        {
            "id": "g9eu1v4",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu1",
            "episode": "8",
            "title": " Reading Some Good Advice",
            "vurl": ".grade9/English/resources/Eng_un1/Eng-unit1-Eps8.mp4"
        },
        {
            "id": "g9eu1v5",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu1",
            "episode": "9",
            "title": "Writing write a letter",
            "vurl": ".grade9/English/resources/Eng_un1/Eng-unit1-Eps9.mp4"
        },
        {
            "id": "g9eu2v1",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu2",
            "episode": "12",
            "title": " Speaking Describing Places",
            "vurl": ".grade9/English/resources/Eng_un2/Eng-unit2-Eps12.mp4"
        },
        {
            "id": "g9eu2v2",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu2",
            "episode": "14",
            "title": " Listenig Debre Damo monstary",
            "vurl": ".grade9/English/resources/Eng_un2/Eng-unit2-Eps14.mp4"
        },
        {
            "id": "g9eu2v3",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu2",
            "episode": "15",
            "title": " Speaking Giving Direection",
            "vurl": ".grade9/English/resources/Eng_un2/Eng-unit2-Eps15.mp4"
        },
        {
            "id": "g9eu2v4",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu2",
            "episode": "19A",
            "title": " Reading The Semien Mountains",
            "vurl": ".grade9/English/resources/Eng_un2/Eng-unit2-Eps19.mp4"
        },
        {
            "id": "g9eu2v5",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu2",
            "episode": "19B",
            "title": " Writing Finding out About a Holiday",
            "vurl": ".grade9/English/resources/Eng_un2/Eng-unit2-Eps19B.mp4"
        },
        {
            "id": "g9eu3v1",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu3",
            "episode": "23",
            "title": " Listening my favourite free time activity",
            "vurl": ".grade9/English/resources/Eng_un3/Eng-unit3-Eps23.mp4"
        },
        {
            "id": "g9eu3v2",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu3",
            "episode": "26",
            "title": " Speaking What I like doing in my free time",
            "vurl": ".grade9/English/resources/Eng_un3/Eng-unit3-Eps26.mp4"
        },
        {
            "id": "g9eu3v3",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu3",
            "episode": "30",
            "title": "Reading an informal letter",
            "vurl": ".grade9/English/resources/Eng_un3/Eng-unit3-Eps30.mp4"
        },
        {
            "id": "g9eu3v4",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu3",
            "episode": "31",
            "title": " Writing what did you do last week",
            "vurl": ".grade9/English/resources/Eng_un3/Eng-unit3-Eps31.mp4"
        },
        {
            "id": "g9eu3v5",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu3",
            "episode": "32",
            "title": " Learing startegy a sucessful student",
            "vurl": ".grade9/English/resources/Eng_un3/Eng-unit3-Eps32.mp4"
        },
        {
            "id": "g9eu4v1",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu4",
            "episode": "36",
            "title": "Listening a talk about Nutrition",
            "vurl": ".grade9/English/resources/Eng_un4/Eng-unit4-Eps36.mp4"
        },
        {
            "id": "g9eu4v2",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu4",
            "episode": "37A",
            "title": "Speaking Healthy and unhealthy foods",
            "vurl": ".grade9/English/resources/Eng_un4/Eng-unit4-Eps37.mp4"
        },
        {
            "id": "g9eu4v3",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu4",
            "episode": "42",
            "title": "Learning Strategies Goods in the market",
            "vurl": ".grade9/English/resources/Eng_un4/Eng-unit4-Eps42.mp4"
        },
        {
            "id": "g9eu4v4",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu4",
            "episode": "44",
            "title": "Writing Punctuation",
            "vurl": ".grade9/English/resources/Eng_un4/Eng-unit4-Eps44.mp4"
        },
        {
            "id": "g9eu5v1",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu5",
            "episode": "46",
            "title": " Listening facts about HIV",
            "vurl": ".grade9/English/resources/Eng_un5/Eng-unit5-Eps46.mp4"
        },
        {
            "id": "g9eu5v2",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu5",
            "episode": "48",
            "title": "Speaking Express Sympathy",
            "vurl": ".grade9/English/resources/Eng_un5/Eng-unit5-Eps48.mp4"
        },
        {
            "id": "g9eu5v3",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu5",
            "episode": "53",
            "title": "writing Musn't,Don't have to,Shouldn't",
            "vurl": ".grade9/English/resources/Eng_un5/Eng-unit5-Eps53.mp4"
        },
        {
            "id": "g9eu5v4",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu5",
            "episode": "54A",
            "title": "Reading an HIV|AIDS Leaflet",
            "vurl": ".grade9/English/resources/Eng_un5/Eng-unit5-Eps54.mp4"
        },
        {
            "id": "g9eu5v5",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu5",
            "episode": "54B",
            "title": "Listening and Reading strategy Your Reading Goals",
            "vurl": ".grade9/English/resources/Eng_un5/Eng-unit5-Eps54B.mp4"
        },
        {
            "id": "g9eu6v1",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu6",
            "episode": "58A",
            "title": "Listening Famous People",
            "vurl": ".grade9/English/resources/Eng_un6/english-unit6-eps58.mp4"
        },
        {
            "id": "g9eu6v2",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu6",
            "episode": "58B",
            "title": "Speaking Describing of people",
            "vurl": ".grade9/English/resources/Eng_un6/Eng-Unit6-Eps58B.mp4"
        },
        {
            "id": "g9eu6v3",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu6",
            "episode": "58C",
            "title": "Writing Biographics",
            "vurl": ".grade9/English/resources/Eng_un6/Eng-Unit6-Eps58C.mp4"
        },
        {
            "id": "g9eu6v4",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu6",
            "episode": "60",
            "title": "Writing making a new program",
            "vurl": ".grade9/English/resources/Eng_un6/Eng-Unit6-Eps60.mp4"
        },
        {
            "id": "g9eu6v5",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu6",
            "episode": "63",
            "title": "Listening and reading Strategies write the opposite",
            "vurl": ".grade9/English/resources/Eng_un6/Eng-Unit6-Eps63.mp4"
        },
        {
            "id": "g9eu7v1",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu7",
            "episode": "70",
            "title": "Writing where I live",
            "vurl": ".grade9/English/resources/Eng_un7/Eng-Unit7-Eps70.mp4"
        },
        {
            "id": "g9eu7v2",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu7",
            "episode": "73A",
            "title": "Listening Living in Addis Abeba",
            "vurl": ".grade9/English/resources/Eng_un7/Eng-Unit7-Eps73A.mp4"
        },
        {
            "id": "g9eu7v3",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu7",
            "episode": "73B",
            "title": "Speaking Ehiopia Past and Present",
            "vurl": ".grade9/English/resources/Eng_un7/Eng-Unit7-Eps73B..mp4"
        },
        {
            "id": "g9eu7v4",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu7",
            "episode": "74",
            "title": " Language Force:Taking about the Future",
            "vurl": ".grade9/English/resources/Eng_un7/Eng-Unit7-Eps74.mp4"
        },
        {
            "id": "g9eu7v5",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu7",
            "episode": "75",
            "title": " Reading predict the ending",
            "vurl": ".grade9/English/resources/Eng_un7/Eng-Unit7-Eps75.mp4"
        },
        {
            "id": "g9eu7v6",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu7",
            "episode": "77",
            "title": " study skills learing new words",
            "vurl": ".grade9/English/resources/Eng_un7/Eng-Unit-Eps77.mp4"
        },
        {
            "id": "g9eu8v1",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu8",
            "episode": "79",
            "title": "Listening the Importance of money",
            "vurl": ".grade9/English/resources/Eng_un8/Eng-Unit8-Eps79.mp4"
        },
        {
            "id": "g9eu8v2",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu8",
            "episode": "82",
            "title": "Speaking Matching money",
            "vurl": ".grade9/English/resources/Eng_un8/Eng-Unit8-Eps82.mp4"
        },
        {
            "id": "g9eu8v3",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu8",
            "episode": "84B",
            "title": "writing Essay cnclusion",
            "vurl": ".grade9/English/resources/Eng_un8/Eng-Unit8-Eps84B.mp4"
        },
        {
            "id": "g9eu8v4",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu8",
            "episode": "85",
            "title": "Speaking winning the Lottery",
            "vurl": ".grade9/English/resources/Eng_un8/Eng-Unit8-Eps85.mp4"
        },
        {
            "id": "g9eu8v5",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu8",
            "episode": "87",
            "title": " Reading Three African Countries",
            "vurl": ".grade9/English/resources/Eng_un8/Eng-Unit8-Eps87.mp4"
        },
        {
            "id": "g9eu9v1",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu9",
            "episode": "90",
            "title": " listening Tradtional Dances around the world",
            "vurl": ".grade9/English/resources/Eng_un9/Eng-Unit9-Eps90.mp4"
        },
        {
            "id": "g9eu9v2",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu9",
            "episode": "93",
            "title": " Speaking Debate",
            "vurl": ".grade9/English/resources/Eng_un9/Eng-Unit9-Eps93.mp4"
        },
        {
            "id": "g9eu9v3",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu9",
            "episode": "97",
            "title": "Reading:SUsing an Encyclopaedia",
            "vurl": ".grade9/English/resources/Eng_un9/Eng-Unit9-Eps97.mp4"
        },
        {
            "id": "g9eu9v4",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu9",
            "episode": "98",
            "title": " Writing: Writing a Paragraph",
            "vurl": ".grade9/English/resources/Eng_un9/Eng-Unit9-Eps98.mp4"
        },
        {
            "id": "g9eu9v5",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu9",
            "episode": "99",
            "title": "Study skills: vocabulary strategies",
            "vurl": ".grade9/English/resources/Eng_un9/Eng-Unit9-Eps99.mp4"
        },
        {
            "id": "g9eu10v1",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu10",
            "episode": "102A",
            "title": " listening: a news story world",
            "vurl": ".grade9/English/resources/Eng_un10/Eng-Unit10-Eps102A.mp4"
        },
        {
            "id": "g9eu10v2",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu10",
            "episode": "103",
            "title": " speaking agreeing ,disagreeing and giving oppinion",
            "vurl": ".grade9/English/resources/Eng_un10/Eng-Unit10-Eps103.mp4"
        },
        {
            "id": "g9eu10v3",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu10",
            "episode": "109",
            "title": "Reading:the Haiti Earthquake",
            "vurl": ".grade9/English/resources/Eng_un10/Eng-Unit10-Eps109.mp4"
        },
        {
            "id": "g9eu10v4",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu10",
            "episode": "111A",
            "title": " Writing a letter to a newspaper",
            "vurl": ".grade9/English/resources/Eng_un10/Eng-Unit10-Eps111A.mp4"
        },
        {
            "id": "g9eu10v5",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu10",
            "episode": "111B",
            "title": "study skills using a dictionary",
            "vurl": ".grade9/English/resources/Eng_un10/Eng-Unir10-Eps111B.mp4"
        },
        {
            "id": "g9eu11v1",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu11",
            "episode": "113",
            "title": "Listening: which Animal is Being Described",
            "vurl": ".grade9/English/resources/Eng_un11/Eng-Unit11-Eps113.mp4"
        },
        {
            "id": "g9eu11v2",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu11",
            "episode": "114",
            "title": "Speaking talking about animals",
            "vurl": ".grade9/English/resources/Eng_un11/Eng-Unit11-Eps114.mp4"
        },
        {
            "id": "g9eu11v3",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu11",
            "episode": "116",
            "title": "Reading the world in danger",
            "vurl": ".grade9/English/resources/Eng_un11/Eng-Unit11-Eps116.mp4"
        },
        {
            "id": "g9eu11v4",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu11",
            "episode": "119",
            "title": " Writing an endagered animal",
            "vurl": ".grade9/English/resources/Eng_un11/Eng-Unit11-Eps119.mp4"
        },
        {
            "id": "g9eu11v5",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu11",
            "episode": "121",
            "title": "Study Skills How well Do you write?",
            "vurl": ".grade9/English/resources/Eng_un11/Eng-Unit11-Eps121.mp4"
        },
        {
            "id": "g9eu12v1",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu12",
            "episode": "123",
            "title": " Lisening an orphan's story",
            "vurl": ".grade9/English/resources/Eng_un12/Eng-Unit12-Eps123.mp4"
        },
        {
            "id": "g9eu12v2",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu12",
            "episode": "126",
            "title": "speaking pronunciation",
            "vurl": ".grade9/English/resources/Eng_un12/Eng-Unit12-Eps126.mp4"
        },
        {
            "id": "g9eu12v3",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu12",
            "episode": "130",
            "title": "Reading:Support the development of people in special Needs",
            "vurl": ".grade9/English/resources/Eng_un12/Eng-Unit12-Eps130.mp4"
        },
        {
            "id": "g9eu12v4",
            "gid": "g9",
            "cid": "g9e",
            "uid": "g9eu12",
            "episode": "132",
            "title": " Writing:Structuring a Paragraph",
            "vurl": ".grade9/English/resources/Eng_un12/Eng-Unit12-Eps132.mp4"
        },
        {
            "id": "g9gu1v1",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu1",
            "episode": "2",
            "title": " The meanings of maps",
            "vurl": ".grade9/geography/resources/geo_un1/geo-unit1-eps2.mp4"
        },
        {
            "id": "g9gu1v2",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu1",
            "episode": "3",
            "title": "Uses and classifications of maps",
            "vurl": ".grade9/geography/resources/geo_un1/geo-unit1-eps3.mp4"
        },
        {
            "id": "g9gu1v3",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu1",
            "episode": "4",
            "title": " Marginal information on maps",
            "vurl": ".grade9/geography/resources/geo_un1/geo-unit1-eps4.mp4"
        },
        {
            "id": "g9gu1v4",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu1",
            "episode": "6",
            "title": " Statistical diagrams",
            "vurl": ".grade9/geography/resources/geo_un1/geo-unit1-eps6.mp4"
        },
        {
            "id": "g9gu2v1",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu2",
            "episode": "1",
            "title": "Forces that change the surface of the earth internal forces part 1",
            "vurl": ".grade9/geography/resources/geo_un2/geo-unit2-eps1.mp4"
        },
        {
            "id": "g9gu2v2",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu2",
            "episode": "1",
            "title": "Forces that change the surface of the earth internal forces part 2",
            "vurl": ".grade9/geography/resources/geo_un2/geo-unit2-eps1-part2.mp4"
        },
        {
            "id": "g9gu2v3",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu2",
            "episode": "2",
            "title": "Forces that change the surface of the earth external forces part 2",
            "vurl": ".grade9/geography/resources/geo_un2/geo-unit2-eps2.mp4"
        },
        {
            "id": "g9gu2v4",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu2",
            "episode": "3",
            "title": " Earth and atmosphere",
            "vurl": ".grade9/geography/resources/geo_un2/geo-unit2-eps3.mp4"
        },
        {
            "id": "g9gu2v5",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu2",
            "episode": "4",
            "title": "Meaning of weather and climate part 2",
            "vurl": ".grade9/geography/resources/geo_un2/geo-unit2-eps4-part2.mp4"
        },
        {
            "id": "g9gu2v6",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu2",
            "episode": "8",
            "title": "Tropical (hot) zone",
            "vurl": ".grade9/geography/resources/geo_un2/geo-unit2-eps8.mp4"
        },
        {
            "id": "g9gu2v7",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu2",
            "episode": "9",
            "title": " Temperate zone",
            "vurl": ".grade9/geography/resources/geo_un2/geo-unit2-eps9.mp4"
        },
        {
            "id": "g9gu2v8",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu2",
            "episode": "10",
            "title": "Frigid (cold) zone",
            "vurl": ".grade9/geography/resources/geo_un2/geo-unit2-eps10.mp4"
        },
        {
            "id": "g9gu2v9",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu2",
            "episode": "11",
            "title": "ecosystem",
            "vurl": ".grade9/geography/resources/geo_un2/geo-unit2-eps11.mp4"
        },
        {
            "id": "g9gu3v1",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu3",
            "episode": "1",
            "title": " Concept and fact about human population",
            "vurl": ".grade9/geography/resources/geo_un3/geo-unit3-eps1.mp4"
        },
        {
            "id": "g9gu3v2",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu3",
            "episode": "2",
            "title": " Classification of economic activates",
            "vurl": ".grade9/geography/resources/geo_un3/geo-unit3-eps2.mp4"
        },
        {
            "id": "g9gu3v3",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu3",
            "episode": "3",
            "title": "Land use",
            "vurl": ".grade9/geography/resources/geo_un3/geo-unit3-eps3.mp4"
        },
        {
            "id": "g9gu3v4",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu3",
            "episode": "4",
            "title": "Natural resources",
            "vurl": ".grade9/geography/resources/geo_un3/geo-unit3-eps4.mp4"
        },
        {
            "id": "g9gu4v1",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu4",
            "episode": "1",
            "title": " HIV/AIDS",
            "vurl": ".grade9/geography/resources/geo_un4/geo-unit4-eps1.mp4"
        },
        {
            "id": "g9gu4v2",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu4",
            "episode": "2",
            "title": "Environmental policy",
            "vurl": ".grade9/geography/resources/geo_un4/geo-unit4-eps2.mp4"
        },
        {
            "id": "g9gu4v3",
            "gid": "g9",
            "cid": "g9g",
            "uid": "g9gu4",
            "episode": "3",
            "title": " Economic policy",
            "vurl": ".grade9/geography/resources/geo_un4/geo-unit4-eps3.mp4"
        },
        {
            "id": "g9ciu1v1",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu1",
            "episode": "1",
            "title": " Democracy and the democratic system",
            "vurl": ".grade9/civics/resources/civ_un1/civic-unit1-eps1.mp4"
        },
        {
            "id": "g9ciu1v2",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu1",
            "episode": "2",
            "title": "rights",
            "vurl": ".grade9/civics/resources/civ_un1/civic-unit1-eps2.mp4"
        },
        {
            "id": "g9ciu1v3",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu1",
            "episode": "3",
            "title": " obligations",
            "vurl": ".grade9/civics/resources/civ_un1/civic-unit1-eps3.mp4"
        },
        {
            "id": "g9ciu1v4",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu1",
            "episode": "4",
            "title": " Tolerance of diversity",
            "vurl": ".grade9/civics/resources/civ_un1/civic-unit1-eps4.mp4"
        },
        {
            "id": "g9ciu1v5",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu1",
            "episode": "6",
            "title": "Systems if governments part1s",
            "vurl": ".grade9/civics/resources/civ_un1/civic-unit1-eps6.mp4"
        },
        {
            "id": "g9ciu1v6",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu1",
            "episode": "7",
            "title": "Systems if governments part2",
            "vurl": ".grade9/civics/resources/civ_un1/civic-unit1-eps7.mp4"
        },
        {
            "id": "g9ciu1v7",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu1",
            "episode": "10",
            "title": "Limits of power part2",
            "vurl": ".grade9/civics/resources/civ_un1/civic-unit1-eps10.mp4"
        },
        {
            "id": "g9ciu1v8",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu1",
            "episode": "11",
            "title": "Ethiopia's foreign relations part1",
            "vurl": ".grade9/civics/resources/civ_un1/civic-unit1-eps11.mp4"
        },
        {
            "id": "g9ciu1v9",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu1",
            "episode": "12",
            "title": "Ethiopia's foreign relations part2",
            "vurl": ".grade9/civics/resources/civ_un1/civic-unit1-eps12.mp4"
        },
        {
            "id": "g9ciu2v1",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu2",
            "episode": "1",
            "title": " Constitution part1",
            "vurl": ".grade9/civics/resources/civ_un2/civic-unit2-eps1.mp4"
        },
        {
            "id": "g9ciu2v2",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu2",
            "episode": "2",
            "title": " Constitution part2",
            "vurl": ".grade9/civics/resources/civ_un2/civic-unit2-eps2.mp4"
        },
        {
            "id": "g9ciu2v3",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu2",
            "episode": "4",
            "title": " Rule of law",
            "vurl": ".grade9/civics/resources/civ_un2/civic-unit2-eps4.mp4"
        },
        {
            "id": "g9ciu2v4",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu2",
            "episode": "7",
            "title": "Power of governments",
            "vurl": ".grade9/civics/resources/civ_un2/civic-unit2-eps7.mp4"
        },
        {
            "id": "g9ciu3v1",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu3",
            "episode": "1",
            "title": "What does equality mean?",
            "vurl": ".grade9/civics/resources/civ_un3/civic-unit3-eps1.mp4"
        },
        {
            "id": "g9ciu3v2",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu3",
            "episode": "3",
            "title": "Equality of citizens in the Ethiopian constitution",
            "vurl": ".grade9/civics/resources/civ_un3/civic-unit3-eps3.mp4"
        },
        {
            "id": "g9ciu3v3",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu3",
            "episode": "6",
            "title": "Gender Equality",
            "vurl": ".grade9/civics/resources/civ_un3/civic-unit3-eps6.mp4"
        },
        {
            "id": "g9ciu3v4",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu3",
            "episode": "7",
            "title": "Equality with in diversity",
            "vurl": ".grade9/civics/resources/civ_un3/civic-unit3-eps7.mp4"
        },
        {
            "id": "g9ciu4v1",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu4",
            "episode": "1",
            "title": "Justice and equity",
            "vurl": ".grade9/civics/resources/civ_un4/civic-unit4-eps1.mp4"
        },
        {
            "id": "g9ciu4v2",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu4",
            "episode": "4",
            "title": " Struggling against injustice",
            "vurl": ".grade9/civics/resources/civ_un4/civic-unit4-eps4.mp4"
        },
        {
            "id": "g9ciu4v3",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu4",
            "episode": "6",
            "title": " Struggling against injustice",
            "vurl": ".grade9/civics/resources/civ_un4/civic-unit4-eps6.mp4"
        },
        {
            "id": "g9ciu4v4",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu4",
            "episode": "8",
            "title": "The justice system part3",
            "vurl": ".grade9/civics/resources/civ_un4/civic-unit4-eps8.mp4"
        },
        {
            "id": "g9ciu4v5",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu4",
            "episode": "10",
            "title": "The justice system part5",
            "vurl": ".grade9/civics/resources/civ_un4/civic-unit4-eps10.mp4"
        },
        {
            "id": "g9ciu5v1",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu5",
            "episode": "1",
            "title": "Citizenship and patriotism par1",
            "vurl": ".grade9/civics/resources/civ_un5/civic-unit5-eps1.mp4"
        },
        {
            "id": "g9ciu5v2",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu5",
            "episode": "2",
            "title": "Citizenship and patriotism par2",
            "vurl": ".grade9/civics/resources/civ_un5/civic-unit5-eps2.mp4"
        },
        {
            "id": "g9ciu5v3",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu5",
            "episode": "3",
            "title": "Citizenship and patriotism par3",
            "vurl": ".grade9/civics/resources/civ_un5/civic-unit5-eps3.mp4"
        },
        {
            "id": "g9ciu5v4",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu5",
            "episode": "5",
            "title": " The necessity of objectivity in Ethiopian history",
            "vurl": ".grade9/civics/resources/civ_un5/civic-unit5-eps5.mp4"
        },
        {
            "id": "g9ciu5v5",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu5",
            "episode": "6",
            "title": " The duties of a patriot",
            "vurl": ".grade9/civics/resources/civ_un5/civic-unit5-eps6.mp4"
        },
        {
            "id": "g9ciu5v6",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu5",
            "episode": "9",
            "title": "The roles of patriots in reversing backwardness and poverty",
            "vurl": ".grade9/civics/resources/civ_un5/civic-unit5-eps9.mp4"
        },
        {
            "id": "g9ciu5v7",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu5",
            "episode": "10",
            "title": "poverty",
            "vurl": ".grade9/civics/resources/civ_un5/civic-unit5-eps10.mp4"
        },
        {
            "id": "g9ciu6v1",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu6",
            "episode": "1",
            "title": "What is responsibility",
            "vurl": ".grade9/civics/resources/civ_un6/civic-unit6-eps1.mp4"
        },
        {
            "id": "g9ciu6v2",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu6",
            "episode": "2",
            "title": "Sources of responsibility",
            "vurl": ".grade9/civics/resources/civ_un6/civic-unit6-eps2.mp4"
        },
        {
            "id": "g9ciu6v3",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu6",
            "episode": "4",
            "title": "Personal, social and constitutional responsibilities",
            "vurl": ".grade9/civics/resources/civ_un6/civic-unit6-eps4.mp4"
        },
        {
            "id": "g9ciu6v4",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu6",
            "episode": "5",
            "title": " Social and constitutional responsibilities",
            "vurl": ".grade9/civics/resources/civ_un6/civic-unit6-eps5.mp4"
        },
        {
            "id": "g9ciu6v5",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu6",
            "episode": "7",
            "title": " Natural resources and historical and cultural heritage",
            "vurl": ".grade9/civics/resources/civ_un6/civic-unit6-eps7.mp4"
        },
        {
            "id": "g9ciu7v1",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu7",
            "episode": "2",
            "title": "The significance of work",
            "vurl": ".grade9/civics/resources/civ_un7/civic-unit7-eps2.mp4"
        },
        {
            "id": "g9ciu7v2",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu7",
            "episode": "3",
            "title": "Economic systems",
            "vurl": ".grade9/civics/resources/civ_un7/civic-unit7-eps3.mp4"
        },
        {
            "id": "g9ciu7v3",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu7",
            "episode": "4",
            "title": "Work ethics",
            "vurl": ".grade9/civics/resources/civ_un7/civic-unit7-eps4.mp4"
        },
        {
            "id": "g9ciu8v1",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu8",
            "episode": "1",
            "title": "Self- reliance",
            "vurl": ".grade9/civics/resources/civ_un8/civic-unit8-eps1.mp4"
        },
        {
            "id": "g9ciu8v2",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu8",
            "episode": "2",
            "title": "dependency",
            "vurl": ".grade9/civics/resources/civ_un8/civic-unit8-eps2.mp4"
        },
        {
            "id": "g9ciu8v3",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu8",
            "episode": "4",
            "title": " Decision-making",
            "vurl": ".grade9/civics/resources/civ_un8/civic-unit8-eps4.mp4"
        },
        {
            "id": "g9ciu9v1",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu9",
            "episode": "2",
            "title": "Planning and saving",
            "vurl": ".grade9/civics/resources/civ_un9/civic-unit9-eps2.mp4"
        },
        {
            "id": "g9ciu9v2",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu9",
            "episode": "3",
            "title": "Proper use of public utility",
            "vurl": ".grade9/civics/resources/civ_un9/civic-unit9-eps3.mp4"
        },
        {
            "id": "g9ciu9v3",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu9",
            "episode": "5",
            "title": "Money as a source of wealth",
            "vurl": ".grade9/civics/resources/civ_un9/civic-unit9-eps5.mp4"
        },
        {
            "id": "g9ciu9v4",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu9",
            "episode": "6",
            "title": "Wealth accumulation",
            "vurl": ".grade9/civics/resources/civ_un9/civic-unit9-eps6.mp4"
        },
        {
            "id": "g9ciu10v1",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu10",
            "episode": "1",
            "title": "What is active community participation?",
            "vurl": ".grade9/civics/resources/civ_un10/civic-unit10-eps1.mp4"
        },
        {
            "id": "g9ciu10v2",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu10",
            "episode": "2",
            "title": "Social participation",
            "vurl": ".grade9/civics/resources/civ_un10/civic-unit10-eps2.mp4"
        },
        {
            "id": "g9ciu10v3",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu10",
            "episode": "4",
            "title": " The role of civic societies in community participation",
            "vurl": ".grade9/civics/resources/civ_un10/civic-unit10-eps4.mp4"
        },
        {
            "id": "g9ciu11v1",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu11",
            "episode": "1",
            "title": "The basis of knowledge and wisdom",
            "vurl": ".grade9/civics/resources/civ_un11/civic-unit11-eps1.mp4"
        },
        {
            "id": "g9ciu11v2",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu11",
            "episode": "2",
            "title": " Why do we need knowledge?",
            "vurl": ".grade9/civics/resources/civ_un11/civic-unit11-eps2.mp4"
        },
        {
            "id": "g9ciu11v3",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu11",
            "episode": "4",
            "title": "Information and data part1",
            "vurl": ".grade9/civics/resources/civ_un11/civic-unit11-eps4.mp4"
        },
        {
            "id": "g9ciu11v4",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu11",
            "episode": "5",
            "title": " Information and data part2",
            "vurl": ".grade9/civics/resources/civ_un11/civic-unit11-eps5.mp4"
        },
        {
            "id": "g9ciu11v5",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu11",
            "episode": "7",
            "title": "Reading and studying",
            "vurl": ".grade9/civics/resources/civ_un11/civic-unit11-eps7.mp4"
        },
        {
            "id": "g9ciu11v6",
            "gid": "g9",
            "cid": "g9ci",
            "uid": "g9ciu11",
            "episode": "8",
            "title": "The pursuit of truth",
            "vurl": ".grade9/civics/resources/civ_un11/civic-unit11-eps8.mp4"
        },
        {
            "id": "g9au4v1",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au4",
            "episode": "1",
            "title": "ንባብ",
            "vurl": ".grade9/Amharic/web/resources/un4/Amharic_.grade9_unit4_eps1.mp4"
        },
        {
            "id": "g9au4v2",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au4",
            "episode": "3",
            "title": "ንግግር",
            "vurl": ".grade9/Amharic/web/resources/un4/Amharic_.grade9_unit4_eps3.mp4"
        },
        {
            "id": "g9au4v3",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au4",
            "episode": "7",
            "title": "ስነ ጽሑፍ አጭር ልቦለድ(ትምህርት ፩)",
            "vurl": ".grade9/Amharic/web/resources/un4/Amharic_.grade9_unit4_eps7.mp4"
        },
        {
            "id": "g9au4v4",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au4",
            "episode": "8",
            "title": "ስነ ጽሑፍ አጭር ልቦለድ(ትምህርት ፪)",
            "vurl": ".grade9/Amharic/web/resources/un4/Amharic_.grade9_unit4_eps8.mp4"
        },
        {
            "id": "g9au5v1",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au5",
            "episode": "1",
            "title": "ንባብ",
            "vurl": ".grade9/Amharic/web/resources/un5/Amharic_.grade9_unit5_eps1.mp4"
        },
        {
            "id": "g9au5v2",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au5",
            "episode": "3",
            "title": "ሰዋሰው፣ የዓረፍተነገር ክፍሎች",
            "vurl": ".grade9/Amharic/web/resources/un5/Amharic_.grade9_unit5_eps3.mp4"
        },
        {
            "id": "g9au5v3",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au5",
            "episode": "4",
            "title": "ስነ-ጽሑፍ (ክፍለ ትምህርት-፩)",
            "vurl": ".grade9/Amharic/web/resources/un5/Amharic_.grade9_unit5_eps4.mp4"
        },
        {
            "id": "g9au5v4",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au5",
            "episode": "5",
            "title": "ስነ-ጽሑፍ (ክፍለ ትምህርት-፪)",
            "vurl": ".grade9/Amharic/web/resources/un5/Amharic_.grade9_unit5_eps5.mp4"
        },
        {
            "id": "g9au6v1",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au6",
            "episode": "1",
            "title": "ንባብ",
            "vurl": ".grade9/Amharic/web/resources/un6/Amharic_.grade9_unit6_eps1.mp4"
        },
        {
            "id": "g9au6v2",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au6",
            "episode": "2",
            "title": "ንግግር፣ የተውኔት አላባውያን",
            "vurl": ".grade9/Amharic/web/resources/un6/Amharic_.grade9_unit6_eps2.mp4"
        },
        {
            "id": "g9au6v3",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au6",
            "episode": "4",
            "title": "ጽሕፈት (የደብዳቤ አጻጻፍ ክፍለ ትምህርት-፪)",
            "vurl": ".grade9/Amharic/web/resources/un6/Amharic_.grade9_unit6_eps4.mp4"
        },
        {
            "id": "g9au6v4",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au6",
            "episode": "5",
            "title": "ሰዋሰው",
            "vurl": ".grade9/Amharic/web/resources/un6/Amharic_.grade9_unit6_eps5.mp4"
        },
        {
            "id": "g9au6v5",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au6",
            "episode": "6",
            "title": "ስነ-ጽሑፍ",
            "vurl": ".grade9/Amharic/web/resources/un6/Amharic_.grade9_unit6_eps6.mp4"
        },
        {
            "id": "g9au7v1",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au7",
            "episode": "2",
            "title": "ጽሕፈት",
            "vurl": ".grade9/Amharic/web/resources/un7/Amharic_.grade9_unit7_eps2.mp4"
        },
        {
            "id": "g9au7v2",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au7",
            "episode": "4",
            "title": "ሰዋሰው",
            "vurl": ".grade9/Amharic/web/resources/un7/Amharic_.grade9_unit7_eps4.mp4"
        },
        {
            "id": "g9au7v3",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au7",
            "episode": "5",
            "title": "ስነ-ጽሑፍ፣ምሳሌያዊ ንግግርው",
            "vurl": ".grade9/Amharic/web/resources/un7/Amharic_.grade9_unit7_eps5.mp4"
        },
        {
            "id": "g9au8v1",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au8",
            "episode": "1",
            "title": "ንባብ",
            "vurl": ".grade9/Amharic/web/resources/un8/Amharic_.grade9_unit8_eps1.mp4"
        },
        {
            "id": "g9au8v2",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au8",
            "episode": "4",
            "title": "ስነ-ጽሑፍ",
            "vurl": ".grade9/Amharic/web/resources/un8/Amharic_.grade9_unit8_eps4.mp4"
        },
        {
            "id": "g9au9v1",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au9",
            "episode": "2",
            "title": "ንግግር",
            "vurl": ".grade9/Amharic/web/resources/un9/Amharic_.grade9_unit9_eps2.mp4"
        },
        {
            "id": "g9au9v2",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au9",
            "episode": "5",
            "title": "ስነ-ጽሑፍ",
            "vurl": ".grade9/Amharic/web/resources/un9/Amharic_.grade9_unit9_eps5.mp4"
        },
        {
            "id": "g9au10v1",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au10",
            "episode": "1",
            "title": "ንባብ",
            "vurl": ".grade9/Amharic/web/resources/un10/Amharic_.grade9_unit10_eps1.mp4"
        },
        {
            "id": "g9au10v2",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au10",
            "episode": "3",
            "title": "ንግግር",
            "vurl": ".grade9/Amharic/web/resources/un10/Amharic_.grade9_unit10_eps3.mp4"
        },
        {
            "id": "g9au10v3",
            "gid": "g9",
            "cid": "g9a",
            "uid": "g9au10",
            "episode": "4",
            "title": "ሰዋሰው",
            "vurl": ".grade9/Amharic/web/resources/un10/Amharic_.grade9_unit10_eps4.mp4"
        },
        {
            "id": "g10bu1v1",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu1",
            "episode": "1",
            "title": "Biotechnology part I",
            "vurl": ".grade10/biology_gr10/resources/bio_un1/biology-unit1-eps1.mp4"
        },
        {
            "id": "g10bu1v2",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu1",
            "episode": "2",
            "title": "Traditional applications of biotechnology part I",
            "vurl": ".grade10/biology_gr10/resources/bio_un1/biology-unit1-eps2.mp4"
        },
        {
            "id": "g10bu1v3",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu1",
            "episode": "3",
            "title": "Traditional applications of biotechnology part II",
            "vurl": ".grade10/biology_gr10/resources/bio_un1/biology-unit1-eps3.mp4"
        },
        {
            "id": "g10bu1v4",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu1",
            "episode": "4",
            "title": "New applications of biotechnology part I",
            "vurl": ".grade10/biology_gr10/resources/bio_un1/biology-unit1-eps4.mp4"
        },
        {
            "id": "g10bu1v5",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu1",
            "episode": "5",
            "title": "New applications of biotechnology part II",
            "vurl": ".grade10/biology_gr10/resources/bio_un1/biology-unit1-eps5.mp4"
        },
        {
            "id": "g10bu1v6",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu1",
            "episode": "6",
            "title": "New applications of biotechnology part III",
            "vurl": ".grade10/biology_gr10/resources/bio_un1/biology-unit1-eps6.mp4"
        },
        {
            "id": "g10bu2v1",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu2",
            "episode": "1",
            "title": "Cell divisions mitosis part I",
            "vurl": ".grade10/biology_gr10/resources/bio_un2/biology-unit2-eps1.mp4"
        },
        {
            "id": "g10bu2v2",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu2",
            "episode": "2",
            "title": "Cell divisions mitosis part II",
            "vurl": ".grade10/biology_gr10/resources/bio_un2/biology-unit2-eps2.mp4"
        },
        {
            "id": "g10bu2v3",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu2",
            "episode": "3",
            "title": "Cell divisions comparison of mitosis and meiosis part III",
            "vurl": ".grade10/biology_gr10/resources/bio_un2/biology-unit2-eps3.mp4"
        },
        {
            "id": "g10bu2v4",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu2",
            "episode": "4",
            "title": "Cell divisions gametes part IV",
            "vurl": ".grade10/biology_gr10/resources/bio_un2/biology-unit2-eps4.mp4"
        },
        {
            "id": "g10bu2v5",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu2",
            "episode": "5",
            "title": "Mendelian inheritance",
            "vurl": ".grade10/biology_gr10/resources/bio_un2/biology-unit2-eps5.mp4"
        },
        {
            "id": "g10bu2v6",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu2",
            "episode": "6",
            "title": "Mendel’s experiment part I",
            "vurl": ".grade10/biology_gr10/resources/bio_un2/biology-unit2-eps6.mp4"
        },
        {
            "id": "g10bu2v7",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu2",
            "episode": "7",
            "title": "Mendel’s experiment part II",
            "vurl": ".grade10/biology_gr10/resources/bio_un2/biology-unit2-eps7.mp4"
        },
        {
            "id": "g10bu2v8",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu2",
            "episode": "9",
            "title": "Chromosomes",
            "vurl": ".grade10/biology_gr10/resources/bio_un2/biology-unit2-eps9.mp4"
        },
        {
            "id": "g10bu2v9",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu2",
            "episode": "10",
            "title": "DNA",
            "vurl": ".grade10/biology_gr10/resources/bio_un2/biology-unit2-eps10.mp4"
        },
        {
            "id": "g10bu2v10",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu2",
            "episode": "11",
            "title": "Breeding",
            "vurl": ".grade10/biology_gr10/resources/bio_un2/biology-unit2-eps11.mp4"
        },
        {
            "id": "g10bu2v11",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu2",
            "episode": "12",
            "title": " Advantages of breeding",
            "vurl": ".grade10/biology_gr10/resources/bio_un2/biology-unit2-eps12.mp4"
        },
        {
            "id": "g10bu3v1",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "1",
            "title": " Nerves System",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps1.mp4"
        },
        {
            "id": "g10bu3v2",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "2",
            "title": "The brain",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps2.mp4"
        },
        {
            "id": "g10bu3v3",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "3",
            "title": " Neurons",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps3.mp4"
        },
        {
            "id": "g10bu3v4",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "4",
            "title": "Nerve impulse",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps4.mp4"
        },
        {
            "id": "g10bu3v5",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "5",
            "title": "Reflex action",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps5.mp4"
        },
        {
            "id": "g10bu3v6",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "6",
            "title": "Types of reflexes",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps6.mp4"
        },
        {
            "id": "g10bu3v7",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "10",
            "title": " The eye",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps10.mp4"
        },
        {
            "id": "g10bu3v8",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "13",
            "title": " Eye defects and corrective measures",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps13.mp4"
        },
        {
            "id": "g10bu3v9",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "14",
            "title": "The ear",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps14.mp4"
        },
        {
            "id": "g10bu3v10",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "15",
            "title": "The movement of sound in the ear",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps15.mp4"
        },
        {
            "id": "g10bu3v11",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "16",
            "title": "The tongue",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps16.mp4"
        },
        {
            "id": "g10bu3v12",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "23",
            "title": " Thyroid gland",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps23.mp4"
        },
        {
            "id": "g10bu3v13",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "25",
            "title": "pancreas",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps25.mp4"
        },
        {
            "id": "g10bu3v14",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "26",
            "title": " gonads",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps26.mp4"
        },
        {
            "id": "g10bu3v15",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "31",
            "title": " Birth control artificial methods part 1",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps31.mp4"
        },
        {
            "id": "g10bu3v16",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "32",
            "title": " Birth control artificial methods part 1",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps32.mp4"
        },
        {
            "id": "g10bu3v17",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "37",
            "title": " Temperature regulation",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps37.mp4"
        },
        {
            "id": "g10bu3v18",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "38",
            "title": "Temperature regulation",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps38.mp4"
        },
        {
            "id": "g10bu3v19",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "39",
            "title": " The kidenys",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps39.mp4"
        },
        {
            "id": "g10bu3v20",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "40",
            "title": "Chromosomes",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps40.mp4"
        },
        {
            "id": "g10bu3v21",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu3",
            "episode": "41",
            "title": " The function of the kidney part 2",
            "vurl": ".grade10/biology_gr10/resources/bio_un3/biology-unit3-eps41.mp4"
        },
        {
            "id": "g10bu4v1",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu4",
            "episode": "1",
            "title": "The leaf",
            "vurl": ".grade10/biology_gr10/resources/bio_un4/biology-unit4-eps1.mp4"
        },
        {
            "id": "g10bu4v2",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu4",
            "episode": "2",
            "title": "Leaf structure and function",
            "vurl": ".grade10/biology_gr10/resources/bio_un4/biology-unit4-eps2.mp4"
        },
        {
            "id": "g10bu4v3",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu4",
            "episode": "4",
            "title": "Mechanisms of photosynthesis",
            "vurl": ".grade10/biology_gr10/resources/bio_un4/biology-unit4-eps4.mp4"
        },
        {
            "id": "g10bu4v4",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu4",
            "episode": "5",
            "title": " Requirements of photosynthesis",
            "vurl": ".grade10/biology_gr10/resources/bio_un4/biology-unit4-eps5.mp4"
        },
        {
            "id": "g10bu4v5",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu4",
            "episode": "6",
            "title": "Photosynthesis in aquatic organisms",
            "vurl": ".grade10/biology_gr10/resources/bio_un4/biology-unit4-eps6.mp4"
        },
        {
            "id": "g10bu4v6",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu4",
            "episode": "7",
            "title": " Carbon dioxide and oxygen balance",
            "vurl": ".grade10/biology_gr10/resources/bio_un4/biology-unit4-eps7.mp4"
        },
        {
            "id": "g10bu4v7",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu4",
            "episode": "11",
            "title": " Transport in plants",
            "vurl": ".grade10/biology_gr10/resources/bio_un4/biology-unit4-eps11.mp4"
        },
        {
            "id": "g10bu4v8",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu4",
            "episode": "13",
            "title": "Experiment in transpiration",
            "vurl": ".grade10/biology_gr10/resources/bio_un4/biology-unit4-eps13.mp4"
        },
        {
            "id": "g10bu4v9",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu4",
            "episode": "15",
            "title": "Food making in plants",
            "vurl": ".grade10/biology_gr10/resources/bio_un4/biology-unit4-eps15.mp4"
        },
        {
            "id": "g10bu4v10",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu4",
            "episode": "16",
            "title": " Response in plants",
            "vurl": ".grade10/biology_gr10/resources/bio_un4/biology-unit4-eps16.mp4"
        },
        {
            "id": "g10bu4v11",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu4",
            "episode": "18",
            "title": " auxins",
            "vurl": ".grade10/biology_gr10/resources/bio_un4/biology-unit4-eps18.mp4"
        },
        {
            "id": "g10bu5v1",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu5",
            "episode": "2",
            "title": "Conservation and biodiversity",
            "vurl": ".grade10/biology_gr10/resources/bio_un5/biology-unit5-eps2.mp4"
        },
        {
            "id": "g10bu5v2",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu5",
            "episode": "3",
            "title": "vegetation",
            "vurl": ".grade10/biology_gr10/resources/bio_un5/biology-unit5-eps3.mp4"
        },
        {
            "id": "g10bu5v3",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu5",
            "episode": "4",
            "title": " Human impacts on vegetation",
            "vurl": ".grade10/biology_gr10/resources/bio_un5/biology-unit5-eps4.mp4"
        },
        {
            "id": "g10bu5v4",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu5",
            "episode": "6",
            "title": " Conservation of vegetation",
            "vurl": ".grade10/biology_gr10/resources/bio_un5/biology-unit5-eps6.mp4"
        },
        {
            "id": "g10bu5v5",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu5",
            "episode": "7",
            "title": "Wild animals",
            "vurl": ".grade10/biology_gr10/resources/bio_un5/biology-unit5-eps7.mp4"
        },
        {
            "id": "g10bu5v6",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu5",
            "episode": "8",
            "title": " Human impacts on wild animals",
            "vurl": ".grade10/biology_gr10/resources/bio_un5/biology-unit5-eps8.mp4"
        },
        {
            "id": "g10bu5v7",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu5",
            "episode": "9",
            "title": "Conservation of wild animals",
            "vurl": ".grade10/biology_gr10/resources/bio_un5/biology-unit5-eps9.mp4"
        },
        {
            "id": "g10bu5v8",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu5",
            "episode": "11",
            "title": " Air pollution",
            "vurl": ".grade10/biology_gr10/resources/bio_un5/biology-unit5-eps11.mp4"
        },
        {
            "id": "g10bu5v9",
            "gid": "g10",
            "cid": "g10b",
            "uid": "g10bu5",
            "episode": "12",
            "title": "Global warming",
            "vurl": ".grade10/biology_gr10/resources/bio_un5/biology-unit5-eps12.mp4"
        },
        {
            "id": "g10cu1v1",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "1",
            "title": "Introduction",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps1.mp4"
        },
        {
            "id": "g10cu1v2",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "2",
            "title": "Saturated hydrocarbon (Alkanes)",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps2.mp4"
        },
        {
            "id": "g10cu1v3",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "6",
            "title": " Isomerism in alkanes and physical properties of alkanes",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps6.mp4"
        },
        {
            "id": "g10cu1v4",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "7",
            "title": "Preparation of alkanes",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps7.mp4"
        },
        {
            "id": "g10cu1v5",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "8",
            "title": "Chemical properties of alkanes",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps8.mp4"
        },
        {
            "id": "g10cu1v6",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "9",
            "title": "Homologous series of unsaturated hydrocarbons (alkenes and alkynes)",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps9.mp4"
        },
        {
            "id": "g10cu1v7",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "10",
            "title": "Physical properties of unsaturated hydrocarbons",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps10.mp4"
        },
        {
            "id": "g10cu1v8",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "13",
            "title": "Isomerism in unsaturated hydrocarbons",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps13.mp4"
        },
        {
            "id": "g10cu1v9",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "15",
            "title": " Preparation of alkenes",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps15.mp4"
        },
        {
            "id": "g10cu1v10",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "16",
            "title": "Chemical properties of unsaturated hydrocarbons",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps16.mp4"
        },
        {
            "id": "g10cu1v11",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "17",
            "title": "Uses of ethylene and acetylene",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps17.mp4"
        },
        {
            "id": "g10cu1v12",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "18",
            "title": "Aromatic hydrocarbons benzene part I",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps18.mp4"
        },
        {
            "id": "g10cu1v13",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "19",
            "title": "Aromatic hydrocarbons benzene part II",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps19.mp4"
        },
        {
            "id": "g10cu1v14",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "20",
            "title": "Natural sources of hydrocarbons part I",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps20.mp4"
        },
        {
            "id": "g10cu1v15",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "21",
            "title": "Natural sources of hydrocarbons part 2",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps21.mp4"
        },
        {
            "id": "g10cu1v16",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "25",
            "title": " Preparation of alcohols",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps25.mp4"
        },
        {
            "id": "g10cu1v17",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "26",
            "title": "Chemical properties of alcohols part I",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps26.mp4"
        },
        {
            "id": "g10cu1v18",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "28",
            "title": "Chemical properties of alcohols part III",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps28.mp4"
        },
        {
            "id": "g10cu1v19",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "29",
            "title": " Chemical properties of alcohols part IV",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps29.mp4"
        },
        {
            "id": "g10cu1v20",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "30",
            "title": "Industrial applications of organic compounds part I",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps30.mp4"
        },
        {
            "id": "g10cu1v21",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "31",
            "title": " Industrial applications of organic compounds part II",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps31.mp4"
        },
        {
            "id": "g10cu1v22",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu1",
            "episode": "32",
            "title": "Agricultural Applications of organic compounds",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u1/chemistry-unit1-eps32.mp4"
        },
        {
            "id": "g10cu2v1",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu2",
            "episode": "1",
            "title": " Introduction",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u2/chemistry-unit2-eps1.mp4"
        },
        {
            "id": "g10cu2v2",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu2",
            "episode": "2",
            "title": "Oxides part I",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u2/chemistry-unit2-eps2.mp4"
        },
        {
            "id": "g10cu2v3",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu2",
            "episode": "3",
            "title": "Oxides part II",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u2/chemistry-unit2-eps3.mp4"
        },
        {
            "id": "g10cu2v4",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu2",
            "episode": "4",
            "title": "Oxides part III",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u2/chemistry-unit2-eps4.mp4"
        },
        {
            "id": "g10cu2v5",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu2",
            "episode": "5",
            "title": " Acids",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u2/chemistry-unit2-eps5.mp4"
        },
        {
            "id": "g10cu2v6",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu2",
            "episode": "6",
            "title": "Classifications and general properties of acids",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u2/chemistry-unit2-eps6.mp4"
        },
        {
            "id": "g10cu2v7",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu2",
            "episode": "7",
            "title": "Strength of acids",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u2/chemistry-unit2-eps7.mp4"
        },
        {
            "id": "g10cu2v8",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu2",
            "episode": "8",
            "title": " PH part I",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u2/chemistry-unit2-eps8.mp4"
        },
        {
            "id": "g10cu2v9",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu2",
            "episode": "10",
            "title": " Preparation of acids",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u2/chemistry-unit2-eps10.mp4"
        },
        {
            "id": "g10cu2v10",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu2",
            "episode": "11",
            "title": "Common uses of HCI, HNO3 and H2SO4",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u2/chemistry-unit2-eps11.mp4"
        },
        {
            "id": "g10cu2v11",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu2",
            "episode": "12",
            "title": "Definition and general properties of bases",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u2/chemistry-unit2-eps12.mp4"
        },
        {
            "id": "g10cu2v12",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu2",
            "episode": "13",
            "title": " Strength of bases",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u2/chemistry-unit2-eps13.mp4"
        },
        {
            "id": "g10cu2v13",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu2",
            "episode": "17",
            "title": " Preparation of salts",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u2/chemistry-unit2-eps17.mp4"
        },
        {
            "id": "g10cu2v14",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu2",
            "episode": "18",
            "title": " Some important salts and their uses",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u2/chemistry-unit2-eps18.mp4"
        },
        {
            "id": "g10cu2v15",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu2",
            "episode": "19",
            "title": " Properties of salt",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u2/chemistry-unit2-eps19.mp4"
        },
        {
            "id": "g10cu2v16",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu2",
            "episode": "20",
            "title": "Electronic configuration and orbital diagram part I",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u2/chemistry-unit2-eps20.mp4"
        },
        {
            "id": "g10cu2v17",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu2",
            "episode": "21",
            "title": " Fertilizers and pesticides",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u2/chemistry-unit2-eps21.mp4"
        },
        {
            "id": "g10cu2v18",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu2",
            "episode": "24",
            "title": "Classification of the elements",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u2/chemistry-unit2-eps24.mp4"
        },
        {
            "id": "g10cu3v1",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu3",
            "episode": "1",
            "title": "Introduction to electro chemistry",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u3/chemistry-unit3-eps1.mp4"
        },
        {
            "id": "g10cu3v2",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu3",
            "episode": "2",
            "title": "Electrical conductivity part I",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u3/chemistry-unit3-eps2.mp4"
        },
        {
            "id": "g10cu3v3",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu3",
            "episode": "3",
            "title": "Electrical conductivity part II",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u3/chemistry-unit3-eps3.mp4"
        },
        {
            "id": "g10cu3v4",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu3",
            "episode": "5",
            "title": " Electrolysis part II",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u3/chemistry-unit3-eps5.mp4"
        },
        {
            "id": "g10cu3v5",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu3",
            "episode": "6",
            "title": " Galvanic cells (voltaic) cells part I",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u3/chemistry-unit3-eps6.mp4"
        },
        {
            "id": "g10cu3v6",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu3",
            "episode": "7",
            "title": "Galvanic cells part II",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u3/chemistry-unit3-eps7.mp4"
        },
        {
            "id": "g10cu3v7",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu3",
            "episode": "8",
            "title": " Industrial application of electrolysis part I",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u3/chemistry-unit3-eps8.mp4"
        },
        {
            "id": "g10cu3v8",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu3",
            "episode": "9",
            "title": " Industrial application of electrolysis part II",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u3/chemistry-unit3-eps9.mp4"
        },
        {
            "id": "g10cu4v1",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "1",
            "title": " Introduction",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps1.mp4"
        },
        {
            "id": "g10cu4v2",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "2",
            "title": "Natural resources and industry",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps2.mp4"
        },
        {
            "id": "g10cu4v3",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "3",
            "title": " Production of some important metals and non-metals aluminum part I",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps5.mp4"
        },
        {
            "id": "g10cu4v4",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "4",
            "title": "Production of some important metals and non-metals aluminum part II",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps7.mp4"
        },
        {
            "id": "g10cu4v5",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "5",
            "title": "Iron part I",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps5.mp4"
        },
        {
            "id": "g10cu4v6",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "6",
            "title": " Iron part II",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps6.mp4"
        },
        {
            "id": "g10cu4v7",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "7",
            "title": "Iron part III",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps7.mp4"
        },
        {
            "id": "g10cu4v8",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "8",
            "title": " Copper part I",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps8.mp4"
        },
        {
            "id": "g10cu4v9",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "9",
            "title": " Copper part II",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps9.mp4"
        },
        {
            "id": "g10cu4v10",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "11",
            "title": " phosphorus",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps11.mp4"
        },
        {
            "id": "g10cu4v11",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "12",
            "title": " oxygen",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps12.mp4"
        },
        {
            "id": "g10cu4v12",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "13",
            "title": "Sulphur",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps13.mp4"
        },
        {
            "id": "g10cu4v13",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "14",
            "title": "Chlorine",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps14.mp4"
        },
        {
            "id": "g10cu4v14",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "18",
            "title": "Paper and pulp",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps18.mp4"
        },
        {
            "id": "g10cu4v15",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "19",
            "title": "Tannery",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps19.mp4"
        },
        {
            "id": "g10cu4v16",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "20",
            "title": "Food processing and processing and preservation",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps20.mp4"
        },
        {
            "id": "g10cu4v17",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "21",
            "title": "Introduction to environmental pollution",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps21.mp4"
        },
        {
            "id": "g10cu4v18",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "22",
            "title": " Air pollution",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps22.mp4"
        },
        {
            "id": "g10cu4v19",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "23",
            "title": "Water pollution",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps23.mp4"
        },
        {
            "id": "g10cu4v20",
            "gid": "g10",
            "cid": "g10h",
            "uid": "g10cu4",
            "episode": "24",
            "title": "Land pollution",
            "vurl": ".grade10/chemistry_gr10/resources/chem_u4/chemistry-unit4-eps24.mp4"
        },
        {
            "id": "g10mu1v1",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu1",
            "episode": "1",
            "title": " Introduction to polynomial functions",
            "vurl": ".grade10/maths_gr10/web/resources/math_u1/maths-unit1-eps1.mp4"
        },
        {
            "id": "g10mu1v2",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu1",
            "episode": "6",
            "title": " Theorems on polynomials",
            "vurl": ".grade10/maths_gr10/web/resources/math_u1/maths-unit1-eps6.mp4"
        },
        {
            "id": "g10mu1v3",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu1",
            "episode": "12",
            "title": "Zeros of a polynomial function part 1",
            "vurl": ".grade10/maths_gr10/web/resources/math_u1/maths-unit1-eps12.mp4"
        },
        {
            "id": "g10mu1v4",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu1",
            "episode": "14",
            "title": " Zeros of a polynomial part ",
            "vurl": ".grade10/maths_gr10/web/resources/math_u1/maths-unit1-eps14.mp4"
        },
        {
            "id": "g10mu1v5",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu1",
            "episode": "16",
            "title": "Graphs of polynomial functions part 1",
            "vurl": ".grade10/maths_gr10/web/resources/math_u1/maths-unit1-eps16.mp4"
        },
        {
            "id": "g10mu1v6",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu1",
            "episode": "17",
            "title": " Graphs of polynomial functions part 1",
            "vurl": ".grade10/maths_gr10/web/resources/math_u1/maths-unit1-eps17.mp4"
        },
        {
            "id": "g10mu1v7",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu1",
            "episode": "19",
            "title": "Graphs of polynomial function",
            "vurl": ".grade10/maths_gr10/web/resources/math_u1/maths-unit1-eps19.mp4"
        },
        {
            "id": "g10mu1v8",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu2",
            "episode": "5",
            "title": "Exponents and logarithms",
            "vurl": ".grade10/maths_gr10/web/resources/math_u2/maths-unit2-eps5.mp4"
        },
        {
            "id": "g10mu2v1",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu2",
            "episode": "10",
            "title": "Exponential functions and their graphs part 2",
            "vurl": ".grade10/maths_gr10/web/resources/math_u2/maths-unit2-eps10.mp4"
        },
        {
            "id": "g10mu2v2",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu2",
            "episode": "13",
            "title": "The logarithmic functions and their graphs part 2",
            "vurl": ".grade10/maths_gr10/web/resources/math_u2/maths-unit2-eps13.mp4"
        },
        {
            "id": "g10mu2v3",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu2",
            "episode": "16",
            "title": "The logarithm functions and their graphs part 3",
            "vurl": ".grade10/maths_gr10/web/resources/math_u2/maths-unit2-eps16.mp4"
        },
        {
            "id": "g10mu2v4",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu2",
            "episode": "19",
            "title": "Equations involving exponents and logarithms part 1",
            "vurl": ".grade10/maths_gr10/web/resources/math_u2/maths-unit2-eps19.mp4"
        },
        {
            "id": "g10mu2v5",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu2",
            "episode": "21",
            "title": "Equations involving exponents and logarithms part 2",
            "vurl": ".grade10/maths_gr10/web/resources/math_u2/maths-unit2-eps21.mp4"
        },
        {
            "id": "g10mu2v6",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu2",
            "episode": "25",
            "title": " Applications of exponential and logarithmic functions part 1",
            "vurl": ".grade10/maths_gr10/web/resources/math_u2/maths-unit2-eps25.mp4"
        },
        {
            "id": "g10mu2v7",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu2",
            "episode": "26",
            "title": " Applications of exponential and logarithmic functions part 2",
            "vurl": ".grade10/maths_gr10/web/resources/math_u2/maths-unit2-eps26.mp4"
        },
        {
            "id": "g10mu3v1",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu3",
            "episode": "2",
            "title": " Inequalities involving absolute values",
            "vurl": ".grade10/maths_gr10/web/resources/math_u3/maths-unit3-eps2.mp4"
        },
        {
            "id": "g10mu3v2",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu3",
            "episode": "6",
            "title": "Systems of linear inequalities in two variables part 1",
            "vurl": ".grade10/maths_gr10/web/resources/math_u3/maths-unit3-eps6.mp4"
        },
        {
            "id": "g10mu3v3",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu3",
            "episode": "7",
            "title": "Systems of linear inequalities in two variables part 2",
            "vurl": ".grade10/maths_gr10/web/resources/math_u3/maths-unit3-eps7.mp4"
        },
        {
            "id": "g10mu3v4",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu3",
            "episode": "14",
            "title": "Quadratic inequalities part 1",
            "vurl": ".grade10/maths_gr10/web/resources/math_u3/maths-unit3-eps14.mp4"
        },
        {
            "id": "g10mu3v5",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu3",
            "episode": "19",
            "title": " Quadratic inequalities part 2",
            "vurl": ".grade10/maths_gr10/web/resources/math_u3/maths-unit3-eps19.mp4"
        },
        {
            "id": "g10mu3v6",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu3",
            "episode": "20",
            "title": "Quadratic inequalities part 3",
            "vurl": ".grade10/maths_gr10/web/resources/math_u3/maths-unit3-eps20.mp4"
        },
        {
            "id": "g10mu3v7",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu4",
            "episode": "1",
            "title": " Distance between two points",
            "vurl": ".grade10/maths_gr10/web/resources/math_u4/maths-unit4-eps1.mp4"
        },
        {
            "id": "g10mu4v1",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu4",
            "episode": "4",
            "title": "Division of a line segment",
            "vurl": ".grade10/maths_gr10/web/resources/math_u4/maths-unit4-eps4.mp4"
        },
        {
            "id": "g10mu4v2",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu4",
            "episode": "6",
            "title": " Equation of line part 1",
            "vurl": ".grade10/maths_gr10/web/resources/math_u4/maths-unit4-eps6.mp4"
        },
        {
            "id": "g10mu4v3",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu4",
            "episode": "9",
            "title": " Equation of line part 2",
            "vurl": ".grade10/maths_gr10/web/resources/math_u4/maths-unit4-eps9.mp4"
        },
        {
            "id": "g10mu4v4",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu4",
            "episode": "11",
            "title": " Equation of line part 3",
            "vurl": ".grade10/maths_gr10/web/resources/math_u4/maths-unit4-eps11.mp4"
        },
        {
            "id": "g10mu4v5",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu4",
            "episode": "13",
            "title": " Parallel and perpendicular lines",
            "vurl": ".grade10/maths_gr10/web/resources/math_u4/maths-unit4-eps13.mp4"
        },
        {
            "id": "g10mu5v1",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu5",
            "episode": "1",
            "title": "Sine, cosine and tangent functions",
            "vurl": ".grade10/maths_gr10/web/resources/math_u/maths-unit5-eps1.mp4"
        },
        {
            "id": "g10mu5v2",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu5",
            "episode": "4",
            "title": " Sine, cosine and tangent functions",
            "vurl": ".grade10/maths_gr10/web/resources/math_u/maths-unit5-eps4.mp4"
        },
        {
            "id": "g10mu5v3",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu5",
            "episode": "7",
            "title": "Values of trigonometric functions for related angles",
            "vurl": ".grade10/maths_gr10/web/resources/math_u/maths-unit5-eps7.mp4"
        },
        {
            "id": "g10mu5v4",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu5",
            "episode": "9",
            "title": "Values of trigonometric functions for related angles",
            "vurl": ".grade10/maths_gr10/web/resources/math_u/maths-unit5-eps9.mp4"
        },
        {
            "id": "g10mu5v5",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu5",
            "episode": "11",
            "title": " Graphing sine functions",
            "vurl": ".grade10/maths_gr10/web/resources/math_u/maths-unit5-eps11.mp4"
        },
        {
            "id": "g10mu5v6",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu5",
            "episode": "12",
            "title": "Graphing cosine and tangent functions",
            "vurl": ".grade10/maths_gr10/web/resources/math_u/maths-unit5-eps12.mp4"
        },
        {
            "id": "g10mu5v7",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu5",
            "episode": "14",
            "title": " Reciprocals of basic trigonometric functions",
            "vurl": ".grade10/maths_gr10/web/resources/math_u/maths-unit5-eps14.mp4"
        },
        {
            "id": "g10mu5v8",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu5",
            "episode": "17",
            "title": "Reciprocals of basic trigonometric functions part 2",
            "vurl": ".grade10/maths_gr10/web/resources/math_u/maths-unit5-eps17.mp4"
        },
        {
            "id": "g10mu5v9",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu5",
            "episode": "26",
            "title": "Real life application problems part 1",
            "vurl": ".grade10/maths_gr10/web/resources/math_u/maths-unit5-eps26.mp4"
        },
        {
            "id": "g10mu5v10",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu5",
            "episode": "27",
            "title": " Real life application problems part 2",
            "vurl": ".grade10/maths_gr10/web/resources/math_u/maths-unit5-eps27.mp4"
        },
        {
            "id": "g10mu5v11",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu5",
            "episode": "29",
            "title": "Real life application problems part 1",
            "vurl": ".grade10/maths_gr10/web/resources/math_u/maths-unit5-eps29.mp4"
        },
        {
            "id": "g10mu6v1",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu6",
            "episode": "1",
            "title": " Incidence theorem",
            "vurl": ".grade10/maths_gr10/web/resources/math_u6/maths-unit6-eps1.mp4"
        },
        {
            "id": "g10mu6v2",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu6",
            "episode": "3",
            "title": "The altitude of triangles",
            "vurl": ".grade10/maths_gr10/web/resources/math_u6/maths-unit6-eps3.mp4"
        },
        {
            "id": "g10mu6v3",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu6",
            "episode": "6",
            "title": "Special quadrilaterals",
            "vurl": ".grade10/maths_gr10/web/resources/math_u6/maths-unit6-eps6.mp4"
        },
        {
            "id": "g10mu6v4",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu6",
            "episode": "9",
            "title": "Special quadrilaterals part 2",
            "vurl": ".grade10/maths_gr10/web/resources/math_u6/maths-unit6-eps9.mp4"
        },
        {
            "id": "g10mu6v5",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu6",
            "episode": "12",
            "title": "More on circles part 1",
            "vurl": ".grade10/maths_gr10/web/resources/math_u6/maths-unit6-eps12.mp4"
        },
        {
            "id": "g10mu6v6",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu6",
            "episode": "15",
            "title": " More on circles part 2",
            "vurl": ".grade10/maths_gr10/web/resources/math_u6/maths-unit6-eps15.mp4"
        },
        {
            "id": "g10mu6v7",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu6",
            "episode": "18",
            "title": " Regular polygons part 1",
            "vurl": ".grade10/maths_gr10/web/resources/math_u6/maths-unit6-eps18.mp4"
        },
        {
            "id": "g10mu6v8",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu6",
            "episode": "20",
            "title": "Regular polygons part 2",
            "vurl": ".grade10/maths_gr10/web/resources/math_u6/maths-unit6-eps20.mp4"
        },
        {
            "id": "g10mu6v9",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu6",
            "episode": "21",
            "title": "Regular polygons part 3",
            "vurl": ".grade10/maths_gr10/web/resources/math_u6/maths-unit6-eps21.mp4"
        },
        {
            "id": "g10mu7v1",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu7",
            "episode": "1",
            "title": " Revision on surface areas and volumes of prisms and cylinders",
            "vurl": ".grade10/maths_gr10/web/resources/math_u7/maths-unit7-eps1.mp4"
        },
        {
            "id": "g10mu7v2",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu7",
            "episode": "4",
            "title": " Pyramids, cones and spheres part 1",
            "vurl": ".grade10/maths_gr10/web/resources/math_u7/maths-unit7-eps4.mp4"
        },
        {
            "id": "g10mu7v3",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu7",
            "episode": "7",
            "title": "Pyramids, cones and spheres part 2",
            "vurl": ".grade10/maths_gr10/web/resources/math_u7/maths-unit7-eps7.mp4"
        },
        {
            "id": "g10mu7v4",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu7",
            "episode": "9",
            "title": " Pyramids, cones and spheres part 3",
            "vurl": ".grade10/maths_gr10/web/resources/math_u7/maths-unit7-eps9.mp4"
        },
        {
            "id": "g10mu7v5",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu7",
            "episode": "12",
            "title": "Frustums of pyramids and cones part 1",
            "vurl": ".grade10/maths_gr10/web/resources/math_u7/maths-unit7-eps12.mp4"
        },
        {
            "id": "g10mu7v6",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu7",
            "episode": "14",
            "title": " Frustums of pyramids and cones part 2",
            "vurl": ".grade10/maths_gr10/web/resources/math_u7/maths-unit7-eps14.mp4"
        },
        {
            "id": "g10mu7v7",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu7",
            "episode": "16",
            "title": "Frustums of pyramids and cones part 3",
            "vurl": ".grade10/maths_gr10/web/resources/math_u7/maths-unit7-eps16.mp4"
        },
        {
            "id": "g10mu7v8",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu7",
            "episode": "19",
            "title": "Surface areas and volumes of composed solids part 1",
            "vurl": ".grade10/maths_gr10/web/resources/math_u7/maths-unit7-eps19.mp4"
        },
        {
            "id": "g10mu7v9",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu7",
            "episode": "21",
            "title": " Surface areas and volumes of composed solids part 2",
            "vurl": ".grade10/maths_gr10/web/resources/math_u7/maths-unit7-eps21.mp4"
        },
        {
            "id": "g10mu7v10",
            "gid": "g10",
            "cid": "g10m",
            "uid": "g10mu7",
            "episode": "23",
            "title": "Surface areas and volumes of composed solids part 3",
            "vurl": ".grade10/maths_gr10/web/resources/math_u7/maths-unit7-eps23.mp4"
        },
        {
            "id": "g10pu1v1",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu1",
            "episode": "1",
            "title": " Motion in 2D",
            "vurl": ".grade10/physics_gr10/resources/phy_u1/physics-unit1-eps1.mp4"
        },
        {
            "id": "g10pu1v2",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu1",
            "episode": "3",
            "title": "Projectile motion part 3",
            "vurl": ".grade10/physics_gr10/resources/phy_u1/physics-unit1-eps1.mp4"
        },
        {
            "id": "g10pu1v3",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu1",
            "episode": "6",
            "title": "Application of projectile motion",
            "vurl": ".grade10/physics_gr10/resources/phy_u1/physics-unit1-eps6.mp4"
        },
        {
            "id": "g10pu1v4",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu1",
            "episode": "7",
            "title": "Rotational kinematics part I/h4>",
            "vurl": ".grade10/physics_gr10/resources/phy_u1/physics-unit1-eps7.mp4"
        },
        {
            "id": "g10pu1v5",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu1",
            "episode": "12",
            "title": " Rotational dynamics part I/h4>",
            "vurl": ".grade10/physics_gr10/resources/phy_u1/physics-unit1-eps12.mp4"
        },
        {
            "id": "g10pu1v6",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu1",
            "episode": "13",
            "title": " Rotational dynamics part II",
            "vurl": ".grade10/physics_gr10/resources/phy_u1/physics-unit1-eps13.mp4"
        },
        {
            "id": "g10pu1v7",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu1",
            "episode": "15",
            "title": " Rotational dynamics part 3",
            "vurl": ".grade10/physics_gr10/resources/phy_u1/physics-unit1-eps15.mp4"
        },
        {
            "id": "g10pu1v8",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu1",
            "episode": "16",
            "title": "Rotational dynamics part V",
            "vurl": ".grade10/physics_gr10/resources/phy_u1/physics-unit1-eps16.mp4"
        },
        {
            "id": "g10pu1v9",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu1",
            "episode": "19",
            "title": "Kepler’s laws of planetary motion/h4>",
            "vurl": ".grade10/physics_gr10/resources/phy_u1/physics-unit1-eps19.mp4"
        },
        {
            "id": "g10pu1v10",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu1",
            "episode": "20",
            "title": " Newton’s law of universal gravitation",
            "vurl": ".grade10/physics_gr10/resources/phy_u1/physics-unit1-eps20.mp4"
        },
        {
            "id": "g10pu2v1",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu2",
            "episode": "1",
            "title": " Electric charge part I",
            "vurl": ".grade10/physics_gr10/resources/phy_u2/physics-unit2-eps1.mp4"
        },
        {
            "id": "g10pu2v2",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu2",
            "episode": "2",
            "title": "Electric charge part II",
            "vurl": ".grade10/physics_gr10/resources/phy_u2/physics-unit2-eps2.mp4"
        },
        {
            "id": "g10pu2v3",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu2",
            "episode": "3",
            "title": "Electric charge part III",
            "vurl": ".grade10/physics_gr10/resources/phy_u2/physics-unit2-eps3.mp4"
        },
        {
            "id": "g10pu2v4",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu2",
            "episode": "4",
            "title": " Electric charge part IV",
            "vurl": ".grade10/physics_gr10/resources/phy_u2/physics-%20unit2-eps4.mp4"
        },
        {
            "id": "g10pu2v5",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu2",
            "episode": "5",
            "title": "Electric charge part V",
            "vurl": ".grade10/physics_gr10/resources/phy_u2/physics-unit2-eps5.mp4"
        },
        {
            "id": "g10pu2v6",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu2",
            "episode": "6",
            "title": " Electric force",
            "vurl": ".grade10/physics_gr10/resources/phy_u2/physics-unit2-eps6.mp4"
        },
        {
            "id": "g10pu2v7",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu2",
            "episode": "8",
            "title": " Electric field",
            "vurl": ".grade10/physics_gr10/resources/phy_u2/physics-unit2-eps8.mp4"
        },
        {
            "id": "g10pu2v8",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu2",
            "episode": "11",
            "title": "Electric potential",
            "vurl": ".grade10/physics_gr10/resources/phy_u2/physics-unit2-eps11.mp4"
        },
        {
            "id": "g10pu2v9",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu2",
            "episode": "14",
            "title": "Electric potential part II",
            "vurl": ".grade10/physics_gr10/resources/phy_u2/physics-unit2-eps14.mp4"
        },
        {
            "id": "g10pu2v10",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu2",
            "episode": "15",
            "title": "Capacitance part I",
            "vurl": ".grade10/physics_gr10/resources/phy_u2/physics-unit2-eps15.mp4"
        },
        {
            "id": "g10pu3v1",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu2",
            "episode": "19",
            "title": "Capacitance part2",
            "vurl": ".grade10/physics_gr10/resources/phy_u2/physics-unit2-eps19.mp4"
        },
        {
            "id": "g10pu3v2",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu3",
            "episode": "1",
            "title": " Electric current",
            "vurl": ".grade10/physics_gr10/resources/phy_u3/physics-unit3-eps1.mp4"
        },
        {
            "id": "g10pu3v3",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu3",
            "episode": "3",
            "title": " Electrical resistance part I",
            "vurl": ".grade10/physics_gr10/resources/phy_u3/physics-unit3-eps3.mp4"
        },
        {
            "id": "g10pu3v4",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu3",
            "episode": "5",
            "title": "Electrical resistance part II",
            "vurl": ".grade10/physics_gr10/resources/phy_u3/physics-unit3-eps5.mp4"
        },
        {
            "id": "g10pu3v5",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu3",
            "episode": "6",
            "title": "Combination of resistances",
            "vurl": ".grade10/physics_gr10/resources/phy_u3/physcis-unit3-eps6.mp4"
        },
        {
            "id": "g10pu3v6",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu3",
            "episode": "12",
            "title": "Electrical energy and power",
            "vurl": ".grade10/physics_gr10/resources/phy_u3/physics-unit3-eps12.mp4"
        },
        {
            "id": "g10pu3v7",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu3",
            "episode": "14",
            "title": " Electric installation and safety rules",
            "vurl": ".grade10/physics_gr10/resources/phy_u3/physics-unit3-eps14.mp4"
        },
        {
            "id": "g10pu4v1",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu4",
            "episode": "1",
            "title": " Magnetism",
            "vurl": ".grade10/physics_gr10/resources/phy_u4/physics-unit4-eps1.mp4"
        },
        {
            "id": "g10pu4v2",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu4",
            "episode": "2",
            "title": " Magnetic field part I",
            "vurl": ".grade10/physics_gr10/resources/phy_u4/physics-unit4-eps2.mp4"
        },
        {
            "id": "g10pu4v3",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu4",
            "episode": "5",
            "title": " Magnetic force part I",
            "vurl": ".grade10/physics_gr10/resources/phy_u4/physics-unit4-eps5.mp4"
        },
        {
            "id": "g10pu4v4",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu4",
            "episode": "7",
            "title": " Magnetic force part II",
            "vurl": ".grade10/physics_gr10/resources/phy_u4/physics-unit4-eps7.mp4"
        },
        {
            "id": "g10pu4v5",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu4",
            "episode": "10",
            "title": " Electromagnetic induction part I",
            "vurl": ".grade10/physics_gr10/resources/phy_u4/physics-unit4-eps10.mp4"
        },
        {
            "id": "g10pu4v6",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu4",
            "episode": "11",
            "title": " Electromagnetic induction part II",
            "vurl": ".grade10/physics_gr10/resources/phy_u4/physics-unit4-eps11.mp4"
        },
        {
            "id": "g10pu4v7",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu4",
            "episode": "13",
            "title": " Inductance",
            "vurl": ".grade10/physics_gr10/resources/phy_u4/physics-unit4-eps13.mp4"
        },
        {
            "id": "g10pu4v8",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu4",
            "episode": "15",
            "title": "Applications of electromagnetism part I",
            "vurl": ".grade10/physics_gr10/resources/phy_u4/physics-unit4-eps15.mp4"
        },
        {
            "id": "g10pu4v9",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu4",
            "episode": "16",
            "title": "Applications of electromagnetism part II",
            "vurl": ".grade10/physics_gr10/resources/phy_u4/physics-unit4-eps16.mp4"
        },
        {
            "id": "g10pu5v1",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu5",
            "episode": "1",
            "title": "Vacuum tube devices",
            "vurl": ".grade10/physics_gr10/resources/phy_u5/physics-unit5-eps1.mp4"
        },
        {
            "id": "g10pu5v2",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu5",
            "episode": "3",
            "title": "Semiconductors",
            "vurl": ".grade10/physics_gr10/resources/phy_u5/physics-unit5-eps3.mp4"
        },
        {
            "id": "g10pu5v3",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu5",
            "episode": "4",
            "title": "Semiconductor diodes",
            "vurl": ".grade10/physics_gr10/resources/phy_u5/physics-unit5-eps4.mp4"
        },
        {
            "id": "g10pu5v4",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu5",
            "episode": "5",
            "title": "Semiconductor diodes part II",
            "vurl": ".grade10/physics_gr10/resources/phy_u5/physics-unit5-eps5.mp4"
        },
        {
            "id": "g10pu5v5",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu5",
            "episode": "6",
            "title": " Transistors",
            "vurl": ".grade10/physics_gr10/resources/phy_u5/physics-unit5-eps6.mp4"
        },
        {
            "id": "g10pu5v6",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu5",
            "episode": "7",
            "title": " Logic gates part I",
            "vurl": ".grade10/physics_gr10/resources/phy_u5/physics-unit5-eps7.mp4"
        },
        {
            "id": "g10pu5v7",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu5",
            "episode": "8",
            "title": "Logic gates part II",
            "vurl": ".grade10/physics_gr10/resources/phy_u5/physics-unit5-eps8.mp4"
        },
        {
            "id": "g10pu5v8",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu5",
            "episode": "9",
            "title": " Logic gates part III",
            "vurl": ".grade10/physics_gr10/resources/phy_u5/physics-unit5-eps9.mp4"
        },
        {
            "id": "g10pu6v1",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu6",
            "episode": "1",
            "title": " Electromagnetic wave",
            "vurl": ".grade10/physics_gr10/resources/phy_u6/physics-unit6-eps1.mp4"
        },
        {
            "id": "g10pu6v2",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu6",
            "episode": "3",
            "title": "Nature of light /h4>",
            "vurl": ".grade10/physics_gr10/resources/phy_u6/physics-unit6-eps3.mp4"
        },
        {
            "id": "g10pu6v3",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu6",
            "episode": "4",
            "title": " Reflection of light part I",
            "vurl": ".grade10/physics_gr10/resources/phy_u6/physics-unit6-eps4.mp4"
        },
        {
            "id": "g10pu6v4",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu6",
            "episode": "5",
            "title": " Reflection of light part II",
            "vurl": ".grade10/physics_gr10/resources/phy_u6/physics-unit6-eps5.mp4"
        },
        {
            "id": "g10pu6v5",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu6",
            "episode": "6",
            "title": " Reflection of light part III",
            "vurl": ".grade10/physics_gr10/resources/phy_u6/physics-unit6-eps6.mp4"
        },
        {
            "id": "g10pu6v6",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu6",
            "episode": "7",
            "title": "Reflection of light part IV",
            "vurl": ".grade10/physics_gr10/resources/phy_u6/physics-unit6-eps7.mp4"
        },
        {
            "id": "g10pu6v7",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu6",
            "episode": "10",
            "title": " Refraction of light partn II",
            "vurl": ".grade10/physics_gr10/resources/phy_u6/physics-unit6-eps10.mp4"
        },
        {
            "id": "g10pu6v8",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu6",
            "episode": "11",
            "title": "Refraction of light partn III",
            "vurl": ".grade10/physics_gr10/resources/phy_u6/physics-unit6-eps11.mp4"
        },
        {
            "id": "g10pu6v9",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu6",
            "episode": "14",
            "title": "Optical instruments",
            "vurl": ".grade10/physics_gr10/resources/phy_u6/physics-unit6-eps14.mp4"
        },
        {
            "id": "g10pu6v10",
            "gid": "g10",
            "cid": "g10p",
            "uid": "g10pu6",
            "episode": "15",
            "title": " Dispersion of light",
            "vurl": ".grade10/physics_gr10/resources/phy_u6/physics-unit6-eps15.mp4"
        },
        {
            "id": "g10eu1v1",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu1",
            "episode": "1",
            "title": "Speaking:talking about sport",
            "vurl": ".grade10/English_gr10/resources/Eng_un1/english-unit1-eps1.mp4"
        },
        {
            "id": "g10eu1v2",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu1",
            "episode": "2",
            "title": "Listening: derartu tulu",
            "vurl": ".grade10/English_gr10/resources/Eng_un1/english-unit1-eps2.mp4"
        },
        {
            "id": "g10eu1v3",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu1",
            "episode": "9A",
            "title": " basketball",
            "vurl": ".grade10/English_gr10/resources/Eng_un1/english-unit1-eps9A.mp4"
        },
        {
            "id": "g10eu1v4",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu1",
            "episode": "9B",
            "title": "The African nations cup",
            "vurl": ".grade10/English_gr10/resources/Eng_un1/english-unit1-eps9B.mp4"
        },
        {
            "id": "g10eu2v1",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu2",
            "episode": "13A",
            "title": "watch that baby",
            "vurl": ".grade10/English_gr10/resources/Eng_un2/english-unit2-eps13A.mp4"
        },
        {
            "id": "g10eu2v2",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu2",
            "episode": "13B",
            "title": "first aid",
            "vurl": ".grade10/English_gr10/resources/Eng_un2/english-unit2-eps13B.mp4"
        },
        {
            "id": "g10eu2v3",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu2",
            "episode": "18A",
            "title": " talking about the pictures",
            "vurl": ".grade10/English_gr10/resources/Eng_un2/english-unit2-eps18A.mp4"
        },
        {
            "id": "g10eu2v4",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu2",
            "episode": "18B",
            "title": "safety rules",
            "vurl": ".grade10/English_gr10/resources/Eng_un2/english-unit2-eps18B.mp4"
        },
        {
            "id": "g10eu3v1",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu3",
            "episode": "23",
            "title": " talking about stories",
            "vurl": ".grade10/English_gr10/resources/Eng_un3/english-unit3-eps23.mp4"
        },
        {
            "id": "g10eu3v2",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu3",
            "episode": "24",
            "title": "re-tell a story",
            "vurl": ".grade10/English_gr10/resources/Eng_un3/english-unit3-eps24.mp4"
        },
        {
            "id": "g10eu3v3",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu3",
            "episode": "26",
            "title": "what do you like to read?",
            "vurl": ".grade10/English_gr10/resources/Eng_un3/english-unit3-eps26A.mp4"
        },
        {
            "id": "g10eu3v4",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu3",
            "episode": "26B",
            "title": "write a story",
            "vurl": ".grade10/English_gr10/resources/Eng_un3/english-unit3-eps26B.mp4"
        },
        {
            "id": "g10eu4v1",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu4",
            "episode": "35",
            "title": "the story of an orphan",
            "vurl": ".grade10/English_gr10/resources/Eng_un4/english-unit4-eps35.mp4"
        },
        {
            "id": "g10eu4v2",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu4",
            "episode": "37",
            "title": "apologizing",
            "vurl": ".grade10/English_gr10/resources/Eng_un4/english-unit4-eps37.mp4"
        },
        {
            "id": "g10eu4v3",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu4",
            "episode": "38A",
            "title": " warning signs and labels",
            "vurl": ".grade10/English_gr10/resources/Eng_un4/english-unit4-eps38A.mp4"
        },
        {
            "id": "g10eu4v4",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu4",
            "episode": "38B",
            "title": " warnings",
            "vurl": ".grade10/English_gr10/resources/Eng_un4/english-unit4-eps38B.mp4"
        },
        {
            "id": "g10eu5v1",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu5",
            "episode": "45",
            "title": "match the products",
            "vurl": ".grade10/English_gr10/resources/Eng_un5/english-unit5-eps45.mp4"
        },
        {
            "id": "g10eu5v2",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu5",
            "episode": "46",
            "title": "using the question words who and why?",
            "vurl": ".grade10/English_gr10/resources/Eng_un5/english-unit5-eps46.mp4"
        },
        {
            "id": "g10eu5v3",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu5",
            "episode": "47",
            "title": " authentic advert",
            "vurl": ".grade10/English_gr10/resources/Eng_un5/english-unit5-eps47.mp4"
        },
        {
            "id": "g10eu5v4",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu5",
            "episode": "48",
            "title": " advertising a product",
            "vurl": ".grade10/English_gr10/resources/Eng_un5/english-unit5-eps48.mp4"
        },
        {
            "id": "g10eu6v1",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu6",
            "episode": "58",
            "title": "daniel’s story",
            "vurl": ".grade10/English_gr10/resources/Eng_un6/english-unit6-eps58.mp4"
        },
        {
            "id": "g10eu6v2",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu6",
            "episode": "60",
            "title": "drugs in Ethiopia",
            "vurl": ".grade10/English_gr10/resources/Eng_un6/english-unit6-eps60.mp4"
        },
        {
            "id": "g10eu6v3",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu6",
            "episode": "64",
            "title": " taking about graphs",
            "vurl": ".grade10/English_gr10/resources/Eng_un6/english-unit6-eps64.mp4"
        },
        {
            "id": "g10eu6v4",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu6",
            "episode": "66",
            "title": "drug use world wid",
            "vurl": ".grade10/English_gr10/resources/Eng_un6/english-unit6-eps66.mp4"
        },
        {
            "id": "g10eu7v1",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu7",
            "episode": "69",
            "title": "floods in Bangladesh",
            "vurl": ".grade10/English_gr10/resources/Eng_un7/english-unit7-eps69.mp4"
        },
        {
            "id": "g10eu7v2",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu7",
            "episode": "71",
            "title": " an earthquake report",
            "vurl": ".grade10/English_gr10/resources/Eng_un7/english-unit7-eps71.mp4"
        },
        {
            "id": "g10eu7v3",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu7",
            "episode": "73",
            "title": " summarizing a news report",
            "vurl": ".grade10/English_gr10/resources/Eng_un7/english-unit7-eps73.mp4"
        },
        {
            "id": "g10eu7v4",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu7",
            "episode": "74",
            "title": "natural disasters",
            "vurl": ".grade10/English_gr10/resources/Eng_un7/english-unit7-eps74.mp4"
        },
        {
            "id": "g10eu8v1",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu8",
            "episode": "76",
            "title": " education in Ethiopia-where is it going?",
            "vurl": ".grade10/English_gr10/resources/Eng_un8/english-unit8-eps76.mp4"
        },
        {
            "id": "g10eu8v2",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu8",
            "episode": "80",
            "title": "education topics",
            "vurl": ".grade10/English_gr10/resources/Eng_un8/english-unit8-eps80.mp4"
        },
        {
            "id": "g10eu8v3",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu8",
            "episode": "81",
            "title": " a history of modern education in Ethiopia",
            "vurl": ".grade10/English_gr10/resources/Eng_un8/english-unit8-eps81.mp4"
        },
        {
            "id": "g10eu8v4",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu8",
            "episode": "83",
            "title": "A formal letter to the ministry of education",
            "vurl": ".grade10/English_gr10/resources/Eng_un8/english-unit8-eps83.mp4"
        },
        {
            "id": "g10eu9v1",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu9",
            "episode": "90",
            "title": " the rift valley lakes",
            "vurl": ".grade10/English_gr10/resources/Eng_un9/english-unit9-eps90.mp4"
        },
        {
            "id": "g10eu9v2",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu9",
            "episode": "91",
            "title": " asking questions",
            "vurl": ".grade10/English_gr10/resources/Eng_un9/english-unit9-eps91.mp4"
        },
        {
            "id": "g10eu9v3",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu9",
            "episode": "95",
            "title": "sea pictures",
            "vurl": ".grade10/English_gr10/resources/Eng_un9/english-unit9-eps95.mp4"
        },
        {
            "id": "g10eu9v4",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu9",
            "episode": "97",
            "title": "shipwrecked",
            "vurl": ".grade10/English_gr10/resources/Eng_un9/english-unit9-eps97.mp4"
        },
        {
            "id": "g10eu10v1",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu10",
            "episode": "102",
            "title": "different forms of energy",
            "vurl": ".grade10/English_gr10/resources/Eng_un10/english-unit10-eps102.mp4"
        },
        {
            "id": "g10eu10v2",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu10",
            "episode": "107",
            "title": " potential and kinetic energy",
            "vurl": ".grade10/English_gr10/resources/Eng_un10/english-unit10-eps107.mp4"
        },
        {
            "id": "g10eu10v3",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu10",
            "episode": "108A",
            "title": " alternative sources of power",
            "vurl": ".grade10/English_gr10/resources/Eng_un10/english-unit10-eps108A.mp4"
        },
        {
            "id": "g10eu10v4",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu10",
            "episode": "108B",
            "title": "energy sources",
            "vurl": ".grade10/English_gr10/resources/Eng_un10/english-unit10-eps108B.mp4"
        },
        {
            "id": "g10eu11v1",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu11",
            "episode": "115",
            "title": " job advertisements",
            "vurl": ".grade10/English_gr10/resources/Eng_un11/english-unit11-eps115.mp4"
        },
        {
            "id": "g10eu11v2",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu11",
            "episode": "118",
            "title": " interview questions",
            "vurl": ".grade10/English_gr10/resources/Eng_un11/english-unit11-eps118.mp4"
        },
        {
            "id": "g10eu11v3",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu11",
            "episode": "119",
            "title": "job interviews",
            "vurl": ".grade10/English_gr10/resources/Eng_un11/english-unit11-eps119.mp4"
        },
        {
            "id": "g10eu11v4",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu11",
            "episode": "120",
            "title": " improve your skills",
            "vurl": ".grade10/English_gr10/resources/Eng_un11/english-unit11-eps120.mp4"
        },
        {
            "id": "g10eu12v1",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu12",
            "episode": "124",
            "title": " describing pictures",
            "vurl": ".grade10/English_gr10/resources/Eng_un12/english-unit12-eps124.mp4"
        },
        {
            "id": "g10eu12v2",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu12",
            "episode": "125",
            "title": " ceremonies around the world",
            "vurl": ".grade10/English_gr10/resources/Eng_un12/english-unit12-eps125.mp4"
        },
        {
            "id": "g10eu12v3",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu12",
            "episode": "126",
            "title": " a descriptive of a ceremony",
            "vurl": ".grade10/English_gr10/resources/Eng_un12/english-unit12-eps126.mp4"
        },
        {
            "id": "g10eu12v4",
            "gid": "g10",
            "cid": "g10e",
            "uid": "g10eu12",
            "episode": "128",
            "title": " two grandmothers remember",
            "vurl": ".grade10/English_gr10/resources/Eng_un12/english-unit12-eps128.mp4"
        },
        {
            "id": "g10gu1v1",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu1",
            "episode": "1",
            "title": "Direction on maps",
            "vurl": ".grade10/geography_gr10/resources/geo_un1/geo-unit1-eps1.mp4"
        },
        {
            "id": "g10gu1v2",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu1",
            "episode": "2",
            "title": "Position on maps",
            "vurl": ".grade10/geography_gr10/resources/geo_un1/geo-unit1-eps2.mp4"
        },
        {
            "id": "g10gu1v3",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu1",
            "episode": "3",
            "title": " National grid reference system",
            "vurl": ".grade10/geography_gr10/resources/geo_un1/geo-unit1-eps3.mp4"
        },
        {
            "id": "g10gu1v4",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu1",
            "episode": "4",
            "title": "Map enlargement and reduction",
            "vurl": ".grade10/geography_gr10/resources/geo_un1/geo-unit1-eps4.mp4"
        },
        {
            "id": "g10gu1v5",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu1",
            "episode": "5",
            "title": "Relief on maps part1",
            "vurl": ".grade10/geography_gr10/resources/geo_un1/geo-unit1-eps5-part1.mp4"
        },
        {
            "id": "g10gu1v6",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu1",
            "episode": "5",
            "title": " Relief on maps part 2",
            "vurl": ".grade10/geography_gr10/resources/geo_un1/geo-unit1-eps5-part2.mp4"
        },
        {
            "id": "g10gu1v7",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu1",
            "episode": "7",
            "title": "Slopes and gradients",
            "vurl": ".grade10/geography_gr10/resources/geo_un1/geo-unit1-eps7.mp4"
        },
        {
            "id": "g10gu1v8",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu1",
            "episode": "8",
            "title": "Measuring distances field distance",
            "vurl": ".grade10/geography_gr10/resources/geo_un1/geo-unit1-eps8.mp4"
        },
        {
            "id": "g10gu2v1",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu2",
            "episode": "1",
            "title": "The earth and universe",
            "vurl": ".grade10/geography_gr10/resources/geo_un2/geo-unit2-eps1.mp4"
        },
        {
            "id": "g10gu2v2",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu2",
            "episode": "2",
            "title": "Geological events in Ethiopia",
            "vurl": ".grade10/geography_gr10/resources/geo_un2/geo-unit2-eps2.mp4"
        },
        {
            "id": "g10gu2v3",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu2",
            "episode": "3",
            "title": "Components of the earth’s physical environment part 1",
            "vurl": ".grade10/geography_gr10/resources/geo_un2/geo-unit2-eps3-part1.mp4"
        },
        {
            "id": "g10gu2v4",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu2",
            "episode": "3",
            "title": " Components of the earth’s physical environment part 1",
            "vurl": ".grade10/geography_gr10/resources/geo_un2/geo-unit2-eps3-part2.mp4"
        },
        {
            "id": "g10gu2v5",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu2",
            "episode": "3",
            "title": "Components of the earth’s physical environment part 2",
            "vurl": ".grade10/geography_gr10/resources/geo_un2/geo-unit2-eps3-part4.mp4"
        },
        {
            "id": "g10gu2v6",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu2",
            "episode": "3",
            "title": "Components of the earth’s physical environment part 3",
            "vurl": ".grade10/geography_gr10/resources/geo_un2/geo-unit2-eps3-part4.mp4"
        },
        {
            "id": "g10gu2v7",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu2",
            "episode": "7",
            "title": "Climate",
            "vurl": ".grade10/geography_gr10/resources/geo_un2/geo-unit2-eps7.mp4"
        },
        {
            "id": "g10gu2v8",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu2",
            "episode": "8",
            "title": " Climate change part1",
            "vurl": ".grade10/geography_gr10/resources/geo_un2/geo-unit2-eps8-part1.mp4"
        },
        {
            "id": "g10gu2v9",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu2",
            "episode": "10",
            "title": " The climate of Ethiopia",
            "vurl": ".grade10/geography_gr10/resources/geo_un2/geo-unit2-eps10.mp4"
        },
        {
            "id": "g10gu2v10",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu2",
            "episode": "11",
            "title": "Main seasons and climatic zones of Ethiopia",
            "vurl": ".grade10/geography_gr10/resources/geo_un2/geo-unit2-eps11.mp4"
        },
        {
            "id": "g10gu2v11",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu2",
            "episode": "12",
            "title": "Main seasons and climatic zones of Ethiopia",
            "vurl": ".grade10/geography_gr10/resources/geo_un2/geo-unit2-eps12.mp4"
        },
        {
            "id": "g10gu3v1",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu3",
            "episode": "1",
            "title": "Size and trend of world population growth",
            "vurl": ".grade10/geography_gr10/resources/geo_un3/geo-unit3-eps1.mp4"
        },
        {
            "id": "g10gu3v2",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu3",
            "episode": "2",
            "title": "Components of population change",
            "vurl": ".grade10/geography_gr10/resources/geo_un3/geo-unit3-eps2.mp4"
        },
        {
            "id": "g10gu3v3",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu3",
            "episode": "3",
            "title": "Population structure",
            "vurl": ".grade10/geography_gr10/resources/geo_un3/geo-unit3-eps3.mp4"
        },
        {
            "id": "g10gu3v4",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu3",
            "episode": "4",
            "title": "Spatial distribution of world population",
            "vurl": ".grade10/geography_gr10/resources/geo_un3/geo-unit3-eps4.mp4"
        },
        {
            "id": "g10gu3v5",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu3",
            "episode": "5",
            "title": "Urbanizatioon",
            "vurl": ".grade10/geography_gr10/resources/geo_un3/geo-unit3-eps5.mp4"
        },
        {
            "id": "g10gu3v6",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu3",
            "episode": "6",
            "title": "Population of Ethiopia",
            "vurl": ".grade10/geography_gr10/resources/geo_un3/geo-unit3-eps6.mp4"
        },
        {
            "id": "g10gu4v1",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu4",
            "episode": "1",
            "title": "Size and trend of world population growth",
            "vurl": ".grade10/geography_gr10/resources/geo_un4/geo-unit4-eps1.mp4"
        },
        {
            "id": "g10gu4v2",
            "gid": "g10",
            "cid": "g10g",
            "uid": "g10gu4",
            "episode": "2",
            "title": "Sustainable economic development",
            "vurl": ".grade10/geography_gr10/resources/geo_un4/geo-unit4-eps2.mp4"
        },
        {
            "id": "g10ciu1v1",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu1",
            "episode": "1",
            "title": "Principles and values of a democratic system part1",
            "vurl": ".grade10/civics_gr10/resources/civ_un1/civic-unit1-eps1.mp4"
        },
        {
            "id": "g10ciu1v2",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu1",
            "episode": "2",
            "title": "Principles and values of a democratic system part2",
            "vurl": ".grade10/civics_gr10/resources/civ_un1/civic-unit1-eps2.mp4"
        },
        {
            "id": "g10ciu1v3",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu1",
            "episode": "4",
            "title": "Rigths",
            "vurl": ".grade10/civics_gr10/resources/civ_un1/civic-unit1-eps4.mp4"
        },
        {
            "id": "g10ciu1v4",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu1",
            "episode": "5",
            "title": "Obligations",
            "vurl": ".grade10/civics_gr10/resources/civ_un1/civic-unit1-eps4.mp4"
        },
        {
            "id": "g10ciu1v5",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu1",
            "episode": "7",
            "title": "Tolerance",
            "vurl": ".grade10/civics_gr10/resources/civ_un1/civic-unit1-eps7.mp4"
        },
        {
            "id": "g10ciu1v6",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu1",
            "episode": "9",
            "title": "States in Ethiopia part1",
            "vurl": ".grade10/civics_gr10/resources/civ_un1/civic-unit1-eps7.mp4"
        },
        {
            "id": "g10ciu1v7",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu1",
            "episode": "10",
            "title": "States in Ethiopia part2",
            "vurl": ".grade10/civics_gr10/resources/civ_un1/civic-unit1-eps10.mp4"
        },
        {
            "id": "g10ciu1v8",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu1",
            "episode": "12",
            "title": "Federalism in Ethiopia part1",
            "vurl": ".grade10/civics_gr10/resources/civ_un1/civic-unit1-eps12.mp4"
        },
        {
            "id": "g10ciu1v9",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu1",
            "episode": "14",
            "title": "Federalism in Ethiopia part2",
            "vurl": ".grade10/civics_gr10/resources/civ_un1/civic-unit1-eps14.mp4"
        },
        {
            "id": "g10ciu1v10",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu1",
            "episode": "15",
            "title": " Ethiopia's foreign relations part1",
            "vurl": ".grade10/civics_gr10/resources/civ_un1/civic-unit1-eps15.mp4"
        },
        {
            "id": "g10ciu1v11",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu1",
            "episode": "16",
            "title": "Ethiopia's foreign relations part2",
            "vurl": ".grade10/civics_gr10/resources/civ_un1/civic-unit1-eps16.mp4"
        },
        {
            "id": "g10ciu2v1",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu2",
            "episode": "1",
            "title": " Constitution as a major source of rule of law part1",
            "vurl": ".grade10/civics_gr10/resources/civ_un2/civic-unit2-eps1.mp4"
        },
        {
            "id": "g10ciu2v2",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu2",
            "episode": "2",
            "title": "Constitution as a major source of rule of law part2",
            "vurl": ".grade10/civics_gr10/resources/civ_un2/civic-unit2-eps2.mp4"
        },
        {
            "id": "g10ciu2v3",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu2",
            "episode": "5",
            "title": " Source of rule of law",
            "vurl": ".grade10/civics_gr10/resources/civ_un2/civic-unit2-eps5.mp4"
        },
        {
            "id": "g10ciu2v4",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu2",
            "episode": "6",
            "title": " Types of laws",
            "vurl": ".grade10/civics_gr10/resources/civ_un2/civic-unit2-eps6.mp4"
        },
        {
            "id": "g10ciu2v5",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu2",
            "episode": "8",
            "title": "Breakdown of rule of law part1",
            "vurl": ".grade10/civics_gr10/resources/civ_un2/civic-unit2-eps8.mp4"
        },
        {
            "id": "g10ciu2v6",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu2",
            "episode": "9",
            "title": "Breakdown of rule of law part2",
            "vurl": ".grade10/civics_gr10/resources/civ_un2/civic-unit2-eps9.mp4"
        },
        {
            "id": "g10ciu3v1",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu3",
            "episode": "1",
            "title": "The concept of equality",
            "vurl": ".grade10/civics_gr10/resources/civ_un3/civic-unit3-eps1.mp4"
        },
        {
            "id": "g10ciu3v2",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu3",
            "episode": "2",
            "title": "The concept of equality",
            "vurl": ".grade10/civics_gr10/resources/civ_un3/civic-unit3-eps2.mp4"
        },
        {
            "id": "g10ciu3v3",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu3",
            "episode": "3",
            "title": "Civic participation",
            "vurl": ".grade10/civics_gr10/resources/civ_un3/civic-unit3-eps3.mp4"
        },
        {
            "id": "g10ciu3v4",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu3",
            "episode": "5",
            "title": "Equality of cultures",
            "vurl": ".grade10/civics_gr10/resources/civ_un3/civic-unit3-eps5.mp4"
        },
        {
            "id": "g10ciu4v1",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu4",
            "episode": "1",
            "title": " Effects of the absence of justice part1",
            "vurl": ".grade10/civics_gr10/resources/civ_un4/civic-unit4-eps1.mp4"
        },
        {
            "id": "g10ciu4v2",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu4",
            "episode": "2",
            "title": "Effects of the absence of justice part2",
            "vurl": ".grade10/civics_gr10/resources/civ_un4/civic-unit4-eps2.mp4"
        },
        {
            "id": "g10ciu4v3",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu4",
            "episode": "3",
            "title": "Manifestations of injustices that occur in the past",
            "vurl": ".grade10/civics_gr10/resources/civ_un4/civic-unit4-eps3.mp4"
        },
        {
            "id": "g10ciu4v4",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu4",
            "episode": "6",
            "title": " Categories of justice",
            "vurl": ".grade10/civics_gr10/resources/civ_un4/civic-unit4-eps6.mp4"
        },
        {
            "id": "g10ciu4v5",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu4",
            "episode": "7",
            "title": "Organization and functions of the judiciary",
            "vurl": ".grade10/civics_gr10/resources/civ_un4/civic-unit4-eps7.mp4"
        },
        {
            "id": "g10ciu4v6",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu4",
            "episode": "9",
            "title": "Equity of taxation",
            "vurl": ".grade10/civics_gr10/resources/civ_un4/civic-unit4-eps9.mp4"
        },
        {
            "id": "g10ciu5v1",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu5",
            "episode": "1",
            "title": "Requirements for the prevalence of patriotism part1",
            "vurl": ".grade10/civics_gr10/resources/civ_un5/civic-unit5-eps1.mp4"
        },
        {
            "id": "g10ciu5v2",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu5",
            "episode": "2",
            "title": "Requirements for the prevalence of patriotism part2",
            "vurl": ".grade10/civics_gr10/resources/civ_un5/civic-unit5-eps2.mp4"
        },
        {
            "id": "g10ciu5v3",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu5",
            "episode": "4",
            "title": "Patriotism and the common good part1",
            "vurl": ".grade10/civics_gr10/resources/civ_un5/civic-unit5-eps4.mp4"
        },
        {
            "id": "g10ciu5v4",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu5",
            "episode": "5",
            "title": "Patriotism and the common good part2",
            "vurl": ".grade10/civics_gr10/resources/civ_un5/civic-unit5-eps5.mp4"
        },
        {
            "id": "g10ciu5v5",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu5",
            "episode": "6",
            "title": "Patriotism and the common good part3",
            "vurl": ".grade10/civics_gr10/resources/civ_un5/civic-unit5-eps6.mp4"
        },
        {
            "id": "g10ciu5v6",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu5",
            "episode": "7",
            "title": "Patriotism and poverty reduction part1",
            "vurl": ".grade10/civics_gr10/resources/civ_un5/civic-unit5-eps7.mp4"
        },
        {
            "id": "g10ciu5v7",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu5",
            "episode": "8",
            "title": "Patriotism and poverty reduction part2",
            "vurl": ".grade10/civics_gr10/resources/civ_un5/civic-unit5-eps8.mp4"
        },
        {
            "id": "g10ciu5v8",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu5",
            "episode": "9",
            "title": "Voluntarism",
            "vurl": ".grade10/civics_gr10/resources/civ_un5/civic-unit5-eps9.mp4"
        },
        {
            "id": "g10ciu6v1",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu6",
            "episode": "1",
            "title": "The duty of a citizen",
            "vurl": ".grade10/civics_gr10/resources/civ_un6/civic-unit6-eps1.mp4"
        },
        {
            "id": "g10ciu6v2",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu6",
            "episode": "2",
            "title": "Accountability in the process of executing Responsibility",
            "vurl": ".grade10/civics_gr10/resources/civ_un6/civic-unit6-eps2.mp4"
        },
        {
            "id": "g10ciu6v3",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu6",
            "episode": "3",
            "title": "Developing social and moral responsibilities",
            "vurl": ".grade10/civics_gr10/resources/civ_un6/civic-unit6-eps3.mp4"
        },
        {
            "id": "g10ciu6v4",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu6",
            "episode": "6",
            "title": "National responsibility",
            "vurl": ".grade10/civics_gr10/resources/civ_un6/civic-unit6-eps6.mp4"
        },
        {
            "id": "g10ciu6v5",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu6",
            "episode": "8",
            "title": "Economic implications of protecting natural resources and cultural heritage",
            "vurl": ".grade10/civics_gr10/resources/civ_un6/civic-unit6-eps8.mp4"
        },
        {
            "id": "g10ciu6v6",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu6",
            "episode": "10",
            "title": "Creating a common front against HIV/AID part1",
            "vurl": ".grade10/civics_gr10/resources/civ_un6/civic-unit6-eps10.mp4"
        },
        {
            "id": "g10ciu6v7",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu6",
            "episode": "11",
            "title": "Creating a common front against HIV/AID part2",
            "vurl": ".grade10/civics_gr10/resources/civ_un6/civic-unit6-eps11.mp4"
        },
        {
            "id": "g10ciu7v1",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu7",
            "episode": "1",
            "title": " Work and well- being",
            "vurl": ".grade10/civics_gr10/resources/civ_un7/civic-unit7-eps1.mp4"
        },
        {
            "id": "g10ciu7v2",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu7",
            "episode": "2",
            "title": " Respect for physical labor",
            "vurl": ".grade10/civics_gr10/resources/civ_un7/civic-unit7-eps2.mp4"
        },
        {
            "id": "g10ciu7v3",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu7",
            "episode": "3",
            "title": "Working habits",
            "vurl": ".grade10/civics_gr10/resources/civ_un7/civic-unit7-eps3.mp4"
        },
        {
            "id": "g10ciu7v4",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu7",
            "episode": "4",
            "title": "Choice of economic system",
            "vurl": ".grade10/civics_gr10/resources/civ_un7/civic-unit7-eps4.mp4"
        },
        {
            "id": "g10ciu7v5",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu7",
            "episode": "5",
            "title": " Improvement o skills of work",
            "vurl": ".grade10/civics_gr10/resources/civ_un7/civic-unit7-eps5.mp4"
        },
        {
            "id": "g10ciu7v6",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu7",
            "episode": "6",
            "title": "Economic globalization",
            "vurl": ".grade10/civics_gr10/resources/civ_un7/civic-unit7-eps6.mp4"
        },
        {
            "id": "g10ciu8v1",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu8",
            "episode": "1",
            "title": "Manifestations of self-reliance",
            "vurl": ".grade10/civics_gr10/resources/civ_un8/civic-unit8-eps1.mp4"
        },
        {
            "id": "g10ciu8v2",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu8",
            "episode": "2",
            "title": "Manifestations of dependence",
            "vurl": ".grade10/civics_gr10/resources/civ_un8/civic-unit8-eps2.mp4"
        },
        {
            "id": "g10ciu8v3",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu8",
            "episode": "5",
            "title": "Self-reliance and decision-making",
            "vurl": ".grade10/civics_gr10/resources/civ_un8/civic-unit8-eps5.mp4"
        },
        {
            "id": "g10ciu9v1",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu9",
            "episode": "1",
            "title": " Traditional practices the affect saving",
            "vurl": ".grade10/civics_gr10/resources/civ_un9/civic-unit9-eps1.mp4"
        },
        {
            "id": "g10ciu9v2",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu9",
            "episode": "2",
            "title": "Managing the family budget",
            "vurl": ".grade10/civics_gr10/resources/civ_un9/civic-unit9-eps2.mp4"
        },
        {
            "id": "g10ciu9v3",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu9",
            "episode": "5",
            "title": "Choosing a vocation",
            "vurl": ".grade10/civics_gr10/resources/civ_un9/civic-unit9-eps5.mp4"
        },
        {
            "id": "g10ciu10v1",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu10",
            "episode": "1",
            "title": " Levels of community participation",
            "vurl": ".grade10/civics_gr10/resources/civ_un10/civic-unit10-eps1.mp4"
        },
        {
            "id": "g10ciu10v2",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu10",
            "episode": "4",
            "title": " Types and roles of civic societies part1",
            "vurl": ".grade10/civics_gr10/resources/civ_un10/civic-unit10-eps4.mp4"
        },
        {
            "id": "g10ciu10v3",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu10",
            "episode": "5",
            "title": " Types and roles of civic societies part2",
            "vurl": ".grade10/civics_gr10/resources/civ_un10/civic-unit10-eps5.mp4"
        },
        {
            "id": "g10ciu11v1",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu11",
            "episode": "1",
            "title": "The pursuit of wisdom",
            "vurl": ".grade10/civics_gr10/resources/civ_un11/civic-unit11-eps1.mp4"
        },
        {
            "id": "g10ciu11v2",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu11",
            "episode": "3",
            "title": " Skills for using information",
            "vurl": ".grade10/civics_gr10/resources/civ_un11/civic-unit11-eps3.mp4"
        },
        {
            "id": "g10ciu11v3",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu11",
            "episode": "5",
            "title": "Collection of data",
            "vurl": ".grade10/civics_gr10/resources/civ_un11/civic-unit11-eps5.mp4"
        },
        {
            "id": "g10ciu11v4",
            "gid": "g10",
            "cid": "g10ci",
            "uid": "g10ciu11",
            "episode": "6",
            "title": "Reading for the acquisition of knowledge",
            "vurl": ".grade10/civics_gr10/resources/civ_un11/civic-unit11-eps6.mp4"
        },
        {
            "id": "g10au1v1",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au1",
            "episode": "1",
            "title": " አንብቦ መረዳት",
            "vurl": ".grade10/Amharic/web/resources/un1/Amharic_.grade10_unit1_eps1.mp4"
        },
        {
            "id": "g10au1v2",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au1",
            "episode": "2",
            "title": " መናገር ፤የቡድን ውይይት",
            "vurl": ".grade10/Amharic/web/resources/un1/Amharic_.grade10_unit1_eps2.mp4"
        },
        {
            "id": "g10au1v3",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au1",
            "episode": "3",
            "title": " መጻፍ",
            "vurl": ".grade10/Amharic/web/resources/un1/Amharic_.grade10_unit1_eps3.mp4"
        },
        {
            "id": "g10au2v1",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au2",
            "episode": "2",
            "title": " መናገር",
            "vurl": ".grade10/Amharic/web/resources/un2/Amharic_.grade10_unit2_eps1.mp4"
        },
        {
            "id": "g10au2v2",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au2",
            "episode": "4",
            "title": " (ሐረግ ምስረታ)",
            "vurl": ".grade10/Amharic/web/resources/un2/Amharic_.grade10_unit2_eps4.mp4"
        },
        {
            "id": "g10au2v3",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au2",
            "episode": "5",
            "title": "ቃላዊ ግጥሞች (ስነ-ጽሑፍ)",
            "vurl": ".grade10/Amharic/web/resources/un2/Amharic_.grade10_unit2_eps5.mp4"
        },
        {
            "id": "g10au3v1",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au3",
            "episode": "1",
            "title": " ንባብ",
            "vurl": ".grade10/Amharic/web/resources/un3/Amharic_.grade10_unit3_eps1.mp4"
        },
        {
            "id": "g10au3v2",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au3",
            "episode": "3",
            "title": "መጻፍ፣የአንቀጽ ቅርጾች",
            "vurl": ".grade10/Amharic/web/resources/un3/Amharic_.grade10_unit3_eps3.mp4"
        },
        {
            "id": "g10au3v3",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au3",
            "episode": "4",
            "title": " ሰዋሰው",
            "vurl": ".grade10/Amharic/web/resources/un3/Amharic_.grade10_unit3_eps4.mp4"
        },
        {
            "id": "g10au3v4",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au3",
            "episode": "5",
            "title": " ስነ-ጽሑፍ",
            "vurl": ".grade10/Amharic/web/resources/un3/Amharic_.grade10_unit3_eps5.mp4"
        },
        {
            "id": "g10au4v1",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au4",
            "episode": "2",
            "title": "መጻፍ፣ክፍለ ትምህርት 1",
            "vurl": ".grade10/Amharic/web/resources/un4/Amharic_.grade10_unit4_eps2.mp4"
        },
        {
            "id": "g10au4v2",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au4",
            "episode": "3",
            "title": "መጻፍ፣ክፍለ ትምህርት 2",
            "vurl": ".grade10/Amharic/web/resources/un4/Amharic_.grade10_unit4_eps3.mp4"
        },
        {
            "id": "g10au4v3",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au4",
            "episode": "4",
            "title": "ማዳመጥ",
            "vurl": ".grade10/Amharic/web/resources/un4/Amharic_.grade10_unit4_eps4.mp4"
        },
        {
            "id": "g10au4v4",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au4",
            "episode": "5",
            "title": "ሰዋሰው",
            "vurl": ".grade10/Amharic/web/resources/un4/Amharic_.grade10_unit4_eps5.mp4"
        },
        {
            "id": "g10au5v1",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au5",
            "episode": "3",
            "title": "መጻፍ",
            "vurl": ".grade10/Amharic/web/resources/un5/Amharic_.grade10_unit5_eps3.mp4"
        },
        {
            "id": "g10au5v2",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au5",
            "episode": "4",
            "title": "ሰዋሰው",
            "vurl": ".grade10/Amharic/web/resources/un5/Amharic_.grade10_unit5_eps4.mp4"
        },
        {
            "id": "g10au5v3",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au5",
            "episode": "5",
            "title": " ስነ-ጽሑፍ",
            "vurl": ".grade10/Amharic/web/resources/un5/Amharic_.grade10_unit5_eps5.mp4"
        },
        {
            "id": "g10au6v1",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au6",
            "episode": "1",
            "title": "ንባብ",
            "vurl": ".grade10/Amharic/web/resources/un6/Amharic_.grade10_unit6_eps1.mp4"
        },
        {
            "id": "g10au6v2",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au6",
            "episode": "4",
            "title": "ስነ-ጽሑፍ",
            "vurl": ".grade10/Amharic/web/resources/un6/Amharic_.grade10_unit6_eps4.mp4"
        },
        {
            "id": "g10au7v1",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au7",
            "episode": "1",
            "title": "አንብቦ መረዳት",
            "vurl": ".grade10/Amharic/web/resources/un7/Amharic_.grade10_unit7_eps1.mp4"
        },
        {
            "id": "g10au7v2",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au7",
            "episode": "4",
            "title": "ሰዋሰው",
            "vurl": ".grade10/Amharic/web/resources/un7/Amharic_.grade10_unit7_eps4.mp4"
        },
        {
            "id": "g10au8v1",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au8",
            "episode": "4",
            "title": "ስነ-ጽሑፍ",
            "vurl": ".grade10/Amharic/web/resources/un8/Amharic_.grade10_unit8_eps4.mp4"
        },
        {
            "id": "g10au10v1",
            "gid": "g10",
            "cid": "g10a",
            "uid": "g10au10",
            "episode": "5",
            "title": "ስነ-ጽሑፍ",
            "vurl": ".grade10/Amharic/web/resources/un10/Amharic_.grade10_unit10_eps4.mp4"
        },
        {
            "id": "g11bu1v1",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu1",
            "episode": "6",
            "title": "Scientific methods",
            "vurl": ".grade11/biology_gr11/resources/bio_un1/biology-unit1-eps6.mp4"
        },
        {
            "id": "g11bu1v2",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu1",
            "episode": "11",
            "title": "Basic biological tool",
            "vurl": ".grade11/biology_gr11/resources/bio_un1/biology-unit1-eps11.mp4"
        },
        {
            "id": "g11bu1v3",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu1",
            "episode": "12",
            "title": "Basic biological tool part  2",
            "vurl": ".grade11/biology_gr11/resources/bio_un1/biology-unit1-eps12.mp4"
        },
        {
            "id": "g11bu1v4",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu1",
            "episode": "13",
            "title": "Basic biological tool part 3",
            "vurl": ".grade11/biology_gr11/resources/bio_un1/biology-unit1-eps13.mp4"
        },
        {
            "id": "g11bu1v5",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu1",
            "episode": "14",
            "title": "Basic biological tool part 4",
            "vurl": ".grade11/biology_gr11/resources/bio_un1/biology-unit1-eps14.mp4"
        },
        {
            "id": "g11bu1v6",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu1",
            "episode": "23",
            "title": "Biology and HIV /ADIS",
            "vurl": ".grade11/biology_gr11/resources/bio_un1/biology-unit1-eps23.mp4"
        },
        {
            "id": "g11bu1v7",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu1",
            "episode": "27",
            "title": "Life skills part 1",
            "vurl": ".grade11/biology_gr11/resources/bio_un1/biology-unit1-eps27.mp4"
        },
        {
            "id": "g11bu1v8",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu1",
            "episode": "28",
            "title": "Life skills part 2",
            "vurl": ".grade11/biology_gr11/resources/bio_un1/biology-unit1-eps28.mp4"
        },
        {
            "id": "g11bu2v1",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu2",
            "episode": "1",
            "title": "Biochemical molecules part 1",
            "vurl": ".grade11/biology_gr11/resources/bio_un2/biology-unit2-eps1.mp4"
        },
        {
            "id": "g11bu2v2",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu2",
            "episode": "5",
            "title": "Properties of water part 1",
            "vurl": ".grade11/biology_gr11/resources/bio_un2/biology-unit2-eps5.mp4"
        },
        {
            "id": "g11bu2v3",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu2",
            "episode": "6",
            "title": "Properties of water part 2",
            "vurl": ".grade11/biology_gr11/resources/bio_un2/biology-unit2-eps6.mp4"
        },
        {
            "id": "g11bu2v4",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu2",
            "episode": "7",
            "title": "Properties of water part 3",
            "vurl": ".grade11/biology_gr11/resources/bio_un2/biology-unit2-eps7.mp4"
        },
        {
            "id": "g11bu2v5",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu2",
            "episode": "9",
            "title": "Organic moleculs",
            "vurl": ".grade11/biology_gr11/resources/bio_un2/biology-unit2-eps9.mp4"
        },
        {
            "id": "g11bu2v6",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu2",
            "episode": "10",
            "title": "Carbohydrates monosaccharides",
            "vurl": ".grade11/biology_gr11/resources/bio_un2/biology-unit2-eps10.mp4"
        },
        {
            "id": "g11bu2v7",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu2",
            "episode": "12",
            "title": "Carbohydrates polysaccharides",
            "vurl": ".grade11/biology_gr11/resources/bio_un2/biology-unit2-eps12.mp4"
        },
        {
            "id": "g11bu2v8",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu2",
            "episode": "14",
            "title": "Test for reducing and non reducing sugar",
            "vurl": ".grade11/biology_gr11/resources/bio_un2/biology-unit2-eps14.mp4"
        },
        {
            "id": "g11bu2v9",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu2",
            "episode": "16",
            "title": "Lipids",
            "vurl": ".grade11/biology_gr11/resources/bio_un2/biology-unit2-eps16.mp4"
        },
        {
            "id": "g11bu2v10",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu2",
            "episode": "18",
            "title": "Test for lipids",
            "vurl": ".grade11/biology_gr11/resources/bio_un2/biology-unit2-eps18.mp4"
        },
        {
            "id": "g11bu2v11",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu2",
            "episode": "19",
            "title": "Protiens",
            "vurl": ".grade11/biology_gr11/resources/bio_un2/biology-unit2-eps19.mp4"
        },
        {
            "id": "g11bu2v12",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu2",
            "episode": "21",
            "title": "Test for protiens",
            "vurl": ".grade11/biology_gr11/resources/bio_un2/biology-unit2-eps21.mp4"
        },
        {
            "id": "g11bu2v13",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu2",
            "episode": "23",
            "title": "Nucleic acids",
            "vurl": ".grade11/biology_gr11/resources/bio_un2/biology-unit2-eps23.mp4"
        },
        {
            "id": "g11bu3v1",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu3",
            "episode": "8",
            "title": " Functions of enzymes",
            "vurl": ".grade11/biology_gr11/resources/bio_un3/biology-unit3-eps8.mp4"
        },
        {
            "id": "g11bu3v2",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu3",
            "episode": "9",
            "title": "Mechanisms of enzyme action part 1",
            "vurl": ".grade11/biology_gr11/resources/bio_un3/biology-unit3-eps9.mp4"
        },
        {
            "id": "g11bu3v3",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu3",
            "episode": "10",
            "title": "Mechanisms of enzyme action part 2",
            "vurl": ".grade11/biology_gr11/resources/bio_un3/biology-unit3-eps10.mp4"
        },
        {
            "id": "g11bu3v4",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu3",
            "episode": "12",
            "title": "Application of enzymes part 1",
            "vurl": ".grade11/biology_gr11/resources/bio_un3/biology-unit3-eps12.mp4"
        },
        {
            "id": "g11bu3v5",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu3",
            "episode": "15",
            "title": "Application of enzymes part 4",
            "vurl": ".grade11/biology_gr11/resources/bio_un3/biology-unit3-eps15.mp4"
        },
        {
            "id": "g11bu3v6",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu3",
            "episode": "14",
            "title": "Factors affecting enzyme activity",
            "vurl": ".grade11/biology_gr11/resources/bio_un3/biology-unit3-eps17.mp4"
        },
        {
            "id": "g11bu3v7",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu3",
            "episode": "19",
            "title": "The effect of temperature on enzyme activity",
            "vurl": ".grade11/biology_gr11/resources/bio_un3/biology-unit3-eps19.mp4"
        },
        {
            "id": "g11bu3v8",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu3",
            "episode": "20",
            "title": "The effect of ph on enzyme activity",
            "vurl": ".grade11/biology_gr11/resources/bio_un3/biology-unit3-eps20.mp4"
        },
        {
            "id": "g11bu3v9",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu3",
            "episode": "21",
            "title": "Allosteric regulation",
            "vurl": ".grade11/biology_gr11/resources/bio_un3/biology-unit3-eps21.mp4"
        },
        {
            "id": "g11bu3v10",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu3",
            "episode": "22",
            "title": "Feedback control mechanisms",
            "vurl": ".grade11/biology_gr11/resources/bio_un3/biology-unit3-eps22.mp4"
        },
        {
            "id": "g11bu4v1",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu4",
            "episode": "4",
            "title": "Cell theory",
            "vurl": ".grade11/biology_gr11/resources/bio_un4/biology-unit4-eps4.mp4"
        },
        {
            "id": "g11bu4v2",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu4",
            "episode": "9",
            "title": "Prokaryotic and eukaryotic cells",
            "vurl": ".grade11/biology_gr11/resources/bio_un4/biology-unit4-eps9.mp4"
        },
        {
            "id": "g11bu4v3",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu4",
            "episode": "13",
            "title": "Parts of a cell membrane",
            "vurl": ".grade11/biology_gr11/resources/bio_un4/biology-unit4-eps13.mp4"
        },
        {
            "id": "g11bu4v4",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu4",
            "episode": "14",
            "title": "Cell membrane part 2",
            "vurl": ".grade11/biology_gr11/resources/bio_un4/biology-unit4-eps14.mp4"
        },
        {
            "id": "g11bu4v5",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu4",
            "episode": "16",
            "title": "Cell organelles part 1",
            "vurl": ".grade11/biology_gr11/resources/bio_un4/biology-unit4-eps16.mp4"
        },
        {
            "id": "g11bu4v6",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu4",
            "episode": "17",
            "title": "Cell organelles part 2",
            "vurl": ".grade11/biology_gr11/resources/bio_un4/biology-unit4-eps17.mp4"
        },
        {
            "id": "g11bu4v7",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu4",
            "episode": "18",
            "title": "Cell organelles part 3",
            "vurl": ".grade11/biology_gr11/resources/bio_un4/biology-unit4-eps18.mp4"
        },
        {
            "id": "g11bu4v8",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu4",
            "episode": "19",
            "title": "Cell organelles part 4",
            "vurl": ".grade11/biology_gr11/resources/bio_un4/biology-unit4-eps19.mp4"
        },
        {
            "id": "g11bu4v9",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu4",
            "episode": "20",
            "title": " Other structures of the cell",
            "vurl": ".grade11/biology_gr11/resources/bio_un4/biology-unit4-eps20.mp4"
        },
        {
            "id": "g11bu4v10",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu4",
            "episode": "21",
            "title": " Activity on cell structures",
            "vurl": ".grade11/biology_gr11/resources/bio_un4/biology-unit4-eps21.mp4"
        },
        {
            "id": "g11bu4v11",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu4",
            "episode": "22",
            "title": " Transport of materials in cells-diffusion",
            "vurl": ".grade11/biology_gr11/resources/bio_un4/biology-unit4-eps22.mp4"
        },
        {
            "id": "g11bu4v12",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu4",
            "episode": "24",
            "title": "Osmosis",
            "vurl": ".grade11/biology_gr11/resources/bio_un4/biology-unit4-eps24.mp4"
        },
        {
            "id": "g11bu4v13",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu4",
            "episode": "26",
            "title": "Activity on osmosis",
            "vurl": ".grade11/biology_gr11/resources/bio_un4/biology-unit4-eps26.mp4"
        },
        {
            "id": "g11bu4v14",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu4",
            "episode": "27",
            "title": " Activity transport",
            "vurl": ".grade11/biology_gr11/resources/bio_un4/biology-unit4-eps27.mp4"
        },
        {
            "id": "g11bu5v1",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu5",
            "episode": "2",
            "title": "Mitochondria as a site of energy release",
            "vurl": ".grade11/biology_gr11/resources/bio_un5/biology-unit5-eps2.mp4"
        },
        {
            "id": "g11bu5v2",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu5",
            "episode": "3",
            "title": "ATP",
            "vurl": ".grade11/biology_gr11/resources/bio_un5/biology-unit5-eps3.mp4"
        },
        {
            "id": "g11bu5v3",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu5",
            "episode": "4",
            "title": "DNA",
            "vurl": ".grade11/biology_gr11/resources/bio_un5/biology-unit5-eps4.mp4"
        },
        {
            "id": "g11bu5v4",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu5",
            "episode": "6",
            "title": " Phases of respiration- glycolysis",
            "vurl": ".grade11/biology_gr11/resources/bio_un5/biology-unit5-eps6.mp4"
        },
        {
            "id": "g11bu5v5",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu5",
            "episode": "7",
            "title": " Krebs cycle",
            "vurl": ".grade11/biology_gr11/resources/bio_un5/biology-unit5-eps7.mp4"
        },
        {
            "id": "g11bu5v6",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu5",
            "episode": "8",
            "title": "Electron transport system",
            "vurl": ".grade11/biology_gr11/resources/bio_un5/biology-unit5-eps8.mp4"
        },
        {
            "id": "g11bu5v7",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu5",
            "episode": "11",
            "title": "fermentation",
            "vurl": ".grade11/biology_gr11/resources/bio_un5/biology-unit5-eps11.mp4"
        },
        {
            "id": "g11bu5v8",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu5",
            "episode": "13",
            "title": "Metabolism of proteins and lipids",
            "vurl": ".grade11/biology_gr11/resources/bio_un5/biology-unit5-eps13.mp4"
        },
        {
            "id": "g11bu5v9",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu5",
            "episode": "14",
            "title": "Metabolism of polysaccharides and conversion of sugars in to fatty acids",
            "vurl": ".grade11/biology_gr11/resources/bio_un5/biology-unit5-eps14.mp4"
        },
        {
            "id": "g11bu5v10",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu5",
            "episode": "17",
            "title": "Light-dependent reactions",
            "vurl": ".grade11/biology_gr11/resources/bio_un5/biology-unit5-eps17.mp4"
        },
        {
            "id": "g11bu5v11",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu5",
            "episode": "18",
            "title": "Light-independent reactions",
            "vurl": ".grade11/biology_gr11/resources/bio_un5/biology-unit5-eps18.mp4"
        },
        {
            "id": "g11bu5v12",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu5",
            "episode": "20",
            "title": "photorespiration",
            "vurl": ".grade11/biology_gr11/resources/bio_un5/biology-unit5-eps20.mp4"
        },
        {
            "id": "g11bu5v13",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu5",
            "episode": "21",
            "title": "C3 and c4 plants",
            "vurl": ".grade11/biology_gr11/resources/bio_un5/biology-unit5-eps21.mp4"
        },
        {
            "id": "g11bu5v14",
            "gid": "g11",
            "cid": "g11b",
            "uid": "g11bu5",
            "episode": "24",
            "title": " chromatography",
            "vurl": ".grade11/biology_gr11/resources/bio_un5/biology-unit5-eps24.mp4"
        },
        {
            "id": "g11cu1v1",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu1",
            "episode": "1",
            "title": "The scope of chemistry part 1",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u1/chemistry-unit1-eps1.mp4"
        },
        {
            "id": "g11cu1v2",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu1",
            "episode": "2",
            "title": "The scope of chemistry part 2",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u1/chemistry-unit1-eps2.mp4"
        },
        {
            "id": "g11cu1v3",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu1",
            "episode": "4",
            "title": " Uncertainty in measurements",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u1/chemistry-unit1-eps4.mp4"
        },
        {
            "id": "g11cu1v4",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu1",
            "episode": "11",
            "title": "The scientific method part 1",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u1/chemistry-unit1-eps11.mp4"
        },
        {
            "id": "g11cu1v5",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu1",
            "episode": "12",
            "title": "The scientific method part 2",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u1/chemistry-unit1-eps12.mp4"
        },
        {
            "id": "g11cu1v6",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu1",
            "episode": "13",
            "title": " Some experimental skills in chemistry",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u1/chemistry-unit1-eps13.mp4"
        },
        {
            "id": "g11cu1v7",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu1",
            "episode": "14",
            "title": "Writing a laboratory report part 1",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u1/chemistry-unit1-eps14.mp4"
        },
        {
            "id": "g11cu2v1",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu2",
            "episode": "1",
            "title": " Historical development of atomic nature of substances",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u2/chemistry-unit2-eps1.mp4"
        },
        {
            "id": "g11cu2v2",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu2",
            "episode": "3",
            "title": "Mass laws",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u2/chemistry-unit2-eps3.mp4"
        },
        {
            "id": "g11cu2v3",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu2",
            "episode": "4",
            "title": "Discovery of the electron",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u2/chemistry-unit2-eps4.mp4"
        },
        {
            "id": "g11cu2v4",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu2",
            "episode": "5",
            "title": " Radioactivity",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u2/chemistry-unit2-eps5.mp4"
        },
        {
            "id": "g11cu2v5",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu2",
            "episode": "7",
            "title": " Constituents of the nucleus",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u2/chemistry-unit2-eps7.mp4"
        },
        {
            "id": "g11cu2v6",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu2",
            "episode": "9",
            "title": "Electromagnetic radiation part 1",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u2/chemistry-unit2-eps9.mp4"
        },
        {
            "id": "g11cu2v7",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu2",
            "episode": "10",
            "title": "Electromagnetic radiation part 2",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u2/chemistry-unit2-eps10.mp4"
        },
        {
            "id": "g11cu2v8",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu2",
            "episode": "11",
            "title": " Atomic spectra",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u2/chemistry-unit2-eps11.mp4"
        },
        {
            "id": "g11cu2v9",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu2",
            "episode": "12",
            "title": "The quantum theory and photon part 1",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u2/chemistry-unit2-eps12.mp4"
        },
        {
            "id": "g11cu2v10",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu2",
            "episode": "14",
            "title": "The bohr model of hydrogen atom part 1",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u2/chemistry-unit2-eps14.mp4"
        },
        {
            "id": "g11cu2v11",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu2",
            "episode": "16",
            "title": " Quantum mechanical model of the atom part 1",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u2/chemistry-unit2-eps16.mp4"
        },
        {
            "id": "g11cu2v12",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu2",
            "episode": "19",
            "title": "Shapes of atomic orbital",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u2/chemistry-unit2-eps19.mp4"
        },
        {
            "id": "g11cu2v13",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu2",
            "episode": "20",
            "title": "Electronic configuration and orbital diagram part 1",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u2/chemistry-unit2-eps20.mp4"
        },
        {
            "id": "g11cu2v14",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu2",
            "episode": "21",
            "title": "Atomic Structure and the Peroiodic Table",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u2/chemistry-unit2-eps21.mp4"
        },
        {
            "id": "g11cu2v15",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu2",
            "episode": "23",
            "title": "The modern periodic table",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u2/chemistry-unit2-eps23.mp4"
        },
        {
            "id": "g11cu2v16",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu2",
            "episode": "24",
            "title": "Classification of the elements",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u2/chemistry-unit2-eps24.mp4"
        },
        {
            "id": "g11cu2v17",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu2",
            "episode": "25",
            "title": "Periodic properties part 1",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u2/chemistry-unit2-eps25.mp4"
        },
        {
            "id": "g11cu2v18",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu2",
            "episode": "26",
            "title": "Periodic properties part 2",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u2/chemistry-unit2-eps26.mp4"
        },
        {
            "id": "g11cu2v19",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu2",
            "episode": "28",
            "title": "Unit revision",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u2/chemistry-unit2-eps28.mp4"
        },
        {
            "id": "g11cu3v1",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "1",
            "title": "Introduction",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps1.mp4"
        },
        {
            "id": "g11cu3v2",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "3",
            "title": " Formation of ionic bonding part 1",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps3.mp4"
        },
        {
            "id": "g11cu3v3",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "5",
            "title": "Properties of ionic compound",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps5.mp4"
        },
        {
            "id": "g11cu3v4",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "6",
            "title": "Formation of covalent bonding",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps6.mp4"
        },
        {
            "id": "g11cu3v5",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "9",
            "title": "Resonance structures",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps9.mp4"
        },
        {
            "id": "g11cu3v6",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "12",
            "title": "Properties of covalent compounds",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps12.mp4"
        },
        {
            "id": "g11cu3v7",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "13",
            "title": "Molecular geometry",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps13.mp4"
        },
        {
            "id": "g11cu3v8",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "14",
            "title": "Molecular geometry part 2",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps14.mp4"
        },
        {
            "id": "g11cu3v9",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "15",
            "title": "Molecular geometry part 3",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps15.mp4"
        },
        {
            "id": "g11cu3v10",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "16",
            "title": "Molecular shape and molecular polarity",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps16.mp4"
        },
        {
            "id": "g11cu3v11",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "17",
            "title": " Intermolecular forces in covalent compounds part 1",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps17.mp4"
        },
        {
            "id": "g11cu3v12",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "18",
            "title": " Intermolecular forces in covalent compounds part 2",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps18.mp4"
        },
        {
            "id": "g11cu3v13",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "19",
            "title": "Intermolecular forces in covalent compounds part 2",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps19.mp4"
        },
        {
            "id": "g11cu3v14",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "20",
            "title": "Metallic bonding part 1",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps20.mp4"
        },
        {
            "id": "g11cu3v15",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "21",
            "title": "Metallic bonding part 2",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps21.mp4"
        },
        {
            "id": "g11cu3v16",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "23",
            "title": "VBT part 2",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps23.mp4"
        },
        {
            "id": "g11cu3v17",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "24",
            "title": "VBT part 3",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps24.mp4"
        },
        {
            "id": "g11cu3v18",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "25",
            "title": "VBT part 4",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps25.mp4"
        },
        {
            "id": "g11cu3v19",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "26",
            "title": "Molecular orbital theory(MOT) part 1",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps26.mp4"
        },
        {
            "id": "g11cu3v20",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "27",
            "title": "MOT part 2",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps27.mp4"
        },
        {
            "id": "g11cu3v21",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "30",
            "title": " Types of crystals",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps30.mp4"
        },
        {
            "id": "g11cu3v22",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu3",
            "episode": "31",
            "title": "Unit revision",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u3/chemistry-unit3-eps31.mp4"
        },
        {
            "id": "g11cu4v1",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu4",
            "episode": "1",
            "title": "Rate of reaction",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u4/chemistry-unit4-eps1.mp4"
        },
        {
            "id": "g11cu4v2",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu4",
            "episode": "2",
            "title": " Reaction rates and reaction mechanism",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u4/chemistry-unit4-eps2.mp4"
        },
        {
            "id": "g11cu4v3",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu4",
            "episode": "3",
            "title": " Factors that affect reaction rate part 1",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u4/chemistry-unit4-eps3.mp4"
        },
        {
            "id": "g11cu4v4",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu4",
            "episode": "4",
            "title": "Temperature and concentration of reactants",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u4/chemistry-unit4-eps4.mp4"
        },
        {
            "id": "g11cu4v5",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu4",
            "episode": "5",
            "title": " Factors that affect reaction rate part 3",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u4/chemistry-unit4-eps5.mp4"
        },
        {
            "id": "g11cu4v6",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu4",
            "episode": "7",
            "title": " Theories of reaction rates part 1",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u4/chemistry-unit4-eps7.mp4"
        },
        {
            "id": "g11cu4v7",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu4",
            "episode": "8",
            "title": " Theories of reaction rates part 2",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u4/chemistry-unit4-eps8.mp4"
        },
        {
            "id": "g11cu4v8",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu4",
            "episode": "9",
            "title": " Theories of reaction rates part 3",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u4/chemistry-unit4-eps9.mp4"
        },
        {
            "id": "g11cu5v1",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu5",
            "episode": "1",
            "title": " Reversible and irreversible reactions",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u5/chemistry-unit5-eps1.mp4"
        },
        {
            "id": "g11cu5v2",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu5",
            "episode": "3",
            "title": "Equilibrium expression and equilibrium constant: part 1",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u5/chemistry-unit5-eps3.mp4"
        },
        {
            "id": "g11cu5v3",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu5",
            "episode": "6",
            "title": "Equilibrium expression and equilibrium constant: part 4",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u5/chemistry-unit5-eps6.mp4"
        },
        {
            "id": "g11cu5v4",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu5",
            "episode": "11",
            "title": "Changing equilibrium conditions part 2",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u5/chemistry-unit5-eps11.mp4"
        },
        {
            "id": "g11cu5v5",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu5",
            "episode": "12",
            "title": "Changing equilibrium conditions part 3",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u5/chemistry-unit5-eps12.mp4"
        },
        {
            "id": "g11cu5v6",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu5",
            "episode": "14",
            "title": "Phase equilibrium part 1",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u5/chemistry-unit5-eps14.mp4"
        },
        {
            "id": "g11cu5v7",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu5",
            "episode": "15",
            "title": "Phase equilibrium part 2",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u5/chemistry-unit5-eps15.mp4"
        },
        {
            "id": "g11cu5v8",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu5",
            "episode": "16",
            "title": "Phase equilibrium part 3",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u5/chemistry-unit5-eps16.mp4"
        },
        {
            "id": "g11cu6v1",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu6",
            "episode": "1",
            "title": "Carboxylic acid",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u6/chemistry-unit6-eps1.mp4"
        },
        {
            "id": "g11cu6v2",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu6",
            "episode": "5",
            "title": "Chemical properties",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u6/chemistry-unit6-eps5.mp4"
        },
        {
            "id": "g11cu6v3",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu6",
            "episode": "7",
            "title": " Preparation of carboxylic acids part 2",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u6/chemistry-unit6-eps7.mp4"
        },
        {
            "id": "g11cu6v4",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu6",
            "episode": "9",
            "title": " Esters part 1",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u6/chemistry-unit6-eps9.mp4"
        },
        {
            "id": "g11cu6v5",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu6",
            "episode": "13",
            "title": " Preparation and uses of esters",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u6/chemistry-unit6-eps13.mp4"
        },
        {
            "id": "g11cu6v6",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu6",
            "episode": "15",
            "title": "Fats and oils part 2",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u6/chemistry-unit6-eps15.mp4"
        },
        {
            "id": "g11cu6v7",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu6",
            "episode": "17",
            "title": "Soaps and detergents part 2",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u6/chemistry-unit6-eps17.mp4"
        },
        {
            "id": "g11cu6v8",
            "gid": "g11",
            "cid": "g11h",
            "uid": "g11cu6",
            "episode": "18",
            "title": "Soaps and detergents part 3",
            "vurl": ".grade11/chemistry_gr11/resources/chem_u6/chemistry-unit6-eps18.mp4"
        },
        {
            "id": "g11mnu1v1",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu1",
            "episode": "1",
            "title": "Revision on relations",
            "vurl": ".grade11/maths_gr11/web/resources/math_u1/maths-unit1-eps1.mp4"
        },
        {
            "id": "g11mnu1v2",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu1",
            "episode": "4",
            "title": "Some additional types of function",
            "vurl": ".grade11/maths_gr11/web/resources/math_u1/maths-unit1-eps4.mp4"
        },
        {
            "id": "g11mnu1v3",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu1",
            "episode": "7",
            "title": "Classification of functions",
            "vurl": ".grade11/maths_gr11/web/resources/math_u1/maths-unit1-eps7.mp4"
        },
        {
            "id": "g11mnu1v4",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu1",
            "episode": "13",
            "title": " Inverse functions and their graphs part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u1/maths-unit1-eps13.mp4"
        },
        {
            "id": "g11mnu1v5",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu1",
            "episode": "14",
            "title": " Inverse functions and their graphs part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u1/maths-unit1-eps14.mp4"
        },
        {
            "id": "g11mnu2v1",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu2",
            "episode": "1",
            "title": " Simplification of rational expressions",
            "vurl": ".grade11/maths_gr11/web/resources/math_u2/maths-unit2-eps1.mp4"
        },
        {
            "id": "g11mnu2v2",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu2",
            "episode": "5",
            "title": "Rational equations",
            "vurl": ".grade11/maths_gr11/web/resources/math_u2/maths-unit2-eps5.mp4"
        },
        {
            "id": "g11mnu2v3",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu2",
            "episode": "8",
            "title": " Rational functions and their graphs part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u2/maths-unit2-eps8.mp4"
        },
        {
            "id": "g11mnu2v4",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu2",
            "episode": "11",
            "title": " Rational functions and their graphs part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u2/maths-unit2-eps11.mp4"
        },
        {
            "id": "g11mnu3v1",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu3",
            "episode": "1",
            "title": "Straight line",
            "vurl": ".grade11/maths_gr11/web/resources/math_u3/maths-unit3-eps1.mp4"
        },
        {
            "id": "g11mnu3v2",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu3",
            "episode": "4",
            "title": "Cone and sections of a cone",
            "vurl": ".grade11/maths_gr11/web/resources/math_u3/maths-unit3-eps4.mp4"
        },
        {
            "id": "g11mnu3v3",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu3",
            "episode": "6",
            "title": " Circles part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u3/maths-unit3-eps6.mp4"
        },
        {
            "id": "g11mnu3v4",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu3",
            "episode": "8",
            "title": " Circles part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u3/maths-unit3-eps8.mp4"
        },
        {
            "id": "g11mnu3v5",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu3",
            "episode": "10",
            "title": "parabolas",
            "vurl": ".grade11/maths_gr11/web/resources/math_u3/maths-unit3-eps10.mp4"
        },
        {
            "id": "g11mnu3v6",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu3",
            "episode": "13",
            "title": " ellipess",
            "vurl": ".grade11/maths_gr11/web/resources/math_u3/maths-unit3-eps13.mp4"
        },
        {
            "id": "g11mnu3v7",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu3",
            "episode": "17",
            "title": " Hyperbolas part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u3/maths-unit3-eps17.mp4"
        },
        {
            "id": "g11mnu3v8",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu3",
            "episode": "19",
            "title": " Hyperbolas part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u3/maths-unit3-eps17.mp4"
        },
        {
            "id": "g11mnu4v1",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu4",
            "episode": "1",
            "title": " Logic part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u4/maths-unit4-eps1.mp4"
        },
        {
            "id": "g11mnu4v2",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu4",
            "episode": "4",
            "title": " Logic part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u4/maths-unit4-eps4.mp4"
        },
        {
            "id": "g11mnu4v3",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu4",
            "episode": "6",
            "title": " Logic part 3",
            "vurl": ".grade11/maths_gr11/web/resources/math_u4/maths-unit4-eps6.mp4"
        },
        {
            "id": "g11mnu4v4",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu4",
            "episode": "9",
            "title": " Logic part 9",
            "vurl": ".grade11/maths_gr11/web/resources/math_u4/maths-unit4-eps9.mp4"
        },
        {
            "id": "g11mnu4v5",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu4",
            "episode": "14",
            "title": " Arguments and validity",
            "vurl": ".grade11/maths_gr11/web/resources/math_u4/maths-unit4-eps14.mp4"
        },
        {
            "id": "g11mnu5v1",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu5",
            "episode": "1",
            "title": "Types of data",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps1.mp4"
        },
        {
            "id": "g11mnu5v2",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu5",
            "episode": "4",
            "title": "Frequency distribution ",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps4.mp4"
        },
        {
            "id": "g11mnu5v3",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu5",
            "episode": "7",
            "title": " Measure of location for grouped data",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps7.mp4"
        },
        {
            "id": "g11mnu5v4",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu5",
            "episode": "10",
            "title": "Measure of location for grouped data part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps10.mp4"
        },
        {
            "id": "g11mnu5v5",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu5",
            "episode": "12",
            "title": "Measures of dispersion",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps12.mp4"
        },
        {
            "id": "g11mnu5v6",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu5",
            "episode": "15",
            "title": "Probability",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps15.mp4"
        },
        {
            "id": "g11mnu5v7",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu5",
            "episode": "16",
            "title": " permutations",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps16.mp4"
        },
        {
            "id": "g11mnu5v8",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu5",
            "episode": "19",
            "title": "Combination ",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps19.mp4"
        },
        {
            "id": "g11mnu5v9",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu5",
            "episode": "21",
            "title": "Random experiments",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps21.mp4"
        },
        {
            "id": "g11mnu5v10",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu5",
            "episode": "24",
            "title": "Random events",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps24.mp4"
        },
        {
            "id": "g11mnu5v11",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu5",
            "episode": "27",
            "title": "Occurrences",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps27.mp4"
        },
        {
            "id": "g11mnu6v1",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu6",
            "episode": "1",
            "title": "Matrices",
            "vurl": ".grade11/maths_gr11/web/resources/math_u6/maths-unit6-eps1.mp4"
        },
        {
            "id": "g11mnu6v2",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu6",
            "episode": "3",
            "title": "Working with matrices",
            "vurl": ".grade11/maths_gr11/web/resources/math_u6/maths-unit6-eps3.mp4"
        },
        {
            "id": "g11mnu6v3",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu6",
            "episode": "5",
            "title": "determinantes",
            "vurl": ".grade11/maths_gr11/web/resources/math_u6/maths-unit6-eps5.mp4"
        },
        {
            "id": "g11mnu6v4",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu6",
            "episode": "8",
            "title": "The properties of determinant",
            "vurl": ".grade11/maths_gr11/web/resources/math_u6/maths-unit6-eps8.mp4"
        },
        {
            "id": "g11mnu6v5",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu6",
            "episode": "15",
            "title": " Systems of equations with two or three variables part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u6/maths-unit6-eps15.mp4"
        },
        {
            "id": "g11mnu6v6",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu6",
            "episode": "16",
            "title": " Systems of equations with two or three variables part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u6/maths-unit6-eps16.mp4"
        },
        {
            "id": "g11mnu6v7",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu6",
            "episode": "20",
            "title": "Cramer’s rule",
            "vurl": ".grade11/maths_gr11/web/resources/math_u6/maths-unit6-eps20.mp4"
        },
        {
            "id": "g11mnu7v1",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu7",
            "episode": "1",
            "title": "The concept of complex numbers",
            "vurl": ".grade11/maths_gr11/web/resources/math_u7/maths-unit7-eps1.mp4"
        },
        {
            "id": "g11mnu7v2",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu7",
            "episode": "3",
            "title": "Operations on complex numbers part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u7/maths-unit7-eps3.mp4"
        },
        {
            "id": "g11mnu7v3",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu7",
            "episode": "5",
            "title": "Operations on complex numbers part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u7/maths-unit7-eps5.mp4"
        },
        {
            "id": "g11mnu7v4",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu7",
            "episode": "11",
            "title": " Argand diagrams and polar representations of complex numbers",
            "vurl": ".grade11/maths_gr11/web/resources/math_u7/maths-unit7-eps11.mp4"
        },
        {
            "id": "g11mnu8v1",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu8",
            "episode": "1",
            "title": " Vectors and scalars part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u8/maths-unit8-eps1.mp4"
        },
        {
            "id": "g11mnu8v2",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu8",
            "episode": "3",
            "title": " Vectors and scalars part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u8/maths-unit8-eps3.mp4"
        },
        {
            "id": "g11mnu8v3",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu8",
            "episode": "4",
            "title": "Representations of a vector",
            "vurl": ".grade11/maths_gr11/web/resources/math_u8/maths-unit8-eps4.mp4"
        },
        {
            "id": "g11mnu8v4",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu8",
            "episode": "8",
            "title": " Vectors and Transformations of the Plane",
            "vurl": ".grade11/maths_gr11/web/resources/math_u8/maths-unit8-eps8.mp4"
        },
        {
            "id": "g11mnu8v5",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu8",
            "episode": "10",
            "title": "Application of vector part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u8/maths-unit8-eps10.mp4"
        },
        {
            "id": "g11mnu8v6",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu8",
            "episode": "13",
            "title": " Transformation of the plane part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u8/maths-unit8-eps13.mp4"
        },
        {
            "id": "g11mnu8v7",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu8",
            "title": "Transformation of the plane part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u8/maths-unit8-eps15.mp4"
        },
        {
            "id": "g11mnu8v8",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu8",
            "title": "Transformation of the plane part 3",
            "vurl": ".grade11/maths_gr11/web/resources/math_u8/maths-unit8-eps18.mp4"
        },
        {
            "id": "g11mnu9v1",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu9",
            "episode": "1",
            "title": " The functions y= secx, y= csc x, and y= cotx part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u9/maths-unit9-eps1.mp4"
        },
        {
            "id": "g11mnu9v2",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu9",
            "episode": "3",
            "title": " The functions y= secx, y= csc x, and y= cotx part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u9/maths-unit9-eps3.mp4"
        },
        {
            "id": "g11mnu9v3",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu9",
            "episode": "6",
            "title": " Inverse of trigonometric functions",
            "vurl": ".grade11/maths_gr11/web/resources/math_u9/maths-unit9-eps6.mp4"
        },
        {
            "id": "g11mnu9v4",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu9",
            "episode": "10",
            "title": "Graphs of some trigonometric functions part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u9/maths-unit9-eps10.mp4"
        },
        {
            "id": "g11mnu9v5",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu9",
            "episode": "12",
            "title": "Graphs of some trigonometric functions part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u9/maths-unit9-eps12.mp4"
        },
        {
            "id": "g11mnu9v6",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu9",
            "episode": "15",
            "title": "Applications of trigonometric functions part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u9/maths-unit9-eps15.mp4"
        },
        {
            "id": "g11mnu9v7",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu9",
            "episode": "18",
            "title": "Applications of trigonometric functions part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u9/maths-unit9-eps18.mp4"
        },
        {
            "id": "g11mnu10v1",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu10",
            "episode": "1",
            "title": "Graphical solutions of system of linear inequalities",
            "vurl": ".grade11/maths_gr11/web/resources/math_u10/maths-unit10-eps1.mp4"
        },
        {
            "id": "g11mnu10v2",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu10",
            "episode": "5",
            "title": "Real life liner programming problems part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u10/maths-unit10-eps5.mp4"
        },
        {
            "id": "g11mnu10v3",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu10",
            "episode": "7",
            "title": "Maximum and minimum values part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u10/maths-unit10-eps7.mp4"
        },
        {
            "id": "g11mnu10v4",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu10",
            "episode": "10",
            "title": "Real life linear programming problems",
            "vurl": ".grade11/maths_gr11/web/resources/math_u10/maths-unit10-eps10.mp4"
        },
        {
            "id": "g11mnu10v5",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu10",
            "episode": "13",
            "title": "Real life linear programming problems part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u10/maths-unit10-eps13.mp4"
        },
        {
            "id": "g11mnu11v1",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu11",
            "episode": "1",
            "title": "Basic mathematical concepts in business",
            "vurl": ".grade11/maths_gr11/web/resources/math_u11/maths-unit11-eps1.mp4"
        },
        {
            "id": "g11mnu11v2",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu11",
            "episode": "4",
            "title": "Compound interest and depreciation part 1s",
            "vurl": ".grade11/maths_gr11/web/resources/math_u11/maths-unit11-eps4.mp4"
        },
        {
            "id": "g11mnu11v3",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu11",
            "episode": "6",
            "title": "Compound interest and depreciation part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u11/maths-unit11-eps6.mp4"
        },
        {
            "id": "g11mnu11v4",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu11",
            "episode": "8",
            "title": "Saving, investing and borrowing money part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u11/maths-unit11-eps8.mp4"
        },
        {
            "id": "g11mnu11v5",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu11",
            "episode": "11",
            "title": "Saving, investing and borrowing money part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u11/maths-unit11-eps11.mp4"
        },
        {
            "id": "g11mnu11v6",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu11",
            "episode": "15",
            "title": "Taxation part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u11/maths-unit11-eps15.mp4"
        },
        {
            "id": "g11mnu11v7",
            "gid": "g11",
            "cid": "g11mn",
            "uid": "g11mnu11",
            "episode": "17",
            "title": "Taxation part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u11/maths-unit11-eps17.mp4"
        },
        {
            "id": "g11pu1v1",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu1",
            "episode": "1",
            "title": "Science of measurement",
            "vurl": ".grade11/physics_gr11/resources/phy_u1/physics-unit1-eps1.mp4"
        },
        {
            "id": "g11pu1v2",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu1",
            "episode": "3",
            "title": "Precision and accuracy",
            "vurl": ".grade11/physics_gr11/resources/phy_u1/physics-unit1-eps3.mp4"
        },
        {
            "id": "g11pu1v3",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu1",
            "episode": "7",
            "title": " Experiment and report writing",
            "vurl": ".grade11/physics_gr11/resources/phy_u1/physics-unit1-eps7.mp4"
        },
        {
            "id": "g11pu2v1",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu2",
            "episode": "1",
            "title": "Types of vector",
            "vurl": ".grade11/physics_gr11/resources/phy_u2/physics-unit2-eps1.mp4"
        },
        {
            "id": "g11pu2v2",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu2",
            "episode": "2",
            "title": "Resolution of vectors",
            "vurl": ".grade11/physics_gr11/resources/phy_u2/physics-unit2-eps2.mp4"
        },
        {
            "id": "g11pu2v3",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu2",
            "episode": "3",
            "title": "Vector addition and subtraction part 1",
            "vurl": ".grade11/physics_gr11/resources/phy_u2/physics-unit2-eps3.mp4"
        },
        {
            "id": "g11pu2v4",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu2",
            "episode": "6",
            "title": "Vector addition and subtraction part 2",
            "vurl": ".grade11/physics_gr11/resources/phy_u2/physics-unit2-eps6.mp4"
        },
        {
            "id": "g11pu2v5",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu2",
            "episode": "9",
            "title": "Vector addition and subtraction part 4",
            "vurl": ".grade11/physics_gr11/resources/phy_u2/physics-unit2-eps9.mp4"
        },
        {
            "id": "g11pu2v6",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu2",
            "episode": "13",
            "title": "Multiplication of vectors part 1",
            "vurl": ".grade11/physics_gr11/resources/phy_u2/physics-unit2-eps13.mp4"
        },
        {
            "id": "g11pu2v7",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu2",
            "episode": "15",
            "title": "Multiplication of vectors part 2",
            "vurl": ".grade11/physics_gr11/resources/phy_u2/physics-unit2-eps15.mp4"
        },
        {
            "id": "g11pu2v8",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu2",
            "episode": "17",
            "title": " Applications of vectors part 1",
            "vurl": ".grade11/physics_gr11/resources/phy_u2/physics-unit2-eps17.mp4"
        },
        {
            "id": "g11pu2v9",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu2",
            "episode": "18",
            "title": " Applications of vectors part 2",
            "vurl": ".grade11/physics_gr11/resources/phy_u2/physics-unit2-eps18.mp4"
        },
        {
            "id": "g11pu3v1",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu3",
            "episode": "1",
            "title": " Motion in one dimension part 2",
            "vurl": ".grade11/physics_gr11/resources/phy_u3/physics-unit3-eps2.mp4"
        },
        {
            "id": "g11pu3v2",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu3",
            "episode": "2",
            "title": " Motion in one dimension part 2",
            "vurl": ".grade11/physics_gr11/resources/phy_u3/physics-unit3-eps2.mp4"
        },
        {
            "id": "g11pu3v3",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu3",
            "episode": "5",
            "title": " Motion in one dimension part 3",
            "vurl": ".grade11/physics_gr11/resources/phy_u3/physics-unit3-eps5.mp4"
        },
        {
            "id": "g11pu3v4",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu3",
            "episode": "7",
            "title": " Motion in one dimension part 4",
            "vurl": ".grade11/physics_gr11/resources/phy_u3/physics-unit3-eps7.mp4"
        },
        {
            "id": "g11pu3v5",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu3",
            "episode": "9",
            "title": " Motion in one dimension part 5",
            "vurl": ".grade11/physics_gr11/resources/phy_u3/physics-unit3-eps9.mp4"
        },
        {
            "id": "g11pu3v6",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu3",
            "episode": "11",
            "title": "Motion in a plane",
            "vurl": ".grade11/physics_gr11/resources/phy_u3/physics-unit3-eps11.mp4"
        },
        {
            "id": "g11pu3v7",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu3",
            "episode": "15",
            "title": "Circular motion part 1",
            "vurl": ".grade11/physics_gr11/resources/phy_u3/physics-unit3-eps15.mp4"
        },
        {
            "id": "g11pu3v8",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu3",
            "episode": "18",
            "title": "Circular motion part 2",
            "vurl": ".grade11/physics_gr11/resources/phy_u3/physics-unit3-eps18.mp4"
        },
        {
            "id": "g11pu3v9",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu3",
            "episode": "19",
            "title": " Relative velocity",
            "vurl": ".grade11/physics_gr11/resources/phy_u3/physics-unit3-eps19.mp4"
        },
        {
            "id": "g11pu4v1",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu4",
            "episode": "2",
            "title": " Laws of dynamics part 1",
            "vurl": ".grade11/physics_gr11/resources/phy_u4/physics-unit4-eps2.mp4"
        },
        {
            "id": "g11pu4v2",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu4",
            "episode": "3",
            "title": " Laws of dynamics part 2",
            "vurl": ".grade11/physics_gr11/resources/phy_u4/physics-unit4-eps3.mp4"
        },
        {
            "id": "g11pu4v3",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu4",
            "episode": "4",
            "title": " Laws of dynamics part 3",
            "vurl": ".grade11/physics_gr11/resources/phy_u4/physics-unit4-eps4.mp4"
        },
        {
            "id": "g11pu4v4",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu4",
            "episode": "7",
            "title": " Laws of dynamics part 3",
            "vurl": ".grade11/physics_gr11/resources/phy_u4/physics-unit4-eps7.mp4"
        },
        {
            "id": "g11pu4v5",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu4",
            "episode": "10",
            "title": "Linear momentum",
            "vurl": ".grade11/physics_gr11/resources/phy_u4/physics-unit4-eps10.mp4"
        },
        {
            "id": "g11pu4v6",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu4",
            "episode": "11",
            "title": " Conservation of linear momentum part 1",
            "vurl": ".grade11/physics_gr11/resources/phy_u4/physics-unit4-eps11.mp4"
        },
        {
            "id": "g11pu4v7",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu4",
            "episode": "14",
            "title": " Conservation of linear momentum part 2",
            "vurl": ".grade11/physics_gr11/resources/phy_u4/physics-unit4-eps14.mp4"
        },
        {
            "id": "g11pu4v8",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu4",
            "episode": "16",
            "title": "Dynamics of circular motion part 2",
            "vurl": ".grade11/physics_gr11/resources/phy_u4/physics-unit4-eps16.mp4"
        },
        {
            "id": "g11pu4v9",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu4",
            "episode": "19",
            "title": "Dynamics of circular motion part 2",
            "vurl": ".grade11/physics_gr11/resources/phy_u4/physics-unit4-eps19.mp4"
        },
        {
            "id": "g11pu5v1",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu5",
            "episode": "5",
            "title": " Energy part 1",
            "vurl": ".grade11/physics_gr11/resources/phy_u5/physics-unit5-eps5.mp4"
        },
        {
            "id": "g11pu5v2",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu5",
            "episode": "8",
            "title": " Energy part 2",
            "vurl": ".grade11/physics_gr11/resources/phy_u5/physics-unit5-eps8.mp4"
        },
        {
            "id": "g11pu5v3",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu5",
            "episode": "11",
            "title": "Power",
            "vurl": ".grade11/physics_gr11/resources/phy_u5/physics-unit5-eps11.mp4"
        },
        {
            "id": "g11pu6v1",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu6",
            "episode": "1",
            "title": " Axis of rotation",
            "vurl": ".grade11/physics_gr11/resources/phy_u6/physics-unit6-eps1.mp4"
        },
        {
            "id": "g11pu6v2",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu6",
            "episode": "3",
            "title": "Torque",
            "vurl": ".grade11/physics_gr11/resources/phy_u6/physics-unit6-eps3.mp4"
        },
        {
            "id": "g11pu6v3",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu6",
            "episode": "5",
            "title": "Inertia",
            "vurl": ".grade11/physics_gr11/resources/phy_u6/physics-unit6-eps5.mp4"
        },
        {
            "id": "g11pu6v4",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu6",
            "episode": "8",
            "title": "Basic laws of rotational dynamics",
            "vurl": ".grade11/physics_gr11/resources/phy_u6/physics-unit6-eps8.mp4"
        },
        {
            "id": "g11pu6v5",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu6",
            "episode": "10",
            "title": "Basic laws of rotational dynamics part 2",
            "vurl": ".grade11/physics_gr11/resources/phy_u6/physics-unit6-eps10.mp4"
        },
        {
            "id": "g11pu6v6",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu6",
            "episode": "12",
            "title": "Angular momentum",
            "vurl": ".grade11/physics_gr11/resources/phy_u6/physics-unit6-eps12.mp4"
        },
        {
            "id": "g11pu6v7",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu6",
            "episode": "15",
            "title": " The center of mass",
            "vurl": ".grade11/physics_gr11/resources/phy_u6/physics-unit6-eps15.mp4"
        },
        {
            "id": "g11pu7v1",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu7",
            "episode": "1",
            "title": "Conditions of equilibrium",
            "vurl": ".grade11/physics_gr11/resources/phy_u7/physics-unit7-eps1.mp4"
        },
        {
            "id": "g11pu7v2",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu7",
            "episode": "6",
            "title": "Types of equilibrium and centre of gravity",
            "vurl": ".grade11/physics_gr11/resources/phy_u7/physics-unit7-eps6.mp4"
        },
        {
            "id": "g11pu7v3",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu7",
            "episode": "7",
            "title": " Couples",
            "vurl": ".grade11/physics_gr11/resources/phy_u7/physics-unit7-eps7.mp4"
        },
        {
            "id": "g11pu8v1",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu8",
            "episode": "1",
            "title": " Elastic behaviors",
            "vurl": ".grade11/physics_gr11/resources/phy_u8/physics-unit8-eps1.mp4"
        },
        {
            "id": "g11pu8v2",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu8",
            "episode": "3",
            "title": "Elastic behavior part 3",
            "vurl": ".grade11/physics_gr11/resources/phy_u8/physics-unit8-eps3.mp4"
        },
        {
            "id": "g11pu8v3",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu8",
            "episode": "5",
            "title": "Fluid statics part 1",
            "vurl": ".grade11/physics_gr11/resources/phy_u8/physics-unit8-eps5.mp4"
        },
        {
            "id": "g11pu8v4",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu8",
            "episode": "7",
            "title": "Fluid statics part 2",
            "vurl": ".grade11/physics_gr11/resources/phy_u8/physics-unit8-eps7.mp4"
        },
        {
            "id": "g11pu8v5",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu8",
            "episode": "8",
            "title": "Fluid statics part 3",
            "vurl": ".grade11/physics_gr11/resources/phy_u8/physics-unit8-eps8.mp4"
        },
        {
            "id": "g11pu8v6",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu8",
            "episode": "11",
            "title": "Fluid statics part 4",
            "vurl": ".grade11/physics_gr11/resources/phy_u8/physics-unit8-eps11.mp4"
        },
        {
            "id": "g11pu8v7",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu8",
            "episode": "13",
            "title": "Fluid statics part 5",
            "vurl": ".grade11/physics_gr11/resources/phy_u8/physics-unit8-eps13.mp4"
        },
        {
            "id": "g11pu8v8",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu8",
            "episode": "15",
            "title": " Fluid dynamics part 1",
            "vurl": ".grade11/physics_gr11/resources/phy_u8/physics-unit8-eps15.mp4"
        },
        {
            "id": "g11pu8v9",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu8",
            "episode": "16",
            "title": " Fluid dynamics part 2",
            "vurl": ".grade11/physics_gr11/resources/phy_u8/physics-unit8-eps16.mp4"
        },
        {
            "id": "g11pu8v10",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu8",
            "episode": "19",
            "title": " Fluid dynamics part 3",
            "vurl": ".grade11/physics_gr11/resources/phy_u8/physics-unit8-eps19.mp4"
        },
        {
            "id": "g11pu8v11",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu8",
            "episode": "20",
            "title": " Fluid dynamics part 4",
            "vurl": ".grade11/physics_gr11/resources/phy_u8/physics-unit8-eps20.mp4"
        },
        {
            "id": "g11pu8v12",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu8",
            "episode": "22",
            "title": "Thermal properties of matter part 1",
            "vurl": ".grade11/physics_gr11/resources/phy_u8/physics-unit8-eps22.mp4"
        },
        {
            "id": "g11pu8v13",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu8",
            "episode": "23",
            "title": "Thermal properties of matter part 2",
            "vurl": ".grade11/physics_gr11/resources/phy_u8/physics-unit8-eps23.mp4"
        },
        {
            "id": "g11pu8v14",
            "gid": "g11",
            "cid": "g11p",
            "uid": "g11pu8",
            "episode": "24",
            "title": "Thermal properties of matter part 3",
            "vurl": ".grade11/physics_gr11/resources/phy_u8/physics-unit8-eps24.mp4"
        },
        {
            "id": "g11eu1v1",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu1",
            "episode": "1",
            "title": " Learning strategies: looking forward to grade 11",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un1/english-unit1-eps1.mp4"
        },
        {
            "id": "g11eu1v2",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu1",
            "episode": "3",
            "title": "the African union",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un1/english-unit1-eps3.mp4"
        },
        {
            "id": "g11eu1v3",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu1",
            "episode": "4",
            "title": "the African union",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un1/english-unit1-eps4.mp4"
        },
        {
            "id": "g11eu1v4",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu1",
            "episode": "10",
            "title": " a report on the African union",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un1/english-unit1-eps10.mp4"
        },
        {
            "id": "g11eu1v5",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu1",
            "episode": "13",
            "title": " the coltan mine debate",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un1/english-unit1-eps13.mp4"
        },
        {
            "id": "g11eu2v1",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu2",
            "episode": "18",
            "title": "some statistics about education in Ethiopia",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un2/english-unit2-eps18.mp4"
        },
        {
            "id": "g11eu2v2",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu2",
            "episode": "19",
            "title": "pronunciation-connected speech",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un2/english-unit2-eps19.mp4"
        },
        {
            "id": "g11eu2v3",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu2",
            "episode": "24",
            "title": "reported speech",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un2/english-unit2-eps24.mp4"
        },
        {
            "id": "g11eu2v4",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu2",
            "episode": "25",
            "title": "setting goals",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un2/english-unit2-eps25.mp4"
        },
        {
            "id": "g11eu2v5",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu2",
            "episode": "27",
            "title": "an old woman speaks",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un2/english-unit2-eps27.mp4"
        },
        {
            "id": "g11eu2v6",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu2",
            "episode": "30",
            "title": "A magazine article",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un2/english-unit2-eps30.mp4"
        },
        {
            "id": "g11eu3v1",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu3",
            "episode": "36",
            "title": "a doctor of modern medicine",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un3/english-unit3-eps36.mp4"
        },
        {
            "id": "g11eu3v2",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu3",
            "episode": "44",
            "title": " killer diseases",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un3/english-unit3-eps44.mp4"
        },
        {
            "id": "g11eu3v3",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu3",
            "episode": "45",
            "title": "pronunciation-ough",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un3/english-unit3-eps45.mp4"
        },
        {
            "id": "g11eu3v4",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu3",
            "episode": "47",
            "title": "a government health leaflet",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un3/english-unit3-eps47.mp4"
        },
        {
            "id": "g11eu3v5",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu3",
            "episode": "48",
            "title": "a government health leaflet",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un3/english-unit3-eps48.mp4"
        },
        {
            "id": "g11eu3v6",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu3",
            "episode": "49",
            "title": "fluency vs. accuracy",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un3/english-unit3-eps49.mp4"
        },
        {
            "id": "g11eu4v1",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu4",
            "episode": "54",
            "title": "how Hiv is transmitted",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un4/english-unit4-eps54.mp4"
        },
        {
            "id": "g11eu4v2",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu4",
            "episode": "58",
            "title": "role-play saying no",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un4/english-unit4-eps58.mp4"
        },
        {
            "id": "g11eu4v3",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu4",
            "episode": "59",
            "title": " myths about HIV/AIDS",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un4/english-unit4-eps59.mp4"
        },
        {
            "id": "g11eu4v4",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu4",
            "episode": "63",
            "title": "discussion HIV/AIDS issues",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un4/english-unit4-eps63.mp4"
        },
        {
            "id": "g11eu4v5",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu4",
            "episode": "64",
            "title": "describing changes or trends",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un4/english-unit4-eps64.mp4"
        },
        {
            "id": "g11eu4v6",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu4",
            "episode": "65",
            "title": " report on HIV/AIDS",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un4/english-unit4-eps65.mp4"
        },
        {
            "id": "g11eu5v1",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu5",
            "episode": "70",
            "title": "extract from a tourist brochure or website",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un5/english-unit5-eps70.mp4"
        },
        {
            "id": "g11eu5v2",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu5",
            "episode": "74",
            "title": " the Impact of tourism",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un5/english-unit5-eps74.mp4"
        },
        {
            "id": "g11eu5v3",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu5",
            "episode": "76",
            "title": "tourist complaints",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un5/english-unit5-eps76.mp4"
        },
        {
            "id": "g11eu5v4",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu5",
            "episode": "79",
            "title": " role-play-come to Ethiopia!",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un5/english-unit5-eps79.mp4"
        },
        {
            "id": "g11eu5v5",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu5",
            "episode": "82",
            "title": " focus on writing",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un5/english-unit5-eps82.mp4"
        },
        {
            "id": "g11eu5v6",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu5",
            "episode": "79",
            "title": "role-play -come to ethiopia!",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un5/english-unit5-eps79.mp4"
        },
        {
            "id": "g11eu6v1",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu6",
            "episode": "84",
            "title": "A story",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un6/english-unit6-eps84.mp4"
        },
        {
            "id": "g11eu6v2",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu6",
            "episode": "89B ",
            "title": "A narrative",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un6/english-unit6-eps86B.mp4"
        },
        {
            "id": "g11eu6v3",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu6",
            "episode": "90",
            "title": "different kinds of texts",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un6/english-unit6-eps90.mp4"
        },
        {
            "id": "g11eu6v4",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu6",
            "episode": "91",
            "title": "dictionary use- rules for using phrasal verbs",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un6/english-unit6-eps91.mp4"
        },
        {
            "id": "g11eu6v5",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu6",
            "episode": "94",
            "title": " phrasal verbs in and out",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un6/english-unit6-eps94.mp4"
        },
        {
            "id": "g11eu7v1",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu7",
            "episode": "102",
            "title": "the impact of climate change",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un7/english-unit7-eps102.mp4"
        },
        {
            "id": "g11eu7v2",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu7",
            "episode": "103",
            "title": "the impact of climate change in Ethiopia",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un7/english-unit7-eps103.mp4"
        },
        {
            "id": "g11eu7v3",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu7",
            "episode": "107",
            "title": "weather forecast",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un7/english-unit7-eps107.mp4"
        },
        {
            "id": "g11eu7v4",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu7",
            "episode": "111A",
            "title": "why weather forecasts are important",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un7/english-unit7-eps111A.mp4"
        },
        {
            "id": "g11eu7v5",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu7",
            "episode": "111B",
            "title": "A summary",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un7/english-unit7-eps111B.mp4"
        },
        {
            "id": "g11eu7v6",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu7",
            "episode": "112",
            "title": "Writing an information leaflet",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un7/english-unit7-eps112.mp4"
        },
        {
            "id": "g11eu8v1",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu8",
            "episode": "120",
            "title": " focus on vocabulary",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un8/english-unit8-eps120.mp4"
        },
        {
            "id": "g11eu8v2",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu8",
            "episode": "121",
            "title": " focus on reading",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un8/english-unit8-eps121.mp4"
        },
        {
            "id": "g11eu8v3",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu8",
            "episode": "122",
            "title": "the global water shortage",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un8/english-unit8-eps122.mp4"
        },
        {
            "id": "g11eu8v4",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu8",
            "episode": "126",
            "title": "I wish",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un8/english-unit8-eps126.mp4"
        },
        {
            "id": "g11eu8v5",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu8",
            "episode": "127",
            "title": "may I interrupt?",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un8/english-unit8-eps127.mp4"
        },
        {
            "id": "g11eu8v6",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu8",
            "episode": "130",
            "title": "how the world is dealing with water shortage",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un8/english-unit8-eps130.mp4"
        },
        {
            "id": "g11eu9v1",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu9",
            "episode": "134",
            "title": "disability is no obstacle to success",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un9/english-unit9-eps134.mp4"
        },
        {
            "id": "g11eu9v2",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu9",
            "episode": "140",
            "title": "A survey report",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un9/english-unit9-eps140.mp4"
        },
        {
            "id": "g11eu9v3",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu9",
            "episode": "141",
            "title": "phrasal verbs with up and down",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un9/english-unit9-eps141.mp4"
        },
        {
            "id": "g11eu9v4",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu9",
            "episode": "142",
            "title": "disability rights",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un9/english-unit9-eps142.mp4"
        },
        {
            "id": "g11eu9v5",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu9",
            "episode": "146",
            "title": "how should we support the disabled?",
            "vurl": "/.grade11/englishe_gr11/resources/Eng_un9/english-unit9-eps146.mp4"
        },
        {
            "id": "g11eu9v6",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu9",
            "episode": "147",
            "title": " talking about time using wh-Questions+ prepositions",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un9/english-unit9-eps147.mp4"
        },
        {
            "id": "g11eu10v1",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu10",
            "episode": "154",
            "title": "rich and poor",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un10/english-unit10-eps154.mp4"
        },
        {
            "id": "g11eu10v2",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu10",
            "episode": "155",
            "title": " pronunciation- silent consonants",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un10/english-unit10-eps155.mp4"
        },
        {
            "id": "g11eu10v3",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu10",
            "episode": "157",
            "title": "focus on reading",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un10/english-unit10-eps157.mp4"
        },
        {
            "id": "g11eu10v4",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu10",
            "episode": "159",
            "title": "A lecture on development",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un10/english-unit10-eps159.mp4"
        },
        {
            "id": "g11eu10v5",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu10",
            "episode": "162",
            "title": "revision ",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un10/english-unit10-eps162.mp4"
        },
        {
            "id": "g11eu10v6",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu10",
            "episode": "167",
            "title": "an essay",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un10/english-unit10-eps167.mp4"
        },
        {
            "id": "g11eu11v1",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu11",
            "episode": "128B",
            "title": " job advertisements",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un11/english-unit11-eps128.mp4"
        },
        {
            "id": "g11eu11v2",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu11",
            "episode": "130",
            "title": "how the world is dealing with water shortage",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un11/english-unit11-eps130.mp4"
        },
        {
            "id": "g11eu11v3",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu11",
            "episode": "170",
            "title": "interview with the director of an NGO",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un11/english-unit11-eps170.mp4"
        },
        {
            "id": "g11eu11v4",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu11",
            "episode": "174",
            "title": "discussion ",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un11/english-unit11-eps174.mp4"
        },
        {
            "id": "g11eu11v5",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu11",
            "episode": "179",
            "title": " A brochure about your NGO",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un11/english-unit11-eps179.mp4"
        },
        {
            "id": "g11eu11v6",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu11",
            "episode": "180",
            "title": "a day in the life of an aid worker",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un11/english-unit11-eps180.mp4"
        },
        {
            "id": "g11eu12v1",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu12",
            "episode": "189",
            "title": "breakthroughs in space exploration",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un12/english-unit12-eps189.mp4"
        },
        {
            "id": "g11eu12v2",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu12",
            "episode": "190",
            "title": " is space exploration useful?",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un12/english-unit12-eps190.mp4"
        },
        {
            "id": "g11eu12v3",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu12",
            "episode": "194",
            "title": "A magazine article",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un12/english-unit12-eps194.mp4"
        },
        {
            "id": "g11eu12v4",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu12",
            "episode": "195",
            "title": "word building",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un12/english-unit12-eps195.mp4"
        },
        {
            "id": "g11eu12v5",
            "gid": "g11",
            "cid": "g11e",
            "uid": "g11eu12",
            "episode": "196",
            "title": "an opinion essay",
            "vurl": ".grade11/englishe_gr11/resources/Eng_un12/english-unit12-eps196.mp4"
        },
        {
            "id": "g11au1v1",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au1",
            "episode": "1",
            "title": "አንብቦ መረዳት፣ ቋንቋና ጽሕፈት",
            "vurl": ".grade11/Amharic/web/resources/un1/Amharic_.grade11_unit1_eps1.mp4"
        },
        {
            "id": "g11au1v2",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au1",
            "episode": "2",
            "title": "መናገር",
            "vurl": ".grade11/Amharic/web/resources/un1/Amharic_.grade11_unit1_eps2.mp4"
        },
        {
            "id": "g11au1v3",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au1",
            "episode": "3",
            "title": " የንግግር ቋንቋና ጽሕፈት",
            "vurl": ".grade11/Amharic/web/resources/un1/Amharic_.grade11_unit1_eps3.mp4"
        },
        {
            "id": "g11au1v4",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au1",
            "episode": "4",
            "title": "ሥነ ልሣን",
            "vurl": ".grade11/Amharic/web/resources/un1/Amharic_.grade11_unit1_eps4.mp4"
        },
        {
            "id": "g11au2v1",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au2",
            "episode": "3",
            "title": " ጽሕፈት",
            "vurl": ".grade11/Amharic/web/resources/un2/Amharic_.grade11_unit2_eps3.mp4"
        },
        {
            "id": "g11au2v2",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au2",
            "episode": "4",
            "title": "ሰዋሰው፣(ሐረግ ምስረታ)",
            "vurl": ".grade11/Amharic/web/resources/un2/Amharic_.grade11_unit2_eps4.mp4"
        },
        {
            "id": "g11au2v3",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au2",
            "episode": "5",
            "title": "ሰዋሰው፣(ሐረግ ምስረታ)",
            "vurl": ".grade11/Amharic/web/resources/un2/Amharic_.grade11_unit2_eps5.mp4"
        },
        {
            "id": "g11au3v1",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au3",
            "episode": "1",
            "title": "አንብቦ መረዳት",
            "vurl": ".grade11/Amharic/web/resources/un3/Amharic_.grade11_unit3_eps1.mp4"
        },
        {
            "id": "g11au3v2",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au3",
            "episode": "2",
            "title": "መናገር",
            "vurl": ".grade11/Amharic/web/resources/un3/Amharic_.grade11_unit3_eps2.mp4"
        },
        {
            "id": "g11au3v3",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au3",
            "episode": "4",
            "title": "ሥነ ልሣን",
            "vurl": ".grade11/Amharic/web/resources/un3/Amharic_.grade11_unit3_eps4.mp4"
        },
        {
            "id": "g11au3v4",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au3",
            "episode": "5",
            "title": "ስነ-ጽሑፍ",
            "vurl": ".grade11/Amharic/web/resources/un3/Amharic_.grade11_unit3_eps5.mp4"
        },
        {
            "id": "g11au4v1",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au4",
            "episode": "1",
            "title": " አንብቦ መረዳት፣ ትልምና ግጭት",
            "vurl": ".grade11/Amharic/web/resources/un4/Amharic_.grade11_unit4_eps1.mp4"
        },
        {
            "id": "g11au4v2",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au4",
            "episode": "4",
            "title": " መጻፍ",
            "vurl": ".grade11/Amharic/web/resources/un4/Amharic_.grade11_unit4_eps4.mp4"
        },
        {
            "id": "g11au4v3",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au4",
            "episode": "6",
            "title": "ስነ-ጽሑፍ",
            "vurl": ".grade11/Amharic/web/resources/un4/Amharic_.grade11_unit4_eps6.mp4"
        },
        {
            "id": "g11au5v1",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au5",
            "episode": "5",
            "title": "ስነ-ጽሑፍ",
            "vurl": ".grade11/Amharic/web/resources/un5/Amharic_.grade11_unit5_eps5.mp4"
        },
        {
            "id": "g11au6v1",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au6",
            "episode": "1",
            "title": "አንብቦ መረዳት",
            "vurl": ".grade11/Amharic/web/resources/un6/Amharic_.grade11_unit6_eps1.mp4"
        },
        {
            "id": "g11au6v2",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au6",
            "episode": "2",
            "title": "ማዳመጥ",
            "vurl": ".grade11/Amharic/web/resources/un6/Amharic_.grade11_unit6_eps2.mp4"
        },
        {
            "id": "g11au6v3",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au6",
            "episode": "5",
            "title": " ስነ-ጽሑፍ(የዘይቤ )",
            "vurl": ".grade11/Amharic/web/resources/un6/Amharic_.grade11_unit6_eps5.mp4"
        },
        {
            "id": "g11au7v1",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au7",
            "episode": "3",
            "title": "መናገር",
            "vurl": ".grade11/Amharic/web/resources/un7/Amharic_.grade11_unit7_eps3.mp4"
        },
        {
            "id": "g11au7v2",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au7",
            "episode": "4",
            "title": "ጽሕፈት",
            "vurl": ".grade11/Amharic/web/resources/un7/Amharic_.grade11_unit7_eps4.mp4"
        },
        {
            "id": "g11au7v3",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au7",
            "episode": "5",
            "title": "ሥነ ልሣን",
            "vurl": ".grade11/Amharic/web/resources/un7/Amharic_.grade11_unit7_eps5.mp4"
        },
        {
            "id": "g11au8v1",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au8",
            "episode": "2",
            "title": "መናገር",
            "vurl": ".grade11/Amharic/web/resources/un9/Amharic_.grade11_unit9_eps2.mp4"
        },
        {
            "id": "g11au8v2",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au8",
            "episode": "3",
            "title": "ጽሕፈት",
            "vurl": ".grade11/Amharic/web/resources/un9/Amharic_.grade11_unit9_eps3.mp4"
        },
        {
            "id": "g11au9v1",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au9",
            "episode": "2",
            "title": "መናገር",
            "vurl": ".grade11/Amharic/web/resources/un9/Amharic_.grade11_unit9_eps2.mp4"
        },
        {
            "id": "g11au9v2",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au9",
            "episode": "3",
            "title": "ጽሕፈት",
            "vurl": ".grade11/Amharic/web/resources/un9/Amharic_.grade11_unit9_eps3.mp4"
        },
        {
            "id": "g11au10v1",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au10",
            "episode": "1",
            "title": "አንብቦ መረዳት",
            "vurl": ".grade11/Amharic/web/resources/un10/Amharic_.grade11_unit10_eps1.mp4"
        },
        {
            "id": "g11au10v2",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au10",
            "episode": "2",
            "title": "መናገር",
            "vurl": ".grade11/Amharic/web/resources/un10/Amharic_.grade11_unit10_eps2.mp4"
        },
        {
            "id": "g11au10v3",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au10",
            "episode": "3",
            "title": "ጽሕፈት",
            "vurl": ".grade11/Amharic/web/resources/un10/Amharic_.grade11_unit10_eps3.mp4"
        },
        {
            "id": "g11au10v4",
            "gid": "g11",
            "cid": "g11a",
            "uid": "g11au10",
            "episode": "5",
            "vurl": ".grade11/Amharic/web/resources/un10/Amharic_.grade11_unit10_eps5.mp4"
        },
        {
            "id": "g11ciu1v1",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu1",
            "episode": "1",
            "title": "Basic principles of Ethiopian constitution part1",
            "vurl": ".grade11/civics_gr11/resources/civ_un1/civic-unit1-eps1.mp4"
        },
        {
            "id": "g11ciu1v2",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu1",
            "episode": "2",
            "title": "Hard work and development",
            "vurl": ".grade11/civics_gr11/resources/civ_un1/civic-unit1-eps2.mp4"
        },
        {
            "id": "g11ciu1v3",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu1",
            "episode": "4",
            "title": "Human and democratic rights as enshrined in the Ethiopian constitution",
            "vurl": ".grade11/civics_gr11/resources/civ_un1/civic-unit1-eps4.mp4"
        },
        {
            "id": "g11ciu1v4",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu1",
            "episode": "6",
            "title": "Human and democratic rights situation in Africa since independence",
            "vurl": ".grade11/civics_gr11/resources/civ_un1/civic-unit1-eps6.mp4"
        },
        {
            "id": "g11ciu1v5",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu1",
            "episode": "7",
            "title": "Citizens obligation and duties",
            "vurl": ".grade11/civics_gr11/resources/civ_un1/civic-unit1-eps7.mp4"
        },
        {
            "id": "g11ciu1v6",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu1",
            "episode": "8",
            "title": "Features of a democratic system",
            "vurl": ".grade11/civics_gr11/resources/civ_un1/civic-unit1-eps8.mp4"
        },
        {
            "id": "g11ciu1v7",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu1",
            "episode": "11",
            "title": " Federalism part1",
            "vurl": ".grade11/civics_gr11/resources/civ_un1/civic-unit1-eps11.mp4"
        },
        {
            "id": "g11ciu1v8",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu1",
            "episode": "14",
            "title": " Ethiopia and international relations",
            "vurl": ".grade11/civics_gr11/resources/civ_un1/civic-unit1-eps14.mp4"
        },
        {
            "id": "g11ciu2v1",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu2",
            "episode": "1",
            "title": "Rule of law and constitution",
            "vurl": ".grade11/civics_gr11/resources/civ_un2/civic-unit2-eps1.mp4"
        },
        {
            "id": "g11ciu2v2",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu2",
            "episode": "2",
            "title": " The necessity of rule of law",
            "vurl": ".grade11/civics_gr11/resources/civ_un2/civic-unit2-eps2.mp4"
        },
        {
            "id": "g11ciu2v3",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu2",
            "episode": "3",
            "title": "Consequences of the absence of rule of law",
            "vurl": ".grade11/civics_gr11/resources/civ_un2/civic-unit2-eps3.mp4"
        },
        {
            "id": "g11ciu2v4",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu2",
            "episode": "5",
            "title": " Rule of law and conflict prevention and conflict management",
            "vurl": ".grade11/civics_gr11/resources/civ_un2/civic-unit2-eps5.mp4"
        },
        {
            "id": "g11ciu2v5",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu2",
            "episode": "8",
            "title": " Limited and unlimited governments part1",
            "vurl": ".grade11/civics_gr11/resources/civ_un2/civic-unit2-eps8.mp4"
        },
        {
            "id": "g11ciu2v6",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu2",
            "episode": "9",
            "title": " Limited and unlimited governments part2",
            "vurl": ".grade11/civics_gr11/resources/civ_un2/civic-unit2-eps9.mp4"
        },
        {
            "id": "g11ciu2v7",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu2",
            "episode": "10",
            "title": " Limited and unlimited governments part3",
            "vurl": ".grade11/civics_gr11/resources/civ_un2/civic-unit2-eps10.mp4"
        },
        {
            "id": "g11ciu2v8",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu2",
            "episode": "11",
            "title": " Limited and unlimited governments part4",
            "vurl": ".grade11/civics_gr11/resources/civ_un2/civic-unit2-eps11.mp4"
        },
        {
            "id": "g11ciu2v9",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu2",
            "episode": "12",
            "title": "Rule of law and combatting corruption part1",
            "vurl": ".grade11/civics_gr11/resources/civ_un2/civic-unit2-eps12.mp4"
        },
        {
            "id": "g11ciu2v10",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu2",
            "episode": "13",
            "title": "Rule of law and combatting corruption part2",
            "vurl": ".grade11/civics_gr11/resources/civ_un2/civic-unit2-eps13.mp4"
        },
        {
            "id": "g11ciu3v1",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu3",
            "episode": "1",
            "title": "The importance of equality among nation, nationalities and peoples of Ethiopia. part1",
            "vurl": ".grade11/civics_gr11/resources/civ_un3/civic-unit3-eps1.mp4"
        },
        {
            "id": "g11ciu3v2",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu3",
            "episode": "3",
            "title": "The importance of equality among nation, nationalities and peoples of Ethiopia. Part2",
            "vurl": ".grade11/civics_gr11/resources/civ_un3/civic-unit3-eps3.mp4"
        },
        {
            "id": "g11ciu3v3",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu3",
            "episode": "4",
            "title": "The conflicting notion of priorities of equality",
            "vurl": ".grade11/civics_gr11/resources/civ_un3/civic-unit3-eps4.mp4"
        },
        {
            "id": "g11ciu3v4",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu3",
            "episode": "6",
            "title": "Gender issues and discrimination",
            "vurl": ".grade11/civics_gr11/resources/civ_un3/civic-unit3-eps6.mp4"
        },
        {
            "id": "g11ciu3v5",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu3",
            "episode": "7",
            "title": "The tendency to negate unity in diversity",
            "vurl": ".grade11/civics_gr11/resources/civ_un3/civic-unit3-eps7.mp4"
        },
        {
            "id": "g11ciu4v1",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu4",
            "episode": "1",
            "title": "fairness",
            "vurl": ".grade11/civics_gr11/resources/civ_un4/civic-unit4-eps1.mp4"
        },
        {
            "id": "g11ciu4v2",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu4",
            "episode": "2",
            "title": "analysis of equability",
            "vurl": ".grade11/civics_gr11/resources/civ_un4/civic-unit4-eps2.mp4"
        },
        {
            "id": "g11ciu4v3",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu4",
            "episode": "4",
            "title": "Components of the justice system part1",
            "vurl": ".grade11/civics_gr11/resources/civ_un4/civic-unit4-eps4.mp4"
        },
        {
            "id": "g11ciu4v4",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu4",
            "episode": "5",
            "title": "Components of the justice system part2",
            "vurl": ".grade11/civics_gr11/resources/civ_un4/civic-unit4-eps5.mp4"
        },
        {
            "id": "g11ciu4v5",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu4",
            "episode": "7",
            "title": "The working of the court",
            "vurl": ".grade11/civics_gr11/resources/civ_un4/civic-unit4-eps7.mp4"
        },
        {
            "id": "g11ciu5v1",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu5",
            "episode": "1",
            "title": " The basis of patriotism",
            "vurl": ".grade11/civics_gr11/resources/civ_un5/civic-unit5-eps1.mp4"
        },
        {
            "id": "g11ciu5v2",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu5",
            "episode": "3",
            "title": "Responsibilities required from a patriot citizen part1",
            "vurl": ".grade11/civics_gr11/resources/civ_un5/civic-unit5-eps3.mp4"
        },
        {
            "id": "g11ciu5v3",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu5",
            "episode": "6",
            "title": " Issues of development",
            "vurl": ".grade11/civics_gr11/resources/civ_un5/civic-unit5-eps6.mp4"
        },
        {
            "id": "g11ciu5v4",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu5",
            "episode": "8",
            "title": "Voluntarism on a national basis",
            "vurl": ".grade11/civics_gr11/resources/civ_un5/civic-unit5-eps8.mp4"
        },
        {
            "id": "g11ciu6v1",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu6",
            "episode": "1",
            "title": "citizen's obligations",
            "vurl": ".grade11/civics_gr11/resources/civ_un6/civic-unit6-eps1.mp4"
        },
        {
            "id": "g11ciu6v2",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu6",
            "episode": "3",
            "title": "Responsibility for the consequences of one’s own action",
            "vurl": ".grade11/civics_gr11/resources/civ_un6/civic-unit6-eps3.mp4"
        },
        {
            "id": "g11ciu6v3",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu6",
            "episode": "6",
            "title": "legal obligation",
            "vurl": ".grade11/civics_gr11/resources/civ_un6/civic-unit6-eps6.mp4"
        },
        {
            "id": "g11ciu6v4",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu6",
            "episode": "8",
            "title": "protecting the environment",
            "vurl": ".grade11/civics_gr11/resources/civ_un6/civic-unit6-eps8.mp4"
        },
        {
            "id": "g11ciu6v5",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu6",
            "episode": "10",
            "title": " Responsible behavior against HIV/AIDS",
            "vurl": ".grade11/civics_gr11/resources/civ_un6/civic-unit6-eps10.mp4"
        },
        {
            "id": "g11ciu7v1",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu7",
            "episode": "2",
            "title": "Hard work and development",
            "vurl": ".grade11/civics_gr11/resources/civ_un7/civic-unit7-eps2.mp4"
        },
        {
            "id": "g11ciu7v2",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu7",
            "episode": "4",
            "title": "policies and strategies for development",
            "vurl": ".grade11/civics_gr11/resources/civ_un7/civic-unit7-eps4.mp4"
        },
        {
            "id": "g11ciu7v3",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu7",
            "episode": "5",
            "title": " Building- capacity policy and strategy",
            "vurl": ".grade11/civics_gr11/resources/civ_un7/civic-unit7-eps5.mp4"
        },
        {
            "id": "g11ciu7v4",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu7",
            "episode": "6",
            "title": "Globalaization and the Ethiopian economy ",
            "vurl": ".grade11/civics_gr11/resources/civ_un7/civic-unit7-eps6.mp4"
        },
        {
            "id": "g11ciu7v5",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu7",
            "episode": "8",
            "title": "Developing professional skills",
            "vurl": ".grade11/civics_gr11/resources/civ_un7/civic-unit7-eps8.mp4"
        },
        {
            "id": "g11ciu8v1",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu8",
            "episode": "1",
            "title": "Attributes of self- reliance part1",
            "vurl": ".grade11/civics_gr11/resources/civ_un8/civic-unit8-eps1.mp4"
        },
        {
            "id": "g11ciu8v2",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu8",
            "episode": "2",
            "title": "Attributes of self- reliance part2",
            "vurl": ".grade11/civics_gr11/resources/civ_un8/civic-unit8-eps2.mp4"
        },
        {
            "id": "g11ciu8v3",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu8",
            "episode": "4",
            "title": "Dependency and its consequences",
            "vurl": ".grade11/civics_gr11/resources/civ_un8/civic-unit8-eps4.mp4"
        },
        {
            "id": "g11ciu8v4",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu8",
            "episode": "5",
            "title": "Dependency and its consequences part 2",
            "vurl": ".grade11/civics_gr11/resources/civ_un8/civic-unit8-eps5.mp4"
        },
        {
            "id": "g11ciu8v5",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu8",
            "title": "Self- reliance and decision- making",
            "vurl": ".grade11/civics_gr11/resources/civ_un8/civic-unit8-eps7.mp4"
        },
        {
            "id": "g11ciu9v1",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu9",
            "episode": "1",
            "title": "Ways of improving the habit of saving",
            "vurl": ".grade11/civics_gr11/resources/civ_un9/civic-unit9-eps1.mp4"
        },
        {
            "id": "g11ciu9v2",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu9",
            "episode": "4",
            "title": "Traditional and modern institutions for saving in Ethiopia",
            "vurl": ".grade11/civics_gr11/resources/civ_un9/civic-unit9-eps4.mp4"
        },
        {
            "id": "g11ciu9v3",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu9",
            "episode": "5",
            "title": "the effect of saving part 1",
            "vurl": ".grade11/civics_gr11/resources/civ_un9/civic-unit9-eps5.mp4"
        },
        {
            "id": "g11ciu9v4",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu9",
            "episode": "6",
            "title": "Saving as an instrument of investment and development",
            "vurl": ".grade11/civics_gr11/resources/civ_un9/civic-unit9-eps6.mp4"
        },
        {
            "id": "g11ciu10v1",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu10",
            "episode": "2",
            "title": "Active participation",
            "vurl": ".grade11/civics_gr11/resources/civ_un10/civic-unit10-eps2.mp4"
        },
        {
            "id": "g11ciu10v2",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu10",
            "episode": "3",
            "title": "Civic participation",
            "vurl": ".grade11/civics_gr11/resources/civ_un10/civic-unit10-eps3.mp4"
        },
        {
            "id": "g11ciu10v3",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu10",
            "episode": "5",
            "title": "Dispersions that enhance citizen’s awareness in public participation part1",
            "vurl": ".grade11/civics_gr11/resources/civ_un10/civic-unit10-eps5.mp4"
        },
        {
            "id": "g11ciu10v4",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu10",
            "episode": "6",
            "title": "Dispersions that enhance citizen’s awareness in public participation part2",
            "vurl": ".grade11/civics_gr11/resources/civ_un10/civic-unit10-eps6.mp4"
        },
        {
            "id": "g11ciu11v1",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu11",
            "episode": "1",
            "title": "The importance of knowledge",
            "vurl": ".grade11/civics_gr11/resources/civ_un11/civic-unit11-eps1.mp4"
        },
        {
            "id": "g11ciu11v2",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu11",
            "episode": "2",
            "title": "Knowledge and data part1",
            "vurl": ".grade11/civics_gr11/resources/civ_un11/civic-unit11-eps2.mp4"
        },
        {
            "id": "g11ciu11v3",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu11",
            "episode": "3",
            "title": "Knowledge and data part2",
            "vurl": ".grade11/civics_gr11/resources/civ_un11/civic-unit11-eps3.mp4"
        },
        {
            "id": "g11ciu11v4",
            "gid": "g11",
            "cid": "g11ci",
            "uid": "g11ciu11",
            "episode": "7",
            "title": "Truth versus myth",
            "vurl": ".grade11/civics_gr11/resources/civ_un11/civic-unit11-eps7.mp4"
        },
        {
            "id": "g11tu1v1",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu1",
            "episode": "1",
            "title": " Introduction to basic technical drawing",
            "vurl": ".grade11/TD_gr11/resources/TD_un1/t%20d%20unit1-eps1.mp4"
        },
        {
            "id": "g11tdu2v1",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu2",
            "episode": "1",
            "title": "Introduction to selection of drawing materials & instruments",
            "vurl": ".grade11/TD_gr11/resources/TD_un2/t%20d-%20unit2-eps1.mp4"
        },
        {
            "id": "g11tdu3v1",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu3",
            "episode": "1",
            "title": "Alphabet of Lines",
            "vurl": ".grade11/TD_gr11/resources/TD_un3/t%20d%20unit3-eps1.mp4"
        },
        {
            "id": "g11tdu4v1",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu4",
            "episode": "1",
            "title": "Techniques of lettering & single stroke letters",
            "vurl": ".grade11/TD_gr11/resources/TD_un4/t%20d-unit4-eps1.mp4"
        },
        {
            "id": "g11tdu4v2",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu4",
            "episode": "4",
            "title": " Device & application of lettering",
            "vurl": ".grade11/TD_gr11/resources/TD_un4/t%20d-unit4-eps2.mp4"
        },
        {
            "id": "g11tdu5v1",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu5",
            "episode": "1",
            "title": "Introduction & construction of point .line &angle",
            "vurl": ".grade11/TD_gr11/resources/TD_un5/t%20d-unit5-eps1.mp4"
        },
        {
            "id": "g11tdu5v2",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu5",
            "episode": "4",
            "title": "Construction of polygons",
            "vurl": ".grade11/TD_gr11/resources/TD_un5/t%20d-unit5-eps4.mp4"
        },
        {
            "id": "g11tdu5v3",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu5",
            "episode": "7",
            "title": "Circle & tangents",
            "vurl": ".grade11/TD_gr11/resources/TD_un5/t%20d-unit5-eps7.mp4"
        },
        {
            "id": "g11tdu5v4",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu5",
            "episode": "10",
            "title": " Construction of ellipse & the ogee curve",
            "vurl": ".grade11/TD_gr11/resources/TD_un5/t%20d-unit5-eps10.mp4"
        },
        {
            "id": "g11tdu6v1",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu6",
            "episode": "1",
            "title": "projection",
            "vurl": ".grade11/TD_gr11/resources/TD_un6/t%20d-unit6-eps1.mp4"
        },
        {
            "id": "g11tdu6v2",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu6",
            "episode": "2",
            "title": "types of projection",
            "vurl": ".grade11/TD_gr11/resources/TD_un6/t%20d-unit6-eps2.mp4"
        },
        {
            "id": "g11tdu6v3",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu6",
            "episode": "3",
            "title": "views of an object",
            "vurl": ".grade11/TD_gr11/resources/TD_un6/t%20d-unit6-eps3.mp4"
        },
        {
            "id": "g11tdu6v4",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu6",
            "episode": "4",
            "title": "Orthographic projection",
            "vurl": ".grade11/TD_gr11/resources/TD_un6/t%20d-unit6-eps4.mp4"
        },
        {
            "id": "g11tdu6v5",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu6",
            "episode": "5",
            "title": "Orthographic projection",
            "vurl": ".grade11/TD_gr11/resources/TD_un6/t%20d-unit6-eps5.mp4"
        },
        {
            "id": "g11tdu6v6",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu6",
            "episode": "11",
            "title": " Alignment of views, common dimension of views & orientation of the object & choice of views",
            "vurl": ".grade11/TD_gr11/resources/TD_un6/t%20d-unit6-eps11.mp4"
        },
        {
            "id": "g11tdu6v7",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu6",
            "episode": "12",
            "title": "Common dimension of views &orientation of the object & choice of views",
            "vurl": ".grade11/TD_gr11/resources/TD_un6/t%20d-unit6-eps12.mp4"
        },
        {
            "id": "g11tdu6v8",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu6",
            "episode": "13",
            "title": "One view, tow view & three view drawing",
            "vurl": ".grade11/TD_gr11/resources/TD_un6/t%20d-unit6-eps13.mp4"
        },
        {
            "id": "g11tdu6v9",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu6",
            "episode": "20",
            "title": " Edges and surfaces",
            "vurl": ".grade11/TD_gr11/resources/TD_un6/t%20d-unit6-eps20.mp4"
        },
        {
            "id": "g11tdu6v10",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu6",
            "episode": "24",
            "title": "Visualization, problem solving, & possible view problem",
            "vurl": ".grade11/TD_gr11/resources/TD_un6/t%20d-unit6-eps24.mp4"
        },
        {
            "id": "g11tdu7v1",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu7",
            "episode": "1",
            "title": "Theory of projection",
            "vurl": ".grade11/TD_gr11/resources/TD_un7/t%20d-unit7-eps1.mp4"
        },
        {
            "id": "g11tdu7v2",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu7",
            "episode": "2",
            "title": "Circles, arcs& irregular curves in isometric drawing",
            "vurl": ".grade11/TD_gr11/resources/TD_un7/t%20d-unit7-eps2.mp4"
        },
        {
            "id": "g11tdu7v3",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu7",
            "episode": "6",
            "title": " Axonometric projection",
            "vurl": ".grade11/TD_gr11/resources/TD_un7/t%20d-unit7-eps6.mp4"
        },
        {
            "id": "g11tdu7v4",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu7",
            "episode": "8",
            "title": "Isometric projection & isometric drawing",
            "vurl": ".grade11/TD_gr11/resources/TD_un7/t%20d-unit7-eps8.mp4"
        },
        {
            "id": "g11tdu7v5",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11tdu7",
            "episode": "10",
            "title": "Circles, arcs& irregular curves in isometric drawing",
            "vurl": ".grade11/TD_gr11/resources/TD_un7/t%20d-unit7-eps10.mp4"
        },
        {
            "id": "g11tdu7v6",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11dtu7",
            "episode": "14",
            "title": "Oblique projection",
            "vurl": ".grade11/TD_gr11/resources/TD_un7/t%20d-unit7-eps14.mp4"
        },
        {
            "id": "g11tdu7v7",
            "gid": "g11",
            "cid": "g11td",
            "uid": "g11dtu7",
            "episode": "18",
            "title": " Perspective projection",
            "vurl": ".grade11/TD_gr11/resources/TD_un7/t%20d-unit7-eps18.mp4"
        },
        {
            "id": "g11msu1v1",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu1",
            "episode": "1",
            "title": "Revision on relations",
            "vurl": ".grade11/maths_gr11/web/resources/math_u1/maths-unit1-eps1.mp4"
        },
        {
            "id": "g11msu1v2",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu1",
            "episode": "4",
            "title": " Some additional types of function",
            "vurl": ".grade11/maths_gr11/web/resources/math_u1/maths-unit1-eps4.mp4"
        },
        {
            "id": "g11msu1v3",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu1",
            "episode": "7",
            "title": "Classification of functions",
            "vurl": ".grade11/maths_gr11/web/resources/math_u1/maths-unit1-eps7.mp4"
        },
        {
            "id": "g11msu1v4",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu1",
            "episode": "13",
            "title": "Inverse functions and their graphs part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u1/maths-unit1-eps13.mp4"
        },
        {
            "id": "g11msu1v5",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu1",
            "episode": "14",
            "title": "Inverse functions and their graphs part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u1/maths-unit1-eps14.mp4"
        },
        {
            "id": "g11msu1v6",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu2",
            "episode": "1",
            "title": " Simplification of rational expressions",
            "vurl": "maths_gr11/web/resources/math_u2/maths-unit2-eps1.mp4"
        },
        {
            "id": "g11msu2v1",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu2",
            "episode": "5",
            "title": " Rational equations",
            "vurl": ".grade11/maths_gr11/web/resources/math_u2/maths-unit2-eps5.mp4"
        },
        {
            "id": "g11msu2v2",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu2",
            "episode": "8",
            "title": "Rational functions and their graphs part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u2/maths-unit2-eps8.mp4"
        },
        {
            "id": "g11msu2v3",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu2",
            "episode": "11",
            "title": "Rational functions and their graphs part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u2/maths-unit2-eps11.mp4"
        },
        {
            "id": "g11msu3v1",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu3",
            "episode": "1",
            "title": "Straight line",
            "vurl": ".grade11/maths_gr11/web/resources/math_u3/maths-unit3-eps1.mp4"
        },
        {
            "id": "g11msu3v2",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu3",
            "episode": "4",
            "title": "Cone and sections of a cone",
            "vurl": ".grade11/maths_gr11/web/resources/math_u3/maths-unit3-eps4.mp4"
        },
        {
            "id": "g11msu3v3",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu3",
            "episode": "6",
            "title": "Circles part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u3/maths-unit3-eps6.mp4"
        },
        {
            "id": "g11msu3v4",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu3",
            "episode": "8",
            "title": "Circles part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u3/maths-unit3-eps8.mp4"
        },
        {
            "id": "g11msu3v5",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu3",
            "episode": "10",
            "title": "parabolas",
            "vurl": ".grade11/maths_gr11/web/resources/math_u3/maths-unit3-eps10.mp4"
        },
        {
            "id": "g11msu3v6",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu3",
            "episode": "13",
            "title": "ellipess",
            "vurl": ".grade11/maths_gr11/web/resources/math_u3/maths-unit3-eps13.mp4"
        },
        {
            "id": "g11msu3v7",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu3",
            "episode": "17",
            "title": "Hyperbolas part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u3/maths-unit3-eps17.mp4"
        },
        {
            "id": "g11msu3v8",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu3",
            "episode": "19",
            "title": "Hyperbolas part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u3/maths-unit3-eps19.mp4"
        },
        {
            "id": "g11msu4v1",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu4",
            "episode": "1",
            "title": "Logic part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u4/maths-unit4-eps1.mp4"
        },
        {
            "id": "g11msu4v2",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu4",
            "episode": "4",
            "title": "Logic part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u4/maths-unit4-eps4.mp4"
        },
        {
            "id": "g11msu4v3",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu4",
            "episode": "6",
            "title": "Logic part 3",
            "vurl": ".grade11/maths_gr11/web/resources/math_u4/maths-unit4-eps6.mp4"
        },
        {
            "id": "g11msu4v4",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu4",
            "episode": "9",
            "title": "Logic part 9",
            "vurl": ".grade11/maths_gr11/web/resources/math_u4/maths-unit4-eps9.mp4"
        },
        {
            "id": "g11msu4v5",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu4",
            "episode": "14",
            "title": " Arguments and validity",
            "vurl": ".grade11/maths_gr11/web/resources/math_u4/maths-unit4-eps14.mp4"
        },
        {
            "id": "g11msu5v1",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu5",
            "episode": "1",
            "title": "Types of data",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps1.mp4"
        },
        {
            "id": "g11msu5v2",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu5",
            "episode": "4",
            "title": "Frequency distribution",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps4.mp4"
        },
        {
            "id": "g11msu5v3",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu5",
            "episode": "7",
            "title": " Measure of location for grouped data",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps7.mp4"
        },
        {
            "id": "g11msu5v4",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu5",
            "episode": "10",
            "title": "Measure of location for grouped data part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps10.mp4"
        },
        {
            "id": "g11msu5v5",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu5",
            "episode": "12",
            "title": "Measures of dispersion",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps12.mp4"
        },
        {
            "id": "g11msu5v6",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu5",
            "episode": "15",
            "title": " probability",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps15.mp4"
        },
        {
            "id": "g11msu5v7",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu5",
            "episode": "16",
            "title": " permutations",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps16.mp4"
        },
        {
            "id": "g11msu5v8",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu5",
            "episode": "19",
            "title": "combination ",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps19.mp4"
        },
        {
            "id": "g11msu5v9",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu5",
            "episode": "21",
            "title": "Random experiments",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps21.mp4"
        },
        {
            "id": "g11msu5v10",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu5",
            "episode": "24",
            "title": "Random events",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps24.mp4"
        },
        {
            "id": "g11msu6v1",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu5",
            "episode": "27",
            "title": "Occurrences",
            "vurl": ".grade11/maths_gr11/web/resources/math_u5/maths-unit5-eps27.mp4"
        },
        {
            "id": "g11msu6v2",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu6",
            "episode": "1",
            "title": "Matrices",
            "vurl": ".grade11/maths_gr11/web/resources/math_u6/maths-unit6-eps1.mp4"
        },
        {
            "id": "g11msu6v3",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu6",
            "episode": "3",
            "title": "Working with matrices",
            "vurl": ".grade11/maths_gr11/web/resources/math_u6/maths-unit6-eps3.mp4"
        },
        {
            "id": "g11msu6v4",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu6",
            "episode": "5",
            "title": "determinantes",
            "vurl": ".grade11/maths_gr11/web/resources/math_u6/maths-unit6-eps5.mp4"
        },
        {
            "id": "g11msu6v5",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu6",
            "episode": "8",
            "title": "The properties of determinant",
            "vurl": ".grade11/maths_gr11/web/resources/math_u6/maths-unit6-eps8.mp4"
        },
        {
            "id": "g11msu6v6",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu6",
            "episode": "15",
            "title": "Systems of equations with two or three variables part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u6/maths-unit6-eps15.mp4"
        },
        {
            "id": "g11msu6v7",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu6",
            "episode": "16",
            "title": "Systems of equations with two or three variables part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u6/maths-unit6-eps16.mp4"
        },
        {
            "id": "g11msu6v8",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu6",
            "episode": "20",
            "title": "Cramer’s rule",
            "vurl": ".grade11/maths_gr11/web/resources/math_u6/maths-unit6-eps20.mp4"
        },
        {
            "id": "g11msu7v1",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu7",
            "episode": "1",
            "title": "The concept of complex numbers",
            "vurl": ".grade11/maths_gr11/web/resources/math_u7/maths-unit7-eps1.mp4"
        },
        {
            "id": "g11msu7v2",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu7",
            "episode": "3",
            "title": "The concept of complex numbers part1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u7/maths-unit7-eps3.mp4"
        },
        {
            "id": "g11msu7v3",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu7",
            "episode": "5",
            "title": "The concept of complex numbers part2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u7/maths-unit7-eps5.mp4"
        },
        {
            "id": "g11msu7v4",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu7",
            "episode": "11",
            "title": "Argand diagrams and polar representations of complex numbers",
            "vurl": ".grade11/maths_gr11/web/resources/math_u7/maths-unit7-eps11.mp4"
        },
        {
            "id": "g11msu8v1",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu8",
            "episode": "1",
            "title": "Vectors and scalars part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u8/maths-unit8-eps1.mp4"
        },
        {
            "id": "g11msu8v2",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu8",
            "episode": "3",
            "title": "Vectors and scalars part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u8/maths-unit8-eps3.mp4"
        },
        {
            "id": "g11msu8v3",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu8",
            "episode": "4",
            "title": "Representations of a vector",
            "vurl": ".grade11/maths_gr11/web/resources/math_u8/maths-unit8-eps4.mp4"
        },
        {
            "id": "g11msu8v4",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu8",
            "episode": "8",
            "title": "Vectors and Transformations of the Plane",
            "vurl": ".grade11/maths_gr11/web/resources/math_u8/maths-unit8-eps8.mp4"
        },
        {
            "id": "g11msu8v5",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu8",
            "episode": "10",
            "title": " Application of vector part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u8/maths-unit8-eps10.mp4"
        },
        {
            "id": "g11msu8v6",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu8",
            "episode": "13",
            "title": " Transformation of the plane part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u8/maths-unit8-eps13.mp4"
        },
        {
            "id": "g11msu8v7",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu8",
            "episode": "15",
            "title": "Transformation of the plane part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u8/maths-unit8-eps15.mp4"
        },
        {
            "id": "g11msu8v8",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu8",
            "episode": "18",
            "title": "Transformation of the plane part 3",
            "vurl": ".grade11/maths_gr11/web/resources/math_u8/maths-unit8-eps18.mp4"
        },
        {
            "id": "g11msu9v1",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu9",
            "episode": "1",
            "title": " The functions y= secx, y= csc x, and y= cotx part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u9/maths-unit9-eps1.mp4"
        },
        {
            "id": "g11msu9v2",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu9",
            "episode": "3",
            "title": " The functions y= secx, y= csc x, and y= cotx part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u9/maths-unit9-eps3.mp4"
        },
        {
            "id": "g11msu9v3",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu9",
            "episode": "6",
            "title": "Inverse of trigonometric functions",
            "vurl": ".grade11/maths_gr11/web/resources/math_u9/maths-unit9-eps6.mp4"
        },
        {
            "id": "g11msu9v4",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu9",
            "episode": "10",
            "title": " Graphs of some trigonometric functions part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u9/maths-unit9-eps10.mp4"
        },
        {
            "id": "g11msu9v5",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu9",
            "episode": "12",
            "title": " Graphs of some trigonometric functions part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u9/maths-unit9-eps12.mp4"
        },
        {
            "id": "g11msu9v6",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu9",
            "episode": "15",
            "title": "Applications of trigonometric functions part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u9/maths-unit9-eps15.mp4"
        },
        {
            "id": "g11msu9v7",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu9",
            "episode": "18",
            "title": "Applications of trigonometric functions part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u9/maths-unit9-eps18.mp4"
        },
        {
            "id": "g11msu10v1",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu10",
            "episode": "1",
            "title": "Graphical solutions of system of linear inequalities",
            "vurl": ".grade11/maths_gr11/web/resources/math_u10/maths-unit10-eps1.mp4"
        },
        {
            "id": "g11msu10v2",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu10",
            "episode": "5",
            "title": " Real life liner programming problems part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u10/maths-unit10-eps5.mp4"
        },
        {
            "id": "g11msu10v3",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu10",
            "episode": "7",
            "title": " Maximum and minimum values part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u10/maths-unit10-eps7.mp4"
        },
        {
            "id": "g11msu10v4",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu10",
            "episode": "10",
            "title": " Real life liner programming problems ",
            "vurl": ".grade11/maths_gr11/web/resources/math_u10/maths-unit10-eps10.mp4"
        },
        {
            "id": "g11msu10v5",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu10",
            "episode": "13",
            "title": " Real life liner programming problems part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u10/maths-unit10-eps13.mp4"
        },
        {
            "id": "g11msu11v1",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu11",
            "episode": "1",
            "title": "Basic mathematical concepts in business",
            "vurl": ".grade11/maths_gr11/web/resources/math_u11/maths-unit11-eps1.mp4"
        },
        {
            "id": "g11msu11v2",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu11",
            "episode": "4",
            "title": " Compound interest and depreciation part 1s",
            "vurl": ".grade11/maths_gr11/web/resources/math_u11/maths-unit11-eps4.mp4"
        },
        {
            "id": "g11msu11v3",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu11",
            "episode": "6",
            "title": " Compound interest and depreciation part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u11/maths-unit11-eps6.mp4"
        },
        {
            "id": "g11msu11v4",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu11",
            "episode": "8",
            "title": "Saving, investing and borrowing money part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u11/maths-unit11-eps8.mp4"
        },
        {
            "id": "g11msu11v5",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu11",
            "episode": "11",
            "title": "Saving, investing and borrowing money part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u11/maths-unit11-eps11.mp4"
        },
        {
            "id": "g11msu11v6",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu11",
            "episode": "15",
            "title": " Taxation part 1",
            "vurl": ".grade11/maths_gr11/web/resources/math_u11/maths-unit11-eps15.mp4"
        },
        {
            "id": "g11msu11v7",
            "gid": "g11",
            "cid": "g11ms",
            "uid": "g11msu11",
            "episode": "17",
            "title": " Taxation part 2",
            "vurl": ".grade11/maths_gr11/web/resources/math_u11/maths-unit11-eps17.mp4"
        },
        {
            "id": "g11gu2v1",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu2",
            "episode": "1",
            "title": " Drawing contour lines from spot heights part1",
            "vurl": ".grade11/geography_gr11/resources/geo_un2/geo-unit2-eps1-part1.mp4"
        },
        {
            "id": "g11gu2v2",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu2",
            "episode": "1",
            "title": " Drawing contour lines from spot heights part2",
            "vurl": ".grade11/geography_gr11/resources/geo_un2/geo-unit2-eps1-part2.mp4"
        },
        {
            "id": "g11gu2v3",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu2",
            "episode": "3",
            "title": " Drawing relief cross section (profile)",
            "vurl": ".grade11/geography_gr11/resources/geo_un2/geo-unit2-eps3.mp4"
        },
        {
            "id": "g11gu2v4",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu2",
            "episode": "4",
            "title": "intervisibility",
            "vurl": ".grade11/geography_gr11/resources/geo_un2/geo-unit2-eps4.mp4"
        },
        {
            "id": "g11gu2v5",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu2",
            "episode": "5",
            "title": "Landforms on a contour map part1",
            "vurl": ".grade11/geography_gr11/resources/geo_un2/geo-unit2-eps5-part1.mp4"
        },
        {
            "id": "g11gu2v6",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu2",
            "episode": "5",
            "title": "Landforms on a contour map part2",
            "vurl": ".grade11/geography_gr11/resources/geo_un2/geo-unit2-eps5-part2.mp4"
        },
        {
            "id": "g11gu2v7",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu2",
            "episode": "7",
            "title": "Drainage on maps watershed and catchment areas",
            "vurl": ".grade11/geography_gr11/resources/geo_un2/geo-unit2-eps7.mp4"
        },
        {
            "id": "g11gu2v8",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu2",
            "episode": "8",
            "title": "Drainage pattern",
            "vurl": ".grade11/geography_gr11/resources/geo_un2/geo-unit2-eps8.mp4"
        },
        {
            "id": "g11gu2v9",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu2",
            "episode": "9",
            "title": "River capture and stages of river valley development",
            "vurl": ".grade11/geography_gr11/resources/geo_un2/geo-unit2-eps9.mp4"
        },
        {
            "id": "g11gu2v10",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu2",
            "episode": "10",
            "title": "The study of human-made features on maps part 1",
            "vurl": ".grade11/geography_gr11/resources/geo_un2/geo-unit2-eps10-part1.mp4"
        },
        {
            "id": "g11gu2v11",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu2",
            "episode": "12",
            "title": "The study of communication on maps part 1",
            "vurl": ".grade11/geography_gr11/resources/geo_un2/geo-unit2-eps12-part1.mp4"
        },
        {
            "id": "g11gu2v12",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu2",
            "episode": "12",
            "title": "The study of communication on maps part 2",
            "vurl": ".grade11/geography_gr11/resources/geo_un2/geo-unit2-eps12-part2.mp4"
        },
        {
            "id": "g11gu2v13",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu2",
            "episode": "14",
            "title": "Climbing capacities of vehicles",
            "vurl": ".grade11/geography_gr11/resources/geo_un2/geo-unit2-eps14.mp4"
        },
        {
            "id": "g11gu2v14",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu2",
            "episode": "15",
            "title": "Geographical information system(GIS)",
            "vurl": ".grade11/geography_gr11/resources/geo_un2/geo-unit2-eps15.mp4"
        },
        {
            "id": "g11gu3v1",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu3",
            "episode": "1",
            "title": " Lakes and swamps of Africa",
            "vurl": ".grade11/geography_gr11/resources/geo_un3/geo-unit3-eps1.mp4"
        },
        {
            "id": "g11gu3v2",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu3",
            "episode": "2",
            "title": "Geological history of Africa",
            "vurl": ".grade11/geography_gr11/resources/geo_un3/geo-unit3-eps2.mp4"
        },
        {
            "id": "g11gu3v3",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu3",
            "episode": "3",
            "title": " The relief structure of Africa",
            "vurl": ".grade11/geography_gr11/resources/geo_un3/geo-unit3-eps3.mp4"
        },
        {
            "id": "g11gu3v4",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu3",
            "episode": "4",
            "title": " Controls of weather and climate in Africa",
            "vurl": ".grade11/geography_gr11/resources/geo_un3/geo-unit3-eps4.mp4"
        },
        {
            "id": "g11gu3v5",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu3",
            "episode": "5",
            "title": "Temperature conditions in Africa",
            "vurl": ".grade11/geography_gr11/resources/geo_un3/geo-unit3-eps5.mp4"
        },
        {
            "id": "g11gu3v6",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu3",
            "episode": "6",
            "title": "Rainfall distribution in Africa",
            "vurl": ".grade11/geography_gr11/resources/geo_un3/geo-unit3-eps6.mp4"
        },
        {
            "id": "g11gu3v7",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu3",
            "episode": "7",
            "title": " Climatic regions of Africa",
            "vurl": ".grade11/geography_gr11/resources/geo_un3/geo-unit3-eps7.mp4"
        },
        {
            "id": "g11gu3v8",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu3",
            "episode": "8",
            "title": "Drought in Africa",
            "vurl": ".grade11/geography_gr11/resources/geo_un3/geo-unit3-eps8.mp4"
        },
        {
            "id": "g11gu3v9",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu3",
            "episode": "9",
            "title": "The major rivers and drainage systems of Africa",
            "vurl": ".grade11/geography_gr11/resources/geo_un3/geo-unit3-eps9.mp4"
        },
        {
            "id": "g11gu3v10",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu3",
            "episode": "10",
            "title": "General characteristics of African rivers",
            "vurl": ".grade11/geography_gr11/resources/geo_un3/geo-unit3-eps10.mp4"
        },
        {
            "id": "g11gu3v11",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu3",
            "episode": "11",
            "title": " Lakes and swamps of Africa",
            "vurl": ".grade11/geography_gr11/resources/geo_un3/geo-unit3-eps11.mp4"
        },
        {
            "id": "g11gu3v12",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu3",
            "episode": "12",
            "title": " The uses of African rivers and lakes",
            "vurl": ".grade11/geography_gr11/resources/geo_un3/geo-unit3-eps12.mp4"
        },
        {
            "id": "g11gu3v13",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu3",
            "episode": "13",
            "title": "Natural vegetation and wild animals of Africa",
            "vurl": ".grade11/geography_gr11/resources/geo_un3/geo-unit3-eps13.mp4"
        },
        {
            "id": "g11gu3v14",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu3",
            "episode": "14",
            "title": " Major soil types of Africa",
            "vurl": ".grade11/geography_gr11/resources/geo_un3/geo-unit3-eps14.mp4"
        },
        {
            "id": "g11gu3v15",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu3",
            "episode": "15",
            "title": "Problems and conservation measures of soils in africa",
            "vurl": ".grade11/geography_gr11/resources/geo_un3/geo-unit3-eps15.mp4"
        },
        {
            "id": "g11gu4v1",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu4",
            "episode": "1",
            "title": "Population size, growth and distribution",
            "vurl": ".grade11/geography_gr11/resources/geo_un4/geo-unit4-eps1.mp4"
        },
        {
            "id": "g11gu4v2",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu4",
            "episode": "2",
            "title": "Determinations of population change in Africa",
            "vurl": ".grade11/geography_gr11/resources/geo_un4/geo-unit4-eps2.mp4"
        },
        {
            "id": "g11gu4v3",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu4",
            "episode": "3",
            "title": " Characteristics of African population",
            "vurl": ".grade11/geography_gr11/resources/geo_un4/geo-unit4-eps3.mp4"
        },
        {
            "id": "g11gu4v4",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu4",
            "episode": "4",
            "title": " Migration and urbanization in Africa part1",
            "vurl": ".grade11/geography_gr11/resources/geo_un4/geo-unit4-eps4-part1.mp4"
        },
        {
            "id": "g11gu4v5",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu4",
            "episode": "6",
            "title": "Concept of economic growth and development",
            "vurl": ".grade11/geography_gr11/resources/geo_un4/geo-unit4-eps6.mp4"
        },
        {
            "id": "g11gu4v6",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu4",
            "episode": "7",
            "title": " Major resources of Africa part1",
            "vurl": ".grade11/geography_gr11/resources/geo_un4/geo-unit4-eps7-part1.mp4"
        },
        {
            "id": "g11gu4v7",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu4",
            "episode": "9",
            "title": "Characteristics of Africa economy",
            "vurl": ".grade11/geography_gr11/resources/geo_un4/geo-unit4-eps9.mp4"
        },
        {
            "id": "g11gu4v8",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu4",
            "episode": "`10",
            "title": "Present features of African socio-economic development",
            "vurl": ".grade11/geography_gr11/resources/geo_un4/geo-unit4-eps10.mp4"
        },
        {
            "id": "g11gu4v9",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu4",
            "episode": "11",
            "title": "Challenges and prospects of economic development in Africa",
            "vurl": ".grade11/geography_gr11/resources/geo_un4/geo-unit4-eps11.mp4"
        },
        {
            "id": "g11gu4v10",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu4",
            "episode": "12",
            "title": "Major resources of africa",
            "vurl": ".grade11/geography_gr11/resources/geo_un4/geo-unit4-eps12.mp4"
        },
        {
            "id": "g11gu4v11",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu4",
            "episode": "13",
            "title": " Natural resources exploitation and mineral extraction methods in Africa",
            "vurl": ".grade11/geography_gr11/resources/geo_un4/geo-unit4-eps13.mp4"
        },
        {
            "id": "g11gu4v12",
            "gid": "g11",
            "cid": "g11g",
            "uid": "g11gu4",
            "episode": "14",
            "title": "Resource utilization and conflict management in Africa part1",
            "vurl": ".grade11/geography_gr11/resources/geo_un4/geo-unit4-eps14-part2.mp4"
        },
        {
            "id": "g11ecu1v1",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu1",
            "episode": "1",
            "title": " Meaning and scope of economics",
            "vurl": ".grade11/economics_gr11/resources/eco_un1/eco-unit1-eps1.mp4"
        },
        {
            "id": "g11ecu1v2",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu1",
            "episode": "2",
            "title": "Nature, branches & significance of economics",
            "vurl": ".grade11/economics_gr11/resources/eco_un1/eco-unit1-eps2.mp4"
        },
        {
            "id": "g11ecu1v3",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu1",
            "episode": "7",
            "title": "The production possibility curve",
            "vurl": ".grade11/economics_gr11/resources/eco_un1/eco-unit1-eps7.mp4"
        },
        {
            "id": "g11ecu1v4",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu1",
            "episode": "12",
            "title": "Circular flow of economic activities",
            "vurl": ".grade11/economics_gr11/resources/eco_un1/eco-unit1-eps12.mp4"
        },
        {
            "id": "g11ecu2v1",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu2",
            "episode": "1",
            "title": " Theory of demand the demand schedule & curve",
            "vurl": ".grade11/economics_gr11/resources/eco_un2/eco-unit2-eps1.mp4"
        },
        {
            "id": "g11ecu2v2",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu2",
            "episode": "2",
            "title": "Theory of demand: the demand function & the law of demand",
            "vurl": ".grade11/economics_gr11/resources/eco_un2/eco-unit2-eps2.mp4"
        },
        {
            "id": "g11ecu2v3",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu2",
            "episode": "4",
            "title": " Main types of demand",
            "vurl": ".grade11/economics_gr11/resources/eco_un2/eco-unit2-eps4.mp4"
        },
        {
            "id": "g11ecu2v4",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu2",
            "episode": "5",
            "title": " Change in demand and quantity demanded",
            "vurl": ".grade11/economics_gr11/resources/eco_un2/eco-unit2-eps5.mp4"
        },
        {
            "id": "g11ecu2v5",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu2",
            "episode": "6",
            "title": "Theory of supply the supply schedule, supply curve & supply function",
            "vurl": ".grade11/economics_gr11/resources/eco_un2/eco-unit2-eps6.mp4"
        },
        {
            "id": "g11ecu2v6",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu2",
            "episode": "8",
            "title": " Change in supply and quantity supplied",
            "vurl": ".grade11/economics_gr11/resources/eco_un2/eco-unit2-eps8.mp4"
        },
        {
            "id": "g11ecu2v7",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu2",
            "episode": "9",
            "title": " Market equilibrium",
            "vurl": ".grade11/economics_gr11/resources/eco_un2/eco-unit2-eps9.mp4"
        },
        {
            "id": "g11ecu2v8",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu2",
            "episode": "10",
            "title": " Effects of changes in demand and supply on equilibrium price and quantity",
            "vurl": ".grade11/economics_gr11/resources/eco_un2/eco-unit2-eps10.mp4"
        },
        {
            "id": "g11ecu2v9",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu2",
            "episode": "11",
            "title": "Simultaneous changes in supply & demand & their effects on equilibrium price and quantity",
            "vurl": ".grade11/economics_gr11/resources/eco_un2/eco-unit2-eps11.mp4"
        },
        {
            "id": "g11ecu2v10",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu2",
            "episode": "12",
            "title": "Effects of government intervention on market equa",
            "vurl": ".grade11/economics_gr11/resources/eco_un2/eco-unit2-eps12.mp4"
        },
        {
            "id": "g11ecu2v11",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu2",
            "episode": "15",
            "title": "Ranges of elasticity on a linear demand curve",
            "vurl": ".grade11/economics_gr11/resources/eco_un2/eco-unit2-eps15.mp4"
        },
        {
            "id": "g11ecu2v12",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu2",
            "episode": "16",
            "title": "Income and cross elasticity of demand",
            "vurl": ".grade11/economics_gr11/resources/eco_un2/eco-unit2-eps16.mp4"
        },
        {
            "id": "g11ecu2v13",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu2",
            "episode": "18",
            "title": " Types of elasticity of supply",
            "vurl": ".grade11/economics_gr11/resources/eco_un2/eco-unit2-eps18.mp4"
        },
        {
            "id": "g11ecu3v1",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu3",
            "episode": "4",
            "title": "The relationship between total utility & marginal utility",
            "vurl": ".grade11/economics_gr11/resources/eco_un3/eco-unit3-eps4.mp4"
        },
        {
            "id": "g11ecu3v2",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu3",
            "episode": "9",
            "title": " The indifference curve approach",
            "vurl": ".grade11/economics_gr11/resources/eco_un3/eco-unit3-eps9.mp4"
        },
        {
            "id": "g11ecu3v3",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu3",
            "episode": "12",
            "title": "Mathematical analysis of consumers equilibrium",
            "vurl": ".grade11/economics_gr11/resources/eco_un3/eco-unit3-eps12.mp4"
        },
        {
            "id": "g11ecu3v4",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu3",
            "episode": "13",
            "title": " Properties of the indifference curve",
            "vurl": ".grade11/economics_gr11/resources/eco_un3/eco-unit3-eps13.mp4"
        },
        {
            "id": "g11ecu3v5",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu3",
            "episode": "14",
            "title": "Marginal rate of substitution",
            "vurl": ".grade11/economics_gr11/resources/eco_un3/eco-unit3-eps14.mp4"
        },
        {
            "id": "g11ecu3v6",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu3",
            "episode": "15",
            "title": "The budget or ISO expenditure line",
            "vurl": ".grade11/economics_gr11/resources/eco_un3/eco-unit3-eps15.mp4"
        },
        {
            "id": "g11ecu3v7",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu3",
            "episode": "16",
            "title": "The effect of change in income/price of goods",
            "vurl": ".grade11/economics_gr11/resources/eco_un3/eco-unit3-eps16.mp4"
        },
        {
            "id": "g11ecu3v8",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu3",
            "episode": "17",
            "title": "The income consumption curve",
            "vurl": ".grade11/economics_gr11/resources/eco_un3/eco-unit3-eps17.mp4"
        },
        {
            "id": "g11ecu3v9",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu3",
            "episode": "18",
            "title": "The price consumption curve",
            "vurl": ".grade11/economics_gr11/resources/eco_un3/eco-unit3-eps18.mp4"
        },
        {
            "id": "g11ecu4v9",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu4",
            "episode": "2",
            "title": " Production function with one variable input",
            "vurl": ".grade11/economics_gr11/resources/eco_un4/eco-unit4-eps2.mp4"
        },
        {
            "id": "g11ecu4v10",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu4",
            "episode": "3",
            "title": " Total, marginal & average product",
            "vurl": ".grade11/economics_gr11/resources/eco_un4/eco-unit4-eps3.mp4"
        },
        {
            "id": "g11ecu4v11",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu4",
            "episode": "4",
            "title": "Production function with two variable input",
            "vurl": ".grade11/economics_gr11/resources/eco_un4/eco-unit4-eps4.mp4"
        },
        {
            "id": "g11ecu4v12",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu4",
            "episode": "6",
            "title": "Economic region of production",
            "vurl": ".grade11/economics_gr11/resources/eco_un4/eco-unit4-eps6.mp4"
        },
        {
            "id": "g11ecu4v13",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu4",
            "episode": "7",
            "title": " Marginal rate of technical substitution",
            "vurl": ".grade11/economics_gr11/resources/eco_un4/eco-unit4-eps7.mp4"
        },
        {
            "id": "g11ecu4v14",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu4",
            "episode": "8",
            "title": "Production with all variable inputs (returns to scale)",
            "vurl": ".grade11/economics_gr11/resources/eco_un4/eco-unit4-eps8.mp4"
        },
        {
            "id": "g11ecu4v15",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu4",
            "episode": "9",
            "title": "Technological change on production function",
            "vurl": ".grade11/economics_gr11/resources/eco_un4/eco-unit4-eps9.mp4"
        },
        {
            "id": "g11ecu4v16",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu4",
            "episode": "13",
            "title": " Time element and const",
            "vurl": ".grade11/economics_gr11/resources/eco_un4/eco-unit4-eps13.mp4"
        },
        {
            "id": "g11ecu4v17",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu4",
            "episode": "15",
            "title": " Average costs in the short run",
            "vurl": ".grade11/economics_gr11/resources/eco_un4/eco-unit4-eps15.mp4"
        },
        {
            "id": "g11ecu4v18",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu4",
            "episode": "17",
            "title": "Marginal cost in the short run",
            "vurl": ".grade11/economics_gr11/resources/eco_un4/eco-unit4-eps17.mp4"
        },
        {
            "id": "g11ecu4v19",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu4",
            "episode": "18",
            "title": " Relationship between average and marginal cost",
            "vurl": ".grade11/economics_gr11/resources/eco_un4/eco-unit4-eps18.mp4"
        },
        {
            "id": "g11ecu4v20",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu4",
            "episode": "19",
            "title": " Relationship between product cost",
            "vurl": ".grade11/economics_gr11/resources/eco_un4/eco-unit4-eps19.mp4"
        },
        {
            "id": "g11ecu4v21",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu4",
            "episode": "20",
            "title": "Long run cost of production",
            "vurl": ".grade11/economics_gr11/resources/eco_un4/eco-unit4-eps20.mp4"
        },
        {
            "id": "g11ecu5v1",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu5",
            "episode": "2",
            "title": " Revenue of a perfectly competitive market",
            "vurl": ".grade11/economics_gr11/resources/eco_un5/eco-unit5-eps2.mp4"
        },
        {
            "id": "g11ecu5v2",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu5",
            "episode": "3",
            "title": "Profit maximization in the short run",
            "vurl": ".grade11/economics_gr11/resources/eco_un5/eco-unit5-eps3.mp4"
        },
        {
            "id": "g11ecu5v3",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu5",
            "episode": "5",
            "title": " Profit maximization of the perfectly competitive firm in the long run",
            "vurl": ".grade11/economics_gr11/resources/eco_un5/eco-unit5-eps5.mp4"
        },
        {
            "id": "g11ecu5v4",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu5",
            "episode": "6",
            "title": " Deriving the supply curve of a perfectly competitive firm in the short run",
            "vurl": ".grade11/economics_gr11/resources/eco_un5/eco-unit5-eps6.mp4"
        },
        {
            "id": "g11ecu5v5",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu5",
            "episode": "10",
            "title": "Profit maximization under pure monopoly",
            "vurl": ".grade11/economics_gr11/resources/eco_un5/eco-unit5-eps10.mp4"
        },
        {
            "id": "g11ecu6v1",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu6",
            "episode": "1",
            "title": "Concerns of macro-economics",
            "vurl": ".grade11/economics_gr11/resources/eco_un6/eco-unit6-eps1.mp4"
        },
        {
            "id": "g11ecu7v1",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu7",
            "episode": "3",
            "title": " Approaches to measuring GDP",
            "vurl": ".grade11/economics_gr11/resources/eco_un7/eco-unit7-eps3.mp4"
        },
        {
            "id": "g11ecu7v2",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu7",
            "episode": "8",
            "title": "Other national income account",
            "vurl": ".grade11/economics_gr11/resources/eco_un7/eco-unit7-eps8.mp4"
        },
        {
            "id": "g11ecu8v1",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu8",
            "episode": "2",
            "title": " The consumption function",
            "vurl": ".grade11/economics_gr11/resources/eco_un8/eco-unit8-eps2.mp4"
        },
        {
            "id": "g11ecu8v2",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu8",
            "episode": "3",
            "title": " Marginal & average propensity",
            "vurl": ".grade11/economics_gr11/resources/eco_un8/eco-unit8-eps3.mp4"
        },
        {
            "id": "g11ecu8v3",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu8",
            "episode": "5",
            "title": "The saving function",
            "vurl": ".grade11/economics_gr11/resources/eco_un8/eco-unit8-eps5.mp4"
        },
        {
            "id": "g11ecu8v4",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu8",
            "episode": "6",
            "title": "MPS is the slop of the saving curve",
            "vurl": ".grade11/economics_gr11/resources/eco_un8/eco-unit8-eps6.mp4"
        },
        {
            "id": "g11ecu8v5",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu8",
            "episode": "7",
            "title": "Relationship between consumption & saving",
            "vurl": ".grade11/economics_gr11/resources/eco_un8/eco-unit8-eps7.mp4"
        },
        {
            "id": "g11ecu8v6",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu8",
            "episode": "9",
            "title": "investment",
            "vurl": ".grade11/economics_gr11/resources/eco_un8/eco-unit8-eps9.mp4"
        },
        {
            "id": "g11ecu9v1",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu9",
            "episode": "3",
            "title": "Basis of international trade theory of absolute cost difference by Adam smith",
            "vurl": ".grade11/economics_gr11/resources/eco_un9/eco-unit9-eps3.mp4"
        },
        {
            "id": "g11ecu9v2",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu9",
            "episode": "4",
            "title": "Basis of international trade: theory of comparative cost",
            "vurl": ".grade11/economics_gr11/resources/eco_un9/eco-unit9-eps4.mp4"
        },
        {
            "id": "g11ecu9v3",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu9",
            "episode": "7",
            "title": "Impact of foreign trade on GDP",
            "vurl": ".grade11/economics_gr11/resources/eco_un9/eco-unit9-eps7.mp4"
        },
        {
            "id": "g11ecu9v4",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu9",
            "episode": "10",
            "title": " The complete account of BOP",
            "vurl": ".grade11/economics_gr11/resources/eco_un9/eco-unit9-eps10.mp4"
        },
        {
            "id": "g11ecu9v5",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu9",
            "episode": "12",
            "title": " Foreign exchange rate & its type",
            "vurl": ".grade11/economics_gr11/resources/eco_un9/eco-unit9-eps12.mp4"
        },
        {
            "id": "g11ecu9v6",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu9",
            "episode": "13",
            "title": "Impacts of foreign exchange rate on BOP",
            "vurl": ".grade11/economics_gr11/resources/eco_un9/eco-unit9-eps13.mp4"
        },
        {
            "id": "g11ecu10v1",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu10",
            "episode": "1",
            "title": "Determination of levels of outputs prices & employment: aggregate demand",
            "vurl": ".grade11/economics_gr11/resources/eco_un10/eco-unit10-eps1.mp4"
        },
        {
            "id": "g11ecu10v2",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu10",
            "episode": "2",
            "title": " Factors that determine aggregate demand",
            "vurl": ".grade11/economics_gr11/resources/eco_un10/eco-unit10-eps2.mp4"
        },
        {
            "id": "g11ecu10v3",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu10",
            "episode": "3",
            "title": "Determination of levels of outputs prices & employment: aggregate supply",
            "vurl": ".grade11/economics_gr11/resources/eco_un10/eco-unit10-eps3.mp4"
        },
        {
            "id": "g11ecu10v4",
            "gid": "g11",
            "cid": "g11ec",
            "uid": "g11ecu10",
            "episode": "5",
            "title": "fiscal police",
            "vurl": ".grade11/economics_gr11/resources/eco_un10/eco-unit10-eps3.mp4"
        },
        {
            "id": "g11gbu1v1",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu1",
            "episode": "1",
            "title": "The meaning of business",
            "vurl": ".grade11/GB_gr11/resources/GB_un1/GB-unit1-eps1.mp4"
        },
        {
            "id": "g11gbu1v2",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu1",
            "episode": "2",
            "title": "needs and wants",
            "vurl": ".grade11/GB_gr11/resources/GB_un1/GB-unit1-eps2.mp4"
        },
        {
            "id": "g11gbu1v3",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu1",
            "episode": "3",
            "title": "business product",
            "vurl": ".grade11/GB_gr11/resources/GB_un1/GB-unit1-eps3.mp4"
        },
        {
            "id": "g11gbu1v4",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu1",
            "episode": "6",
            "title": "the importance of business",
            "vurl": ".grade11/GB_gr11/resources/GB_un1/GB-unit1-eps6.mp4"
        },
        {
            "id": "g11gbu1v5",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu1",
            "episode": "10",
            "title": "kinds of business enterprise",
            "vurl": ".grade11/GB_gr11/resources/GB_un1/GB-unit1-eps10.mp4"
        },
        {
            "id": "g11gbu1v6",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu1",
            "episode": "11",
            "title": "The production enterprises and the production process",
            "vurl": ".grade11/GB_gr11/resources/GB_un1/GB-unit1-eps11.mp4"
        },
        {
            "id": "g11gbu1v7",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu1",
            "episode": "12",
            "title": "Distribution enterprise",
            "vurl": ".grade11/GB_gr11/resources/GB_un1/GB-unit1-eps12.mp4"
        },
        {
            "id": "g11gbu1v8",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu1",
            "episode": "14",
            "title": " physical Distribution ",
            "vurl": ".grade11/GB_gr11/resources/GB_un1/GB-unit1-eps14.mp4"
        },
        {
            "id": "g11gbu1v9",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu1",
            "episode": "15",
            "title": "service enterprise",
            "vurl": ".grade11/GB_gr11/resources/GB_un1/GB-unit1-eps15.mp4"
        },
        {
            "id": "g11gbu1v10",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu1",
            "episode": "16",
            "title": "the business environment",
            "vurl": ".grade11/GB_gr11/resources/GB_un1/GB-unit1-eps16.mp4"
        },
        {
            "id": "g11gbu1v11",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu1",
            "episode": "21",
            "title": "The external business environment socio-cultural and physical environment",
            "vurl": ".grade11/GB_gr11/resources/GB_un1/GB-unit1-eps21.mp4"
        },
        {
            "id": "g11gbu1v12",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu1",
            "episode": "22",
            "title": "The external business environment technological environment",
            "vurl": ".grade11/GB_gr11/resources/GB_un1/GB-unit1-eps22.mp4"
        },
        {
            "id": "g11gbu2v1",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu2",
            "episode": "6",
            "title": " Types & forms of business ownership",
            "vurl": ".grade11/GB_gr11/resources/GB_un2/GB-unit2-eps6.mp4"
        },
        {
            "id": "g11gbu2v2",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu2",
            "episode": "10",
            "title": "Uncommon form of business ownership cooprativ, franchises and licebsing",
            "vurl": ".grade11/GB_gr11/resources/GB_un2/GB-unit2-eps10.mp4"
        },
        {
            "id": "g11gbu2v3",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu2",
            "episode": "11",
            "title": "Factors affecting choice of form of business ownership",
            "vurl": ".grade11/GB_gr11/resources/GB_un2/GB-unit2-eps11.mp4"
        },
        {
            "id": "g11gbu3v1",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu3",
            "episode": "2",
            "title": " Forms of money in Ethiopia",
            "vurl": ".grade11/GB_gr11/resources/GB_un3/GB-unit3-eps2.mp4"
        },
        {
            "id": "g11gbu3v2",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu3",
            "episode": "3",
            "title": "Source of capital for investment equity financing",
            "vurl": ".grade11/GB_gr11/resources/GB_un3/GB-unit3-eps3.mp4"
        },
        {
            "id": "g11gbu3v3",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu3",
            "episode": "4",
            "title": "Source of capital for investment -debt financing",
            "vurl": ".grade11/GB_gr11/resources/GB_un3/GB-unit3-eps4.mp4"
        },
        {
            "id": "g11gbu3v4",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu3",
            "episode": "5",
            "title": "bonds",
            "vurl": ".grade11/GB_gr11/resources/GB_un3/GB-unit3-eps5.mp4"
        },
        {
            "id": "g11gbu3v5",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu3",
            "episode": "6",
            "title": "Shares or stocks and treasury bills",
            "vurl": ".grade11/GB_gr11/resources/GB_un3/GB-unit3-eps6.mp4"
        },
        {
            "id": "g11gbu3v6",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu3",
            "episode": "7",
            "title": "Brief history of banking in Ethiopia",
            "vurl": ".grade11/GB_gr11/resources/GB_un3/GB-unit3-eps7.mp4"
        },
        {
            "id": "g11gbu3v7",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu3",
            "episode": "8",
            "title": "the importance of bank",
            "vurl": ".grade11/GB_gr11/resources/GB_un3/GB-unit3-eps8.mp4"
        },
        {
            "id": "g11gbu3v8",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu3",
            "episode": "13",
            "title": " Financing business organization",
            "vurl": ".grade11/GB_gr11/resources/GB_un3/GB-unit3-eps13.mp4"
        },
        {
            "id": "g11gbu3v9",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu3",
            "episode": "14",
            "title": "Breakeven analysis (part1)",
            "vurl": ".grade11/GB_gr11/resources/GB_un3/GB-unit3-eps14.mp4"
        },
        {
            "id": "g11gbu4v1",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu4",
            "episode": "1",
            "title": "production",
            "vurl": ".grade11/GB_gr11/resources/GB_un4/GB-unit4-eps1.mp4"
        },
        {
            "id": "g11gbu4v2",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu4",
            "episode": "3",
            "title": "the production function",
            "vurl": ".grade11/GB_gr11/resources/GB_un4/GB-unit4-eps3.mp4"
        },
        {
            "id": "g11gbu4v3",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu4",
            "episode": "4",
            "title": " Types of factors of production",
            "vurl": ".grade11/GB_gr11/resources/GB_un4/GB-unit4-eps4.mp4"
        },
        {
            "id": "g11gbu4v4",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu4",
            "episode": "5",
            "title": " Entrepreneur & entrepreneurship",
            "vurl": ".grade11/GB_gr11/resources/GB_un4/GB-unit4-eps5.mp4"
        },
        {
            "id": "g11gbu4v5",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu4",
            "episode": "6",
            "title": " asks of entrepreneur",
            "vurl": ".grade11/GB_gr11/resources/GB_un4/GB-unit4-eps6.mp4"
        },
        {
            "id": "g11gbu4v6",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu4",
            "episode": "8",
            "title": "Motivational and success factor for entrepreneurs",
            "vurl": ".grade11/GB_gr11/resources/GB_un4/GB-unit4-eps8.mp4"
        },
        {
            "id": "g11gbu4v7",
            "gid": "g11",
            "cid": "g11gb",
            "uid": "g11gbu4",
            "episode": "14",
            "title": " Breakeven analysis (part1)",
            "vurl": ".grade11/GB_gr11/resources/GB_un4/GB-unit4-eps14.mp4"
        },
        {
            "id": "g12bu1v1",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu1",
            "episode": "2",
            "title": "bacteria",
            "vurl": ".grade12/biology_gr12/resources/bio_un1/biology-unit1-eps2.mp4"
        },
        {
            "id": "g12u1v2",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu1",
            "episode": "6",
            "title": "Roles of bacteria in the ecosystem",
            "vurl": ".grade12/biology_gr12/resources/bio_un1/biology-unit1-eps6.mp4"
        },
        {
            "id": "g12bu1v3",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu1",
            "episode": "9",
            "title": "Bacteria and disease part 1",
            "vurl": ".grade12/biology_gr12/resources/bio_un1/biology-unit1-eps9.mp4"
        },
        {
            "id": "g12bu1v4",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu1",
            "episode": "11",
            "title": "Bacteria and disease ",
            "vurl": ".grade12/biology_gr12/resources/bio_un1/biology-unit1-eps11.mp4"
        },
        {
            "id": "g12bu1v5",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu1",
            "episode": "12",
            "title": "bacteria in industrial production",
            "vurl": ".grade12/biology_gr12/resources/bio_un1/biology-unit1-eps12.mp4"
        },
        {
            "id": "g12bu1v6",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu1",
            "episode": "13",
            "title": "bacteria in industrial process",
            "vurl": ".grade12/biology_gr12/resources/bio_un1/biology-unit1-eps13.mp4"
        },
        {
            "id": "g12bu1v7",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu1",
            "episode": "14",
            "title": "bacteria in sewage treatment",
            "vurl": ".grade12/biology_gr12/resources/bio_un1/biology-unit1-eps14.mp4"
        },
        {
            "id": "g12bu1v8",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu1",
            "episode": "15",
            "title": "recombinant DNA ",
            "vurl": ".grade12/biology_gr12/resources/bio_un1/biology-unit1-eps15.mp4"
        },
        {
            "id": "g12bu1v9",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu1",
            "episode": "17",
            "title": " The structure and functions of viruses",
            "vurl": ".grade12/biology_gr12/resources/bio_un1/biology-unit1-eps17.mp4"
        },
        {
            "id": "g12bu1v10",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu1",
            "episode": "20",
            "title": "Multiplication of viruses",
            "vurl": ".grade12/biology_gr12/resources/bio_un1/biology-unit1-eps20.mp4"
        },
        {
            "id": "g12bu1v11",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu1",
            "episode": "23",
            "title": "The structure of HIV",
            "vurl": ".grade12/biology_gr12/resources/bio_un1/biology-unit1-eps23.mp4"
        },
        {
            "id": "g12bu1v12",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu1",
            "episode": "24",
            "title": "life cycle of HIV",
            "vurl": ".grade12/biology_gr12/resources/bio_un1/biology-unit1-eps24.mp4"
        },
        {
            "id": "g12bu1v13",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu1",
            "episode": "25",
            "title": "Antiretroviral drugs",
            "vurl": ".grade12/biology_gr12/resources/bio_un1/biology-unit1-eps25.mp4"
        },
        {
            "id": "g12bu1v14",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu1",
            "episode": "26",
            "title": "Antiretroviral drugs",
            "vurl": ".grade12/biology_gr12/resources/bio_un1/biology-unit1-eps26.mp4"
        },
        {
            "id": "g12bu2v1",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu2",
            "episode": "1",
            "title": "Recycling",
            "vurl": ".grade12/biology_gr12/resources/bio_un2/biology-unit2-eps1.mp4"
        },
        {
            "id": "g12bu2v2",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu2",
            "episode": "2",
            "title": "Transfer of nutrients in the ecosystem",
            "vurl": ".grade12/biology_gr12/resources/bio_un2/biology-unit2-eps2.mp4"
        },
        {
            "id": "g12bu2v3",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu2",
            "episode": "9",
            "title": " Ecological succession",
            "vurl": ".grade12/biology_gr12/resources/bio_un2/biology-unit2-eps9.mp4"
        },
        {
            "id": "g12bu2v4",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu2",
            "episode": "13",
            "title": "Tropical rainforests",
            "vurl": ".grade12/biology_gr12/resources/bio_un2/biology-unit2-eps13.mp4"
        },
        {
            "id": "g12bu2v5",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu2",
            "episode": "14",
            "title": "Temperate forests and grasslands",
            "vurl": ".grade12/biology_gr12/resources/bio_un2/biology-unit2-eps14.mp4"
        },
        {
            "id": "g12bu2v6",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu2",
            "episode": "15",
            "title": " Savannah grassland and desert",
            "vurl": ".grade12/biology_gr12/resources/bio_un2/biology-unit2-eps15.mp4"
        },
        {
            "id": "g12bu2v7",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu2",
            "episode": "16",
            "title": "Taiga and tundra",
            "vurl": ".grade12/biology_gr12/resources/bio_un2/biology-unit2-eps16.mp4"
        },
        {
            "id": "g12bu2v8",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu2",
            "episode": "17",
            "title": "Aquatic biomes",
            "vurl": ".grade12/biology_gr12/resources/bio_un2/biology-unit2-eps17.mp4"
        },
        {
            "id": "g12bu2v9",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu2",
            "episode": "18",
            "title": "Aquatic biomes",
            "vurl": ".grade12/biology_gr12/resources/bio_un2/biology-unit2-eps18.mp4"
        },
        {
            "id": "g12bu2v10",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu2",
            "episode": "21",
            "title": " Biodiversity in Ethiopia",
            "vurl": ".grade12/biology_gr12/resources/bio_un2/biology-unit2-eps21.mp4"
        },
        {
            "id": "g12bu2v11",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu2",
            "episode": "28",
            "title": " Population explosion",
            "vurl": ".grade12/biology_gr12/resources/bio_un2/biology-unit2-eps28.mp4"
        },
        {
            "id": "g12bu3v1",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu3",
            "episode": "1",
            "title": "Crossing principles",
            "vurl": ".grade12/biology_gr12/resources/bio_un3/biology-unit3-eps1.mp4"
        },
        {
            "id": "g12bu3v2",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu3",
            "episode": "2",
            "title": "Dihybrid crosses",
            "vurl": ".grade12/biology_gr12/resources/bio_un3/biology-unit3-eps2.mp4"
        },
        {
            "id": "g12bu3v3",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu3",
            "episode": "5",
            "title": " Cross- breeding and inbreeding",
            "vurl": ".grade12/biology_gr12/resources/bio_un3/biology-unit3-eps5.mp4"
        },
        {
            "id": "g12bu3v4",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu3",
            "episode": "6",
            "title": "Meiosis and crossing over",
            "vurl": ".grade12/biology_gr12/resources/bio_un3/biology-unit3-eps6.mp4"
        },
        {
            "id": "g12bu3v5",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu3",
            "episode": "7",
            "title": "Sex setermination",
            "vurl": ".grade12/biology_gr12/resources/bio_un3/biology-unit3-eps7.mp4"
        },
        {
            "id": "g12bu3v6",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu3",
            "episode": "10",
            "title": "Traits controlled by multiple alleles",
            "vurl": ".grade12/biology_gr12/resources/bio_un3/biology-unit3-eps10.mp4"
        },
        {
            "id": "g12bu3v7",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu3",
            "episode": "11",
            "title": " Molecular structure of chromosomes",
            "vurl": ".grade12/biology_gr12/resources/bio_un3/biology-unit3-eps11.mp4"
        },
        {
            "id": "g12bu3v8",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu3",
            "episode": "12",
            "title": "structure of DNA",
            "vurl": ".grade12/biology_gr12/resources/bio_un3/biology-unit3-eps12.mp4"
        },
        {
            "id": "g12bu3v9",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu3",
            "episode": "15",
            "title": "Genetic engineering (recombinant DNA)",
            "vurl": ".grade12/biology_gr12/resources/bio_un3/biology-unit3-eps15.mp4"
        },
        {
            "id": "g12bu3v10",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu3",
            "episode": "16",
            "title": "Protein synthesis part 1",
            "vurl": ".grade12/biology_gr12/resources/bio_un3/biology-unit3-eps16.mp4"
        },
        {
            "id": "g12bu3v11",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu3",
            "episode": "17",
            "title": "Protein synthesis part 2",
            "vurl": ".grade12/biology_gr12/resources/bio_un3/biology-unit3-eps17.mp4"
        },
        {
            "id": "g12bu3v12",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu3",
            "episode": "18",
            "title": "Protein synthesis part 3",
            "vurl": ".grade12/biology_gr12/resources/bio_un3/biology-unit3-eps18.mp4"
        },
        {
            "id": "g12bu4v1",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu4",
            "episode": "1",
            "title": "the origin of life ",
            "vurl": ".grade12/biology_gr12/resources/bio_un4/biology-unit4-eps1.mp4"
        },
        {
            "id": "g12bu4v2",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu4",
            "episode": "2",
            "title": "the origin of life part 2",
            "vurl": ".grade12/biology_gr12/resources/bio_un4/biology-unit4-eps2.mp4"
        },
        {
            "id": "g12bu4v3",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu4",
            "episode": "3",
            "title": "Oparin’s theory of biochemical evolution",
            "vurl": ".grade12/biology_gr12/resources/bio_un4/biology-unit4-eps3.mp4"
        },
        {
            "id": "g12bu4v4",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu4",
            "episode": "4",
            "title": " Origin of autotrophy",
            "vurl": ".grade12/biology_gr12/resources/bio_un4/biology-unit4-eps4.mp4"
        },
        {
            "id": "g12bu4v5",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu4",
            "episode": "6",
            "title": "theories of evoution",
            "vurl": ".grade12/biology_gr12/resources/bio_un4/biology-unit4-eps6.mp4"
        },
        {
            "id": "g12bu4v6",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu4",
            "episode": "7",
            "title": "theories of evoution",
            "vurl": ".grade12/biology_gr12/resources/bio_un4/biology-unit4-eps7.mp4"
        },
        {
            "id": "g12bu4v7",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu4",
            "episode": "11",
            "title": " Evidence of evolution from paleontolgy",
            "vurl": ".grade12/biology_gr12/resources/bio_un4/biology-unit4-eps11.mp4"
        },
        {
            "id": "g12bu4v8",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu4",
            "episode": "12",
            "title": "Evidence from comparative anatomy",
            "vurl": ".grade12/biology_gr12/resources/bio_un4/biology-unit4-eps12.mp4"
        },
        {
            "id": "g12bu4v9",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu4",
            "episode": "13",
            "title": "Evidence from embryology",
            "vurl": ".grade12/biology_gr12/resources/bio_un4/biology-unit4-eps13.mp4"
        },
        {
            "id": "g12bu4v10",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu4",
            "episode": "14",
            "title": "Evidence from biochemistry",
            "vurl": ".grade12/biology_gr12/resources/bio_un4/biology-unit4-eps14.mp4"
        },
        {
            "id": "g12bu4v11",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu4",
            "episode": "15",
            "title": "Evidence from plant and animal breeding",
            "vurl": ".grade12/biology_gr12/resources/bio_un4/biology-unit4-eps15.mp4"
        },
        {
            "id": "g12bu4v12",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu4",
            "episode": "20A",
            "title": "evolution of humans",
            "vurl": ".grade12/biology_gr12/resources/bio_un4/biology-unit4-eps20A.mp4"
        },
        {
            "id": "g12bu4v13",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu4",
            "episode": "20B",
            "title": "evolution of humans",
            "vurl": ".grade12/biology_gr12/resources/bio_un4/biology-unit4-eps20B.mp4"
        },
        {
            "id": "g12bu5v1",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu5",
            "episode": "5",
            "title": "Response in plants and protists",
            "vurl": ".grade12/biology_gr12/resources/bio_un5/biology-unit5-eps5.mp4"
        },
        {
            "id": "g12bu5v2",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu5",
            "episode": "6",
            "title": "Response in lower animals",
            "vurl": ".grade12/biology_gr12/resources/bio_un5/biology-unit5-eps6.mp4"
        },
        {
            "id": "g12bu5v3",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu5",
            "episode": "7",
            "title": " Types of innate behavior part 1",
            "vurl": ".grade12/biology_gr12/resources/bio_un5/biology-unit5-eps7.mp4"
        },
        {
            "id": "g12bu5v4",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu5",
            "episode": "8",
            "title": " Types of innate behavior part 2",
            "vurl": ".grade12/biology_gr12/resources/bio_un5/biology-unit5-eps8.mp4"
        },
        {
            "id": "g12bu5v5",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu5",
            "episode": "10",
            "title": "types of behavior",
            "vurl": ".grade12/biology_gr12/resources/bio_un5/biology-unit5-eps10.mp4"
        },
        {
            "id": "g12bu5v6",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu5",
            "episode": "13",
            "title": " Latent and operant learning",
            "vurl": ".grade12/biology_gr12/resources/bio_un5/biology-unit5-eps13.mp4"
        },
        {
            "id": "g12bu5v7",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu5",
            "episode": "14",
            "title": "Insight learning",
            "vurl": ".grade12/biology_gr12/resources/bio_un5/biology-unit5-eps14.mp4"
        },
        {
            "id": "g12bu5v8",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu5",
            "episode": "18",
            "title": "Patterns of behavior",
            "vurl": ".grade12/biology_gr12/resources/bio_un5/biology-unit5-eps18.mp4"
        },
        {
            "id": "g12bu5v9",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu5",
            "episode": "19",
            "title": " Territorial behavior",
            "vurl": ".grade12/biology_gr12/resources/bio_un5/biology-unit5-eps19.mp4"
        },
        {
            "id": "g12bu5v10",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu5",
            "episode": "20",
            "title": "Orientation behavior",
            "vurl": ".grade12/biology_gr12/resources/bio_un5/biology-unit5-eps20.mp4"
        },
        {
            "id": "g12bu5v11",
            "gid": "g12",
            "cid": "g12b",
            "uid": "g12bu5",
            "episode": "21",
            "title": " Social behavior patterns part 1",
            "vurl": ".grade12/biology_gr12/resources/bio_un5/biology-unit5-eps21.mp4"
        },
        {
            "id": "g12cu1v1",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu1",
            "episode": "1",
            "title": "Homogeneous and heterogeneous mixtures",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u1/chemistry-unit1-eps1.mp4"
        },
        {
            "id": "g12cu1v2",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu1",
            "episode": "3",
            "title": "The solution process part 1",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u1/chemistry-unit1-eps3.mp4"
        },
        {
            "id": "g12cu1v3",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu1",
            "episode": "5",
            "title": "The solution process part 3",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u1/chemistry-unit1-eps5.mp4"
        },
        {
            "id": "g12cu1v4",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu1",
            "episode": "6",
            "title": "The solution process part 4",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u1/chemistry-unit1-eps6.mp4"
        },
        {
            "id": "g12cu1v5",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu1",
            "episode": "8",
            "title": " Solubility as an equilibrium process part 2",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u1/chemistry-unit1-eps8.mp4"
        },
        {
            "id": "g12cu1v6",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu1",
            "episode": "9",
            "title": " Solubility as an equilibrium process part 3",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u1/chemistry-unit1-eps9.mp4"
        },
        {
            "id": "g12cu1v7",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu1",
            "episode": "10",
            "title": " Solubility as an equilibrium process part 4",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u1/chemistry-unit1-eps10.mp4"
        },
        {
            "id": "g12cu1v8",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu1",
            "episode": "13",
            "title": "morality",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u1/chemistry-unit1-eps13.mp4"
        },
        {
            "id": "g12cu1v9",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu1",
            "episode": "14",
            "title": "normality part 1",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u1/chemistry-unit1-eps14.mp4"
        },
        {
            "id": "g12cu1v10",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu1",
            "episode": "16",
            "title": "morality",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u1/chemistry-unit1-eps16.mp4"
        },
        {
            "id": "g12cu1v11",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu1",
            "episode": "18",
            "title": "Preparation of solution part 1",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u1/chemistry-unit1-eps18.mp4"
        },
        {
            "id": "g12cu1v12",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu1",
            "episode": "25",
            "title": "Preparation of solution part 2",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u1/chemistry-unit1-eps25.mp4"
        },
        {
            "id": "g12cu1v13",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu1",
            "episode": "27",
            "title": "Freezing point depression",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u1/chemistry-unit1-eps27.mp4"
        },
        {
            "id": "g12cu1v14",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu1",
            "episode": "28",
            "title": "osmotic pressure",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u1/chemistry-unit1-eps28.mp4"
        },
        {
            "id": "g12cu2v1",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu2",
            "episode": "5",
            "title": "Acid-base concepts part 4",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u2/chemistry-unit2-eps5.mp4"
        },
        {
            "id": "g12cu2v2",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu2",
            "episode": "15",
            "title": "common ion effect",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u2/chemistry-unit2-eps15.mp4"
        },
        {
            "id": "g12cu2v3",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu2",
            "episode": "19",
            "title": "Hydrolysis of salts part1",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u2/chemistry-unit2-eps19.mp4"
        },
        {
            "id": "g12cu2v4",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu2",
            "episode": "20",
            "title": "Hydrolysis of salts part2",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u2/chemistry-unit2-eps20.mp4"
        },
        {
            "id": "g12cu2v5",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu2",
            "episode": "21",
            "title": "Acid-base indicator part 1",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u2/chemistry-unit2-eps21.mp4"
        },
        {
            "id": "g12cu2v6",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu2",
            "episode": "24",
            "title": "Acid-base indicator part 4",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u2/chemistry-unit2-eps24.mp4"
        },
        {
            "id": "g12cu3v1",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu3",
            "episode": "1",
            "title": " Common thermodynamic terms part 1",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u3/chemistry-unit3-eps1.mp4"
        },
        {
            "id": "g12cu3v2",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu3",
            "episode": "2",
            "title": " Common thermodynamic terms part 2",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u3/chemistry-unit3-eps2.mp4"
        },
        {
            "id": "g12cu3v3",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu3",
            "episode": "3",
            "title": "The first law of thermodynamic and some thermodynamic quantities part 1",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u3/chemistry-unit3-eps3.mp4"
        },
        {
            "id": "g12cu3v4",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu3",
            "episode": "4",
            "title": "The first law of thermodynamic and some thermodynamic quantities part 2",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u3/chemistry-unit3-eps4.mp4"
        },
        {
            "id": "g12cu3v5",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu3",
            "episode": "7",
            "title": " Thermo-chemistry part 2",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u3/chemistry-unit3-eps7.mp4"
        },
        {
            "id": "g12cu3v6",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu3",
            "episode": "11",
            "title": " Entropy and second law of thermodynamics part 2",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u3/chemistry-unit3-eps11.mp4"
        },
        {
            "id": "g12cu4v1",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu4",
            "episode": "1",
            "title": "Oxidation and reduction",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u4/chemistry-unit4-eps1.mp4"
        },
        {
            "id": "g12cu4v2",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu4",
            "episode": "5",
            "title": "Electrolytic cells",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u4/chemistry-unit4-eps5.mp4"
        },
        {
            "id": "g12cu4v3",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu4",
            "episode": "7",
            "title": "Electrolysis of some selected aqueous solution part 1",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u4/chemistry-unit4-eps7.mp4"
        },
        {
            "id": "g12cu4v4",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu4",
            "episode": "8",
            "title": "Electrolysis of some selected aqueous solution part 2",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u4/chemistry-unit4-eps8.mp4"
        },
        {
            "id": "g12cu4v5",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu4",
            "episode": "9",
            "title": "Electrolysis of some selected aqueous solution part 3",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u4/chemistry-unit4-eps9.mp4"
        },
        {
            "id": "g12cu4v6",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu4",
            "episode": "14",
            "title": "Industrial application of electrolysis part 1",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u4/chemistry-unit4-eps14.mp4"
        },
        {
            "id": "g12cu4v7",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu4",
            "episode": "15",
            "title": "Industrial application of electrolysis part 2",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u4/chemistry-unit4-eps15.mp4"
        },
        {
            "id": "g12cu4v8",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu4",
            "episode": "16",
            "title": "Industrial application of electrolysis part 2",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u4/chemistry-unit4-eps16.mp4"
        },
        {
            "id": "g12cu4v9",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu4",
            "episode": "17",
            "title": " Voltaic cells part 2",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u4/chemistry-unit4-eps17.mp4"
        },
        {
            "id": "g12cu4v10",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu4",
            "episode": "18",
            "title": " Voltaic cells part 3",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u4/chemistry-unit4-eps18.mp4"
        },
        {
            "id": "g12cu4v11",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu4",
            "episode": "19",
            "title": " Voltaic cells part 4A",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u4/chemistry-unit4-eps19.mp4"
        },
        {
            "id": "g12cu4v12",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu4",
            "episode": "20",
            "title": " Voltaic cells part 4B",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u4/chemistry-unit4-eps20.mp4"
        },
        {
            "id": "g12cu4v13",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu4",
            "episode": "21",
            "title": " Voltaic cells part 5",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u4/chemistry-unit4-eps21.mp4"
        },
        {
            "id": "g12cu5v1",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu5",
            "episode": "1",
            "title": "The recycling of elements in nature part 1",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u5/chemistry-unit5-eps1.mp4"
        },
        {
            "id": "g12cu5v2",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu5",
            "episode": "2",
            "title": "Occurrence of elements part 2",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u5/chemistry-unit5-eps2.mp4"
        },
        {
            "id": "g12cu5v3",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu5",
            "episode": "5",
            "title": "The recycling of elements in nature part 2",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u5/chemistry-unit5-eps5.mp4"
        },
        {
            "id": "g12cu5v4",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu5",
            "episode": "6",
            "title": "Metallurgy part 1",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u5/chemistry-unit5-eps6.mp4"
        },
        {
            "id": "g12cu5v5",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu5",
            "episode": "7",
            "title": "Metallurgy part 2",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u5/chemistry-unit5-eps7.mp4"
        },
        {
            "id": "g12cu5v6",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu5",
            "episode": "8",
            "title": "Extraction, properties and uses of sodium",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u5/chemistry-unit5-eps8.mp4"
        },
        {
            "id": "g12cu5v7",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu5",
            "episode": "9",
            "title": "Extraction, properties and uses of sodium",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u5/chemistry-unit5-eps9.mp4"
        },
        {
            "id": "g12cu5v8",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu5",
            "episode": "10",
            "title": "Extraction, properties and uses of tin and lead",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u5/chemistry-unit5-eps10.mp4"
        },
        {
            "id": "g12cu5v9",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu5",
            "episode": "11",
            "title": "Extraction, properties and uses of tin and lead",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u5/chemistry-unit5-eps11.mp4"
        },
        {
            "id": "g12cu5v10",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu5",
            "episode": "12",
            "title": "Production, properties and uses of silicon",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u5/chemistry-unit5-eps12.mp4"
        },
        {
            "id": "g12cu5v11",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu5",
            "episode": "13",
            "title": "Some important compounds of selected nonmetals part 1",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u5/chemistry-unit5-eps13.mp4"
        },
        {
            "id": "g12cu5v12",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu5",
            "episode": "14",
            "title": "Some important compounds of selected nonmetals part 2",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u5/chemistry-unit5-eps14.mp4"
        },
        {
            "id": "g12cu5v13",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu5",
            "episode": "15",
            "title": "Some important compounds of selected nonmetals part 3",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u5/chemistry-unit5-eps15.mp4"
        },
        {
            "id": "g12cu5v14",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu5",
            "episode": "16",
            "title": "Some important compounds of selected nonmetals part 4",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u5/chemistry-unit5-eps16.mp4"
        },
        {
            "id": "g12cu5v15",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu6",
            "episode": "1",
            "title": "polymers",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u6/chemistry-unit6-eps1.mp4"
        },
        {
            "id": "g12cu6v1",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu6",
            "episode": "4",
            "title": "Synthetic polymers part 1 (addition polymers)",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u6/chemistry-unit6-eps4.mp4"
        },
        {
            "id": "g12cu6v2",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu6",
            "episode": "5",
            "title": "Synthetic polymers part 2 (addition polymers)",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u6/chemistry-unit6-eps5.mp4"
        },
        {
            "id": "g12cu6v3",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu6",
            "episode": "6",
            "title": "Synthetic polymers part 3 (addition polymers)",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u6/chemistry-unit6-eps6.mp4"
        },
        {
            "id": "g12cu6v4",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu6",
            "episode": "7",
            "title": "Synthetic polymers part 4 (condensation polymers)",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u6/chemistry-unit6-eps7.mp4"
        },
        {
            "id": "g12cu6v5",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu6",
            "episode": "8",
            "title": "Synthetic polymers part 5 (synthetic polymers)",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u6/chemistry-unit6-eps8.mp4"
        },
        {
            "id": "g12cu6v6",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu6",
            "episode": "9",
            "title": "Synthetic polymers part 6 (thermoplastics and thermosetting polymers)",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u6/chemistry-unit6-eps9.mp4"
        },
        {
            "id": "g12cu6v7",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu6",
            "episode": "10",
            "title": "Natural polymers part 1 (natural rubber)",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u6/chemistry-unit6-eps10.mp4"
        },
        {
            "id": "g12cu6v8",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu6",
            "episode": "12",
            "title": "Natural polymers part 3( natural rubber)",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u6/chemistry-unit6-eps12.mp4"
        },
        {
            "id": "g12cu6v9",
            "gid": "g12",
            "cid": "g12h",
            "uid": "g12cu6",
            "episode": "14",
            "title": "Natural polymers part 5 (natural rubber)",
            "vurl": ".grade12/chemistry_gr12/web/resources/chem_u6/chemistry-unit6-eps14.mp4"
        },
        {
            "id": "g12mnu1v1",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu1",
            "episode": "2",
            "title": "sequence",
            "vurl": ".grade12/maths_gr12/web/resources/math_u1/maths-unit1-eps2.mp4"
        },
        {
            "id": "g12mnu1v2",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu1",
            "episode": "6",
            "title": "Arithmetic sequences and geometric sequence part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u1/maths-unit1-eps6.mp4"
        },
        {
            "id": "g12mnu1v3",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu1",
            "episode": "11",
            "title": " The sigma notation and partial sums",
            "vurl": ".grade12/maths_gr12/web/resources/math_u1/mathes-unit1-eps11.mp4"
        },
        {
            "id": "g12mnu1v4",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu1",
            "episode": "13",
            "title": " Infinite series",
            "vurl": ".grade12/maths_gr12/web/resources/math_u1/mathes-unit1-eps13.mp4"
        },
        {
            "id": "g12mnu1v5",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu1",
            "episode": "15",
            "title": " Applications of arithmetic progressions and geometric progressions",
            "vurl": ".grade12/maths_gr12/web/resources/math_u1/mathes-unit1-eps15.mp4"
        },
        {
            "id": "g12mnu2v1",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu2",
            "episode": "1",
            "title": "Limits of sequences of numbers part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u2/mathes-unit2-eps1.mp4"
        },
        {
            "id": "g12mnu2v2",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu2",
            "episode": "4",
            "title": "Limits of sequences of numbers part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u2/mathes-unit2-eps4.mp4"
        },
        {
            "id": "g12mnu2v3",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu2",
            "episode": "7",
            "title": "Limits of sequences of numbers part 3",
            "vurl": ".grade12/maths_gr12/web/resources/math_u2/mathes-unit2-eps7.mp4"
        },
        {
            "id": "g12mnu2v4",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu2",
            "episode": "8",
            "title": "Limits of sequences of numbers part 4",
            "vurl": ".grade12/maths_gr12/web/resources/math_u2/mathes-unit2-eps8.mp4"
        },
        {
            "id": "g12mnu2v5",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu2",
            "episode": "13",
            "title": "Limits of functions part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u2/mathes-unit2-eps13.mp4"
        },
        {
            "id": "g12mnu2v6",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu2",
            "episode": "14",
            "title": "Limits of functions part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u2/mathes-unit2-eps14.mp4"
        },
        {
            "id": "g12mnu2v7",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu2",
            "episode": "19",
            "title": " Continuity of a function part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u2/mathes-unit2-eps19.mp4"
        },
        {
            "id": "g12mnu2v8",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu2",
            "episode": "21",
            "title": " Continuity of a function part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u2/mathes-unit2-eps21.mp4"
        },
        {
            "id": "g12mnu2v9",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu2",
            "episode": "24",
            "title": " Exercises on application of limits",
            "vurl": ".grade12/maths_gr12/web/resources/math_u2/mathes-unit2-eps24.mp4"
        },
        {
            "id": "g12mnu3v1",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu3",
            "episode": "1",
            "title": " Introduction to derivatives part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u3/mathes-unit3-eps1.mp4"
        },
        {
            "id": "g12mnu3v2",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu3",
            "episode": "2",
            "title": " Introduction to derivatives part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u3/mathes-unit3-eps2.mp4"
        },
        {
            "id": "g12mnu3v3",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu3",
            "episode": "5",
            "title": " Introduction to derivatives part 3",
            "vurl": ".grade12/maths_gr12/web/resources/math_u3/mathes-unit3-eps5.mp4"
        },
        {
            "id": "g12mnu3v4",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu3",
            "episode": "8",
            "title": " Introduction to derivatives part 4",
            "vurl": ".grade12/maths_gr12/web/resources/math_u3/mathes-unit3-eps8.mp4"
        },
        {
            "id": "g12mnu3v5",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu3",
            "episode": "14",
            "title": " Derivatives of Combination and Compostion of Function part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u3/mathes-unit3-eps14.mp4"
        },
        {
            "id": "g12mnu3v6",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu3",
            "episode": "21",
            "title": " Derivatives of Combination and Compostion of Function part 3",
            "vurl": ".grade12/maths_gr12/web/resources/math_u3/mathes-unit3-eps21.mp4"
        },
        {
            "id": "g12mnu3v7",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu3",
            "episode": "24",
            "title": " Derivatives of Combination and Compostion of Function part 4",
            "vurl": ".grade12/maths_gr12/web/resources/math_u3/mathes-unit3-eps24.mp4"
        },
        {
            "id": "g12mnu4v1",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu4",
            "episode": "1",
            "title": "Extreme values of a function part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u4/mathes-unit4-eps1.mp4"
        },
        {
            "id": "g12mnu4v2",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu4",
            "episode": "6",
            "title": "Extreme values of a function part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u4/mathes-unit4-eps6.mp4"
        },
        {
            "id": "g12mnu4v3",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu4",
            "episode": "9",
            "title": "Extreme values of a function part 3",
            "vurl": ".grade12/maths_gr12/web/resources/math_u4/mathes-unit4-eps9.mp4"
        },
        {
            "id": "g12mnu4v4",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu4",
            "episode": "11",
            "title": "Extreme values of a function part 4",
            "vurl": ".grade12/maths_gr12/web/resources/math_u4/mathes-unit4-eps11.mp4"
        },
        {
            "id": "g12mnu4v5",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu4",
            "episode": "14",
            "title": "Minimization and maximization problems part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u4/mathes-unit4-eps14.mp4"
        },
        {
            "id": "g12mnu4v6",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu4",
            "episode": "17",
            "title": "Minimization and maximization problems part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u4/mathes-unit4-eps17.mp4"
        },
        {
            "id": "g12mnu4v7",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu4",
            "episode": "20",
            "title": " Rate of change part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u4/mathes-unit4-eps20.mp4"
        },
        {
            "id": "g12mnu4v8",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu4",
            "episode": "22",
            "title": " Rate of change part2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u4/mathes-unit4-eps22.mp4"
        },
        {
            "id": "g12mnu4v9",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu4",
            "episode": "24",
            "title": " Rate of change part3",
            "vurl": ".grade12/maths_gr12/web/resources/math_u4/mathes-unit4-eps24.mp4"
        },
        {
            "id": "g12mnu5v1",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu5",
            "episode": "4",
            "title": " Integrating simple functions",
            "vurl": ".grade12/maths_gr12/web/resources/math_u5/mathes-unit5-eps4.mp4"
        },
        {
            "id": "g12mnu5v2",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu5",
            "episode": "8",
            "title": "Techniques of integration",
            "vurl": ".grade12/maths_gr12/web/resources/math_u5/mathes-unit5-eps8.mp4"
        },
        {
            "id": "g12mnu5v3",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu5",
            "episode": "12",
            "title": "Integration by parts",
            "vurl": ".grade12/maths_gr12/web/resources/math_u5/mathes-unit5-eps12.mp4"
        },
        {
            "id": "g12mnu5v4",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu5",
            "episode": "17",
            "title": "Definite integrals",
            "vurl": ".grade12/maths_gr12/web/resources/math_u5/mathes-unit5-eps17.mp4"
        },
        {
            "id": "g12mnu5v5",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu5",
            "episode": "18",
            "title": "Fundamental theorem of calculus",
            "vurl": ".grade12/maths_gr12/web/resources/math_u5/mathes-unit5-eps18.mp4"
        },
        {
            "id": "g12mnu5v6",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu5",
            "episode": "25",
            "title": "Application of intergral calculus",
            "vurl": ".grade12/maths_gr12/web/resources/math_u5/mathes-unit5-eps25.mp4"
        },
        {
            "id": "g12mnu5v7",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu5",
            "episode": "27",
            "title": "The volume of revolution",
            "vurl": ".grade12/maths_gr12/web/resources/math_u5/mathes-unit5-eps27.mp4"
        },
        {
            "id": "g12mnu5v8",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu5",
            "episode": "29",
            "title": "The motions of particles",
            "vurl": ".grade12/maths_gr12/web/resources/math_u5/mathes-unit5-eps29.mp4"
        },
        {
            "id": "g12mnu6v1",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu6",
            "episode": "1",
            "title": "Coordinate axes and coordinate planes in space",
            "vurl": ".grade12/maths_gr12/web/resources/math_u6/mathes-unit6-eps1.mp4"
        },
        {
            "id": "g12mnu6v2",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu6",
            "episode": "6",
            "title": " Distance and midpoints in space",
            "vurl": ".grade12/maths_gr12/web/resources/math_u6/mathes-unit6-eps6.mp4"
        },
        {
            "id": "g12mnu6v3",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu6",
            "episode": "9",
            "title": "Equation of a sphere",
            "vurl": ".grade12/maths_gr12/web/resources/math_u6/mathes-unit6-eps9.mp4"
        },
        {
            "id": "g12mnu6v4",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu6",
            "episode": "10",
            "title": "Vectors in space part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u6/mathes-unit6-eps10.mp4"
        },
        {
            "id": "g12mnu6v5",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu6",
            "episode": "11",
            "title": "Vectors in space part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u6/mathes-unit6-eps11.mp4"
        },
        {
            "id": "g12mnu6v6",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu6",
            "episode": "16",
            "title": "Vectors in space part 3",
            "vurl": ".grade12/maths_gr12/web/resources/math_u6/mathes-unit6-eps16.mp4"
        },
        {
            "id": "g12mnu7v1",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu7",
            "episode": "2",
            "title": " Revision on logic part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u7/mathes-unit7-eps2.mp4"
        },
        {
            "id": "g12mnu7v2",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu7",
            "episode": "3",
            "title": " Revision on logic part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u7/mathes-unit7-eps3.mp4"
        },
        {
            "id": "g12mnu7v3",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu7",
            "episode": "5",
            "title": " Different types of proofs",
            "vurl": ".grade12/maths_gr12/web/resources/math_u7/mathes-unit7-eps5.mp4"
        },
        {
            "id": "g12mnu7v4",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu7",
            "episode": "9",
            "title": "Principle and application of mathematical induction",
            "vurl": ".grade12/maths_gr12/web/resources/math_u7/mathes-unit7-eps9.mp4"
        },
        {
            "id": "g12mnu7v5",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu7",
            "episode": "10",
            "title": "Principle and application of mathematical induction part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u7/mathes-unit7-eps10.mp4"
        },
        {
            "id": "g12mnu8v1",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu8",
            "episode": "1",
            "title": "Sampling techniques",
            "vurl": ".grade12/maths_gr12/web/resources/math_u8/mathes-unit8-eps1.mp4"
        },
        {
            "id": "g12mnu8v2",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu8",
            "episode": "4",
            "title": " Representation of data",
            "vurl": ".grade12/maths_gr12/web/resources/math_u8/mathes-unit8-eps4.mp4"
        },
        {
            "id": "g12mnu8v3",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu8",
            "episode": "6",
            "title": "Construction of graphs and interpretation part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u8/mathes-unit8-eps6.mp4"
        },
        {
            "id": "g12mnu8v4",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu8",
            "episode": "7",
            "title": "Construction of graphs and interpretation part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u8/mathes-unit8-eps7.mp4"
        },
        {
            "id": "g12mnu8v5",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu8",
            "episode": "12",
            "title": "Measures of central tendency and measures of variability",
            "vurl": ".grade12/maths_gr12/web/resources/math_u8/mathes-unit8-eps12.mp4"
        },
        {
            "id": "g12mnu8v6",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu8",
            "episode": "17",
            "title": "Analysis of frequency distribution",
            "vurl": ".grade12/maths_gr12/web/resources/math_u8/mathes-unit8-eps17.mp4"
        },
        {
            "id": "g12mnu8v7",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu8",
            "episode": "19",
            "title": " Use of cumulative frequency curve",
            "vurl": ".grade12/maths_gr12/web/resources/math_u8/mathes-unit8-eps19.mp4"
        },
        {
            "id": "g12mnu9v1",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu9",
            "episode": "1",
            "title": " Applications to purchasing",
            "vurl": ".grade12/maths_gr12/web/resources/math_u9/mathes-unit9-eps1.mp4"
        },
        {
            "id": "g12mnu9v2",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu9",
            "episode": "4",
            "title": "Percent increase and percent decrease",
            "vurl": ".grade12/maths_gr12/web/resources/math_u9/mathes-unit9-eps4.mp4"
        },
        {
            "id": "g12mnu9v3",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu9",
            "episode": "8",
            "title": "Real state expenses part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u9/mathes-unit9-eps8.mp4"
        },
        {
            "id": "g12mnu9v4",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu9",
            "episode": "10",
            "title": "Real state expenses part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u9/mathes-unit9-eps10.mp4"
        },
        {
            "id": "g12mnu9v5",
            "gid": "g12",
            "cid": "g12mn",
            "uid": "g12mnu9",
            "episode": "12",
            "title": "wages",
            "vurl": ".grade12/maths_gr12/web/resources/math_u9/mathes-unit9-eps12.mp4"
        },
        {
            "id": "g12pu1v1",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu1",
            "episode": "1",
            "title": " A macroscopic description of matter",
            "vurl": ".grade12/physic_gr12/resources/phy_u1/physics-unit1-eps1.mp4"
        },
        {
            "id": "g12pu1v2",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu1",
            "episode": "2",
            "title": " A macroscopic description of matter part 2",
            "vurl": ".grade12/physic_gr12/resources/phy_u1/physics-unit1-eps2.mp4"
        },
        {
            "id": "g12pu1v3",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu1",
            "episode": "3",
            "title": " A macroscopic description of matter part 3",
            "vurl": ".grade12/physic_gr12/resources/phy_u1/physics-unit1-eps3.mp4"
        },
        {
            "id": "g12pu1v4",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu1",
            "episode": "4",
            "title": " The first law of thermodynamics/h4>",
            "vurl": ".grade12/physic_gr12/resources/phy_u1/physics-unit1-eps4.mp4"
        },
        {
            "id": "g12pu1v5",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu1",
            "episode": "5",
            "title": " The first law of thermodynamics part 2/h4>",
            "vurl": ".grade12/physic_gr12/resources/phy_u1/physics-unit1-eps5.mp4"
        },
        {
            "id": "g12pu1v6",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu1",
            "episode": "6",
            "title": "The first law of thermodynamics part 2",
            "vurl": ".grade12/physic_gr12/resources/phy_u1/physics-unit1-eps6.mp4"
        },
        {
            "id": "g12pu1v7",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu1",
            "episode": "11",
            "title": "The second law of thermodynamics part 1",
            "vurl": ".grade12/physic_gr12/resources/phy_u1/physics-unit1-eps11.mp4"
        },
        {
            "id": "g12pu1v8",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu1",
            "episode": "12",
            "title": "The second law of thermodynamics part 2",
            "vurl": ".grade12/physic_gr12/resources/phy_u1/physics-unit1-eps12.mp4"
        },
        {
            "id": "g12pu1v9",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu1",
            "episode": "13",
            "title": "The second law of thermodynamics part 3",
            "vurl": ".grade12/physic_gr12/resources/phy_u1/physics-unit1-eps13.mp4"
        },
        {
            "id": "g12pu1v10",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu1",
            "episode": "14",
            "title": "The second law of thermodynamics part 4",
            "vurl": ".grade12/physic_gr12/resources/phy_u1/physics-unit1-eps14.mp4"
        },
        {
            "id": "g12pu2v1",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu2",
            "episode": "2",
            "title": "Periodic motion part 1",
            "vurl": ".grade12/physic_gr12/resources/phy_u2/physics-unit2-eps2.mp4"
        },
        {
            "id": "g12pu2v2",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu2",
            "episode": "3",
            "title": " Periodic motion part 2",
            "vurl": ".grade12/physic_gr12/resources/phy_u2/physics-unit2-eps3.mp4"
        },
        {
            "id": "g12pu2v3",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu2",
            "episode": "5",
            "title": " Periodic motion part 3",
            "vurl": ".grade12/physic_gr12/resources/phy_u2/physics-unit2-eps5.mp4"
        },
        {
            "id": "g12pu2v4",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu2",
            "episode": "6",
            "title": " Periodic motion part 4",
            "vurl": ".grade12/physic_gr12/resources/phy_u2/physics-unit2-eps6.mp4"
        },
        {
            "id": "g12pu2v5",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu2",
            "episode": "8",
            "title": "Wave motion part 1",
            "vurl": ".grade12/physic_gr12/resources/phy_u2/physics-unit2-eps8.mp4"
        },
        {
            "id": "g12pu2v6",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu2",
            "episode": "10",
            "title": "Wave motion part 2",
            "vurl": ".grade12/physic_gr12/resources/phy_u2/physics-unit2-eps10.mp4"
        },
        {
            "id": "g12pu2v7",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu2",
            "episode": "12",
            "title": " Sound waves part 1",
            "vurl": ".grade12/physic_gr12/resources/phy_u2/physics-unit2-eps12.mp4"
        },
        {
            "id": "g12pu2v8",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu2",
            "episode": "14",
            "title": " Sound waves part 2",
            "vurl": ".grade12/physic_gr12/resources/phy_u2/physics-unit2-eps14.mp4"
        },
        {
            "id": "g12pu2v9",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu2",
            "episode": "16",
            "title": " Sound waves part 3",
            "vurl": ".grade12/physic_gr12/resources/phy_u2/physics-unit2-eps16.mp4"
        },
        {
            "id": "g12pu3v1",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu3",
            "episode": "1",
            "title": "wave optics",
            "vurl": ".grade12/physic_gr12/resources/phy_u3/physics-unit3-eps1.mp4"
        },
        {
            "id": "g12pu3v2",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu3",
            "episode": "2",
            "title": "Interference part 1",
            "vurl": ".grade12/physic_gr12/resources/phy_u3/physics-unit3-eps2.mp4"
        },
        {
            "id": "g12pu3v3",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu3",
            "episode": "5",
            "title": "Interference part 2",
            "vurl": ".grade12/physic_gr12/resources/phy_u3/physics-unit3-eps5.mp4"
        },
        {
            "id": "g12pu3v4",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu3",
            "episode": "9",
            "title": "diffraction",
            "vurl": ".grade12/physic_gr12/resources/phy_u3/physics-unit3-eps9.mp4"
        },
        {
            "id": "g12pu4v1",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu4",
            "episode": "1",
            "title": " Electric field part 1",
            "vurl": ".grade12/physic_gr12/resources/phy_u4/physics-unit4-eps1.mp4"
        },
        {
            "id": "g12pu4v2",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu4",
            "episode": "3",
            "title": " Electric field part 2",
            "vurl": ".grade12/physic_gr12/resources/phy_u4/physics-unit4-eps3.mp4"
        },
        {
            "id": "g12pu4v3",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu4",
            "episode": "4",
            "title": " Electric field part 3",
            "vurl": ".grade12/physic_gr12/resources/phy_u4/physics-unit4-eps4.mp4"
        },
        {
            "id": "g12pu4v4",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu4",
            "episode": "6",
            "title": "Electric potential part 1",
            "vurl": ".grade12/physic_gr12/resources/phy_u4/physics-unit4-eps6.mp4"
        },
        {
            "id": "g12pu4v5",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu4",
            "episode": "9",
            "title": "Electric potential part 2",
            "vurl": ".grade12/physic_gr12/resources/phy_u4/physics-unit4-eps9.mp4"
        },
        {
            "id": "g12pu4v6",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu4",
            "episode": "11",
            "title": "Capacitors part 1",
            "vurl": ".grade12/physic_gr12/resources/phy_u4/physics-unit4-eps11.mp4"
        },
        {
            "id": "g12pu4v7",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu4",
            "episode": "13",
            "title": "Capacitors part 2",
            "vurl": ".grade12/physic_gr12/resources/phy_u4/physics-unit4-eps13.mp4"
        },
        {
            "id": "g12pu5v1",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu5",
            "episode": "1",
            "title": "electric current",
            "vurl": ".grade12/physic_gr12/resources/phy_u5/physics-unit5-eps1.mp4"
        },
        {
            "id": "g12pu5v2",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu5",
            "episode": "9",
            "title": "Measuring instruments part 1",
            "vurl": ".grade12/physic_gr12/resources/phy_u5/physics-unit5-eps9.mp4"
        },
        {
            "id": "g12pu5v3",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu5",
            "episode": "11",
            "title": "Measuring instruments part 2",
            "vurl": ".grade12/physic_gr12/resources/phy_u5/physics-unit5-eps11.mp4"
        },
        {
            "id": "g12pu6v1",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu6",
            "episode": "1",
            "title": "magnetic force",
            "vurl": ".grade12/physic_gr12/resources/phy_u6/physics-unit6-eps1.mp4"
        },
        {
            "id": "g12pu6v2",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu6",
            "episode": "4",
            "title": "magnetic force part 2",
            "vurl": ".grade12/physic_gr12/resources/phy_u6/physics-unit6-eps4.mp4"
        },
        {
            "id": "g12pu6v3",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu6",
            "episode": "6",
            "title": "magnetc force part 3",
            "vurl": ".grade12/physic_gr12/resources/phy_u6/physics-unit6-eps6.mp4"
        },
        {
            "id": "g12pu6v4",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu6",
            "episode": "8",
            "title": " Magnetic field strength",
            "vurl": ".grade12/physic_gr12/resources/phy_u6/physics-unit6-eps8.mp4"
        },
        {
            "id": "g12pu6v5",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu6",
            "episode": "10",
            "title": " Magnetic field strength",
            "vurl": ".grade12/physic_gr12/resources/phy_u6/physics-unit6-eps10.mp4"
        },
        {
            "id": "g12pu6v6",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu6",
            "episode": "11",
            "title": "Earth’s magnetism",
            "vurl": ".grade12/physic_gr12/resources/phy_u6/physics-unit6-eps11.mp4"
        },
        {
            "id": "g12pu7v1",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu7",
            "episode": "1",
            "title": " Electromagnetic induction",
            "vurl": ".grade12/physic_gr12/resources/phy_u7/physics-unit7-eps1.mp4"
        },
        {
            "id": "g12pu7v2",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu7",
            "episode": "5",
            "title": "Inductors and magnetic density",
            "vurl": ".grade12/physic_gr12/resources/phy_u7/physics-unit7-eps5.mp4"
        },
        {
            "id": "g12pu7v3",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu7",
            "episode": "8",
            "title": " Electromagnetic induction",
            "vurl": ".grade12/physic_gr12/resources/phy_u7/physics-unit7-eps8.mp4"
        },
        {
            "id": "g12pu7v4",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu7",
            "episode": "11",
            "title": "Alternation current",
            "vurl": ".grade12/physic_gr12/resources/phy_u7/physics-unit7-eps11.mp4"
        },
        {
            "id": "g12pu7v5",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu7",
            "episode": "13",
            "title": "Alternation current part 2",
            "vurl": ".grade12/physic_gr12/resources/phy_u7/physics-unit7-eps13.mp4"
        },
        {
            "id": "g12pu8v1",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu8",
            "episode": "1",
            "title": "Dual nature of matter",
            "vurl": ".grade12/physic_gr12/resources/phy_u8/physics-unit8-eps1.mp4"
        },
        {
            "id": "g12pu8v2",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu8",
            "episode": "4",
            "title": " Atoms and nuclei part 1",
            "vurl": ".grade12/physic_gr12/resources/phy_u8/physics-unit8-eps4.mp4"
        },
        {
            "id": "g12pu8v3",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu8",
            "episode": "6",
            "title": " Atoms and nuclei part 2",
            "vurl": ".grade12/physic_gr12/resources/phy_u8/physics-unit8-eps6.mp4"
        },
        {
            "id": "g12pu8v4",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu8",
            "episode": "8",
            "title": "radoactivity",
            "vurl": ".grade12/physic_gr12/resources/phy_u8/physics-unit8-eps8.mp4"
        },
        {
            "id": "g12pu8v5",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu8",
            "episode": "12",
            "title": "Nuclear energy part 1",
            "vurl": ".grade12/physic_gr12/resources/phy_u8/physics-unit8-eps12.mp4"
        },
        {
            "id": "g12pu8v6",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu8",
            "episode": "13",
            "title": "Nuclear energy part 2",
            "vurl": ".grade12/physic_gr12/resources/phy_u8/physics-unit8-eps13.mp4"
        },
        {
            "id": "g12pu8v7",
            "gid": "g12",
            "cid": "g12p",
            "uid": "g12pu8",
            "episode": "16",
            "title": "Nuclear energy part 3",
            "vurl": ".grade12/physic_gr12/resources/phy_u8/physics-unit8-eps16.mp4"
        },
        {
            "id": "g12eu1v1",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu1",
            "episode": "1",
            "title": "Listening: a father’s voice",
            "vurl": ".grade12/english_gr12/resources/Eng_un1/english-unit1-eps1.mp4"
        },
        {
            "id": "g12eu1v2",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu1",
            "episode": "6",
            "title": " Role-play- family issues",
            "vurl": ".grade12/english_gr12/resources/Eng_un1/english-unit1-eps6.mp4"
        },
        {
            "id": "g12eu1v3",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu1",
            "episode": "7",
            "title": " Reading- my family",
            "vurl": ".grade12/english_gr12/resources/Eng_un1/english-unit1-eps7.mp4"
        },
        {
            "id": "g12eu1v4",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu1",
            "episode": "26",
            "title": " Boiling point elevation",
            "vurl": ".grade12/english_gr12/resources/Eng_un1/english-unit1-eps26.mp4"
        },
        {
            "id": "g12eu2v1",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu2",
            "episode": "19",
            "title": " Listening: how I communicate",
            "vurl": ".grade12/english_gr12/resources/Eng_un2/english-unit2-eps19.mp4"
        },
        {
            "id": "g12eu2v2",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu2",
            "episode": "24",
            "title": " Reading: communication in the animal world",
            "vurl": ".grade12/english_gr12/resources/Eng_un2/english-unit2-eps24.mp4"
        },
        {
            "id": "g12eu2v3",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu2",
            "episode": "27",
            "title": " Speaking: games",
            "vurl": ".grade12/english_gr12/resources/Eng_un2/english-unit2-eps27.mp4"
        },
        {
            "id": "g12eu2v4",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu2",
            "episode": "28",
            "title": "Writing: writing a report",
            "vurl": ".grade12/english_gr12/resources/Eng_un2/english-unit2-eps28.mp4"
        },
        {
            "id": "g12eu3v1",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu3",
            "episode": "33",
            "title": "Listening: a speech",
            "vurl": ".grade12/english_gr12/resources/Eng_un3/english-unit3-eps33.mp4"
        },
        {
            "id": "g12eu3v2",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu3",
            "episode": "35",
            "title": "Reading: notes on study skills",
            "vurl": ".grade12/english_gr12/resources/Eng_un3/english-unit3-eps35.mp4"
        },
        {
            "id": "g12eu3v3",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu3",
            "episode": "36",
            "title": " Writing: self-assessment",
            "vurl": ".grade12/english_gr12/resources/Eng_un3/english-unit3-eps36.mp4"
        },
        {
            "id": "g12eu3v4",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu3",
            "episode": "44",
            "title": "Speaking: my future plans",
            "vurl": ".grade12/english_gr12/resources/Eng_un3/english-unit3-eps44.mp4"
        },
        {
            "id": "g12eu4v1",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu4",
            "episode": "52",
            "title": " Speaking: changing the subject",
            "vurl": ".grade12/english_gr12/resources/Eng_un4/english-unit4-eps52.mp4"
        },
        {
            "id": "g12eu4v2",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu4",
            "episode": "58",
            "title": " Listening: the plot of a film",
            "vurl": ".grade12/english_gr12/resources/Eng_un4/english-unit4-eps58.mp4"
        },
        {
            "id": "g12eu4v3",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu4",
            "episode": "61",
            "title": "Vocabulary: writers",
            "vurl": ".grade12/english_gr12/resources/Eng_un4/english-unit4-eps61.mp4"
        },
        {
            "id": "g12eu4v4",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu4",
            "episode": "66",
            "title": " Writing: a film review",
            "vurl": ".grade12/english_gr12/resources/Eng_un4/english-unit4-eps66.mp4"
        },
        {
            "id": "g12eu5v1",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu5",
            "episode": "67",
            "title": " Listening: a lecture on the UN",
            "vurl": ".grade12/english_gr12/resources/Eng_un5/english-unit5-eps67.mp4"
        },
        {
            "id": "g12eu5v2",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu5",
            "episode": "72",
            "title": "Writing: A good leader",
            "vurl": ".grade12/english_gr12/resources/Eng_un5/english-unit5-eps72.mp4"
        },
        {
            "id": "g12eu5v3",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu5",
            "episode": "76",
            "title": " Speaking: the MDGs",
            "vurl": ".grade12/english_gr12/resources/Eng_un5/english-unit5-eps76.mp4"
        },
        {
            "id": "g12eu5v4",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu5",
            "episode": "78",
            "title": "Vocabulary: suffixes",
            "vurl": ".grade12/english_gr12/resources/Eng_un5/english-unit5-eps78.mp4"
        },
        {
            "id": "g12eu6v1",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu6",
            "episode": "88",
            "title": "Writing: a leaflet on fair trade",
            "vurl": ".grade12/english_gr12/resources/Eng_un6/english-unit6-eps88.mp4"
        },
        {
            "id": "g12eu6v2",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu6",
            "episode": "87",
            "title": " Listening: asgede’s jeans",
            "vurl": ".grade12/english_gr12/resources/Eng_un6/english-unit6-eps87.mp4"
        },
        {
            "id": "g12eu6v3",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu6",
            "episode": "98",
            "title": " Speaking: is globalization good or bad?",
            "vurl": ".grade12/english_gr12/resources/Eng_un6/english-unit6-eps98.mp4"
        },
        {
            "id": "g12eu6v4",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu6",
            "episode": "99",
            "title": "focus on vocabulary",
            "vurl": ".grade12/english_gr12/resources/Eng_un6/english-unit6-eps99.mp4"
        },
        {
            "id": "g12eu7v1",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu7",
            "episode": "103",
            "title": " Listening: three employees talk",
            "vurl": ".grade12/english_gr12/resources/Eng_un7/english-unit7-eps103.mp4"
        },
        {
            "id": "g12eu7v2",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu7",
            "episode": "104",
            "title": " Reading: increase your word power",
            "vurl": ".grade12/english_gr12/resources/Eng_un7/english-unit7-eps104.mp4"
        },
        {
            "id": "g12eu7v3",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu7",
            "episode": "108",
            "title": "Speaking: qualification and skills for different jobs",
            "vurl": ".grade12/english_gr12/resources/Eng_un7/english-unit7-eps108.mp4"
        },
        {
            "id": "g12eu7v4",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu7",
            "episode": "117",
            "title": "Writing: a letter of application",
            "vurl": ".grade12/english_gr12/resources/Eng_un7/english-unit7-eps117.mp4"
        },
        {
            "id": "g12eu8v1",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu8",
            "episode": "119",
            "title": "Reading: past simple and past perfect",
            "vurl": ".grade12/english_gr12/resources/Eng_un8/english-unit8-eps119.mp4"
        },
        {
            "id": "g12eu8v2",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu8",
            "episode": "122",
            "title": "Listening- dinkinesh and selam",
            "vurl": ".grade12/english_gr12/resources/Eng_un8/english-unit8-eps122.mp4"
        },
        {
            "id": "g12eu8v3",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu8",
            "episode": "127",
            "title": " Speaking: development and civilization",
            "vurl": ".grade12/english_gr12/resources/Eng_un8/english-unit8-eps127.mp4"
        },
        {
            "id": "g12eu8v4",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu8",
            "episode": "131",
            "title": "writing :an essay",
            "vurl": ".grade12/english_gr12/resources/Eng_un8/english-unit8-eps131.mp4"
        },
        {
            "id": "g12eu9v1",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu9",
            "episode": "137",
            "title": " Listening: short conversation",
            "vurl": ".grade12/english_gr12/resources/Eng_un9/english-unit9-eps137.mp4"
        },
        {
            "id": "g12eu9v2",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu9",
            "episode": "141",
            "title": "Reading: broken britain",
            "vurl": ".grade12/english_gr12/resources/Eng_un9/english-unit9-eps141.mp4"
        },
        {
            "id": "g12eu9v3",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu9",
            "episode": "144",
            "title": " Speaking: stress and intonation",
            "vurl": ".grade12/english_gr12/resources/Eng_un9/english-unit9-eps144.mp4"
        },
        {
            "id": "g12eu9v4",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu9",
            "episode": "147",
            "title": "writing :an essay",
            "vurl": ".grade12/english_gr12/resources/Eng_un9/english-unit9-eps148.mp4"
        },
        {
            "id": "g12eu10v1",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu10",
            "episode": "158",
            "title": " Vocabulary: phrasal verbs with ’up’",
            "vurl": ".grade12/english_gr12/resources/Eng_un10/english-unit10-eps158.mp4"
        },
        {
            "id": "g12eu10v2",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu10",
            "episode": "159",
            "title": "writing :a report",
            "vurl": ".grade12/english_gr12/resources/Eng_un10/english-unit10-eps159.mp4"
        },
        {
            "id": "g12eu10v3",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu10",
            "episode": "160",
            "title": "Listening: future threats",
            "vurl": ".grade12/english_gr12/resources/Eng_un10/english-unit10-eps160.mp4"
        },
        {
            "id": "g12eu10v4",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu10",
            "episode": "164",
            "title": "Speaking: the earth colony debate",
            "vurl": ".grade12/english_gr12/resources/Eng_un10/english-unit10-eps164.mp4"
        },
        {
            "id": "g12eu11v1",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu11",
            "episode": "169",
            "title": " Listening: the Ethiopian film industry",
            "vurl": ".grade12/english_gr12/resources/Eng_un11/english-unit11-eps169.mp4"
        },
        {
            "id": "g12eu11v2",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu11",
            "episode": "175",
            "title": "Additional learning strategies exam strategies",
            "vurl": ".grade12/english_gr12/resources/Eng_un11/english-unit11-eps175.mp4"
        },
        {
            "id": "g12eu11v3",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu11",
            "episode": "179",
            "title": "Speaking: indirect or embedded question",
            "vurl": ".grade12/english_gr12/resources/Eng_un11/english-unit11-eps179.mp4"
        },
        {
            "id": "g12eu11v4",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu11",
            "episode": "180",
            "title": "Speaking: short responses",
            "vurl": ".grade12/english_gr12/resources/Eng_un11/english-unit11-eps180.mp4"
        },
        {
            "id": "g12eu12v1",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu12",
            "episode": "187",
            "title": "Reading: extract from magazine articles",
            "vurl": ".grade12/english_gr12/resources/Eng_un12/english-unit12-eps187.mp4"
        },
        {
            "id": "g12eu12v2",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu12",
            "episode": "189",
            "title": "Listening: magazine jobs",
            "vurl": ".grade12/english_gr12/resources/Eng_un12/english-unit12-eps189.mp4"
        },
        {
            "id": "g12eu12v3",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu12",
            "episode": "193A",
            "title": "Speaking: planning, preparing and producing a class magazine",
            "vurl": ".grade12/english_gr12/resources/Eng_un12/english-unit12-eps193A.mp4"
        },
        {
            "id": "g12eu12v4",
            "gid": "g12",
            "cid": "g12e",
            "uid": "g12eu12",
            "episode": "193B",
            "title": " Writing: planning, preparing and producing a class magazine",
            "vurl": ".grade12/english_gr12/resources/Eng_un12/english-unit12-eps193B.mp4"
        },
        {
            "id": "g12ciu1v1",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu1",
            "episode": "1",
            "title": " The necessity of a democratic system part1",
            "vurl": ".grade12/civics_gr12/resources/civ_un1/civic-unit1-eps1.mp4"
        },
        {
            "id": "g12ciu1v2",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu1",
            "episode": "2",
            "title": " The necessity of a democratic system part2",
            "vurl": ".grade12/civics_gr12/resources/civ_un1/civic-unit1-eps2.mp4"
        },
        {
            "id": "g12ciu1v3",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu1",
            "episode": "3",
            "title": "Authority and power part1",
            "vurl": ".grade12/civics_gr12/resources/civ_un1/civic-unit1-eps3.mp4"
        },
        {
            "id": "g12ciu1v4",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu1",
            "episode": "4",
            "title": "Authority and power part2",
            "vurl": ".grade12/civics_gr12/resources/civ_un1/civic-unit1-eps4.mp4"
        },
        {
            "id": "g12ciu1v5",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu1",
            "episode": "6",
            "title": " Constitutional rights versus constitutional obligations",
            "vurl": ".grade12/civics_gr12/resources/civ_un1/civic-unit1-eps6.mp4"
        },
        {
            "id": "g12ciu1v6",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu1",
            "episode": "7",
            "title": "State power distribution in Ethiopia",
            "vurl": ".grade12/civics_gr12/resources/civ_un1/civic-unit1-eps7.mp4"
        },
        {
            "id": "g12ciu1v1",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu1",
            "episode": "9",
            "title": "Ethiopia foreign relations part1",
            "vurl": ".grade12/civics_gr12/resources/civ_un1/civic-unit1-eps9.mp4"
        },
        {
            "id": "g12ciu1v8",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu1",
            "episode": "10",
            "title": "Ethiopia foreign relations part2",
            "vurl": ".grade12/civics_gr12/resources/civ_un1/civic-unit1-eps10.mp4"
        },
        {
            "id": "g12ciu2v1",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu2",
            "episode": "1",
            "title": "constitution and rule of law",
            "vurl": ".grade12/civics_gr12/resources/civ_un2/civic-unit2-eps1.mp4"
        },
        {
            "id": "g12ciu2v2",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu2",
            "episode": "2",
            "title": "Rule of law and management of conflicts part1",
            "vurl": ".grade12/civics_gr12/resources/civ_un2/civic-unit2-eps2.mp4"
        },
        {
            "id": "g12ciu2v3",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu2",
            "episode": "3",
            "title": "Rule of law and management of conflicts part2",
            "vurl": ".grade12/civics_gr12/resources/civ_un2/civic-unit2-eps3.mp4"
        },
        {
            "id": "g12ciu2v4",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu2",
            "episode": "5",
            "title": "Rule of law and management of conflicts part3",
            "vurl": ".grade12/civics_gr12/resources/civ_un2/civic-unit2-eps5.mp4"
        },
        {
            "id": "g12ciu2v5",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu2",
            "episode": "7",
            "title": "Rule of law and management of conflicts part4",
            "vurl": ".grade12/civics_gr12/resources/civ_un2/civic-unit2-eps7.mp4"
        },
        {
            "id": "g12ciu2v6",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu2",
            "episode": "8",
            "title": "Rule of law and management of conflicts part5",
            "vurl": ".grade12/civics_gr12/resources/civ_un2/civic-unit2-eps8.mp4"
        },
        {
            "id": "g12ciu2v7",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu2",
            "episode": "11",
            "title": "Rule of law and governments",
            "vurl": ".grade12/civics_gr12/resources/civ_un2/civic-unit2-eps11.mp4"
        },
        {
            "id": "g12ciu2v8",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu2",
            "episode": "13",
            "title": " Rule of law and flight against corruption",
            "vurl": ".grade12/civics_gr12/resources/civ_un2/civic-unit2-eps13.mp4"
        },
        {
            "id": "g12ciu3v1",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu3",
            "episode": "1",
            "title": "The history of the struggles of the nations nationalities and peoples of Ethiopia against oppression part1",
            "vurl": ".grade12/civics_gr12/resources/civ_un3/civic-unit3-eps1.mp4"
        },
        {
            "id": "g12ciu3v2",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu3",
            "episode": "2",
            "title": "The history of the struggles of the nations nationalities and peoples of Ethiopia against oppression part2",
            "vurl": ".grade12/civics_gr12/resources/civ_un3/civic-unit3-eps2.mp4"
        },
        {
            "id": "g12ciu3v3",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu3",
            "episode": "3",
            "title": "The history of the struggles of the nations nationalities and peoples of Ethiopia against oppression part3",
            "vurl": ".grade12/civics_gr12/resources/civ_un3/civic-unit3-eps3.mp4"
        },
        {
            "id": "g12ciu3v4",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu3",
            "episode": "6",
            "title": " Equality and the nation of affirmative action",
            "vurl": ".grade12/civics_gr12/resources/civ_un3/civic-unit3-eps6.mp4"
        },
        {
            "id": "g12ciu3v5",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu3",
            "episode": "8",
            "title": "Unity in diversity part1",
            "vurl": ".grade12/civics_gr12/resources/civ_un3/civic-unit3-eps8.mp4"
        },
        {
            "id": "g12ciu3v6",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu3",
            "episode": "9",
            "title": "Unity in diversity part2",
            "vurl": ".grade12/civics_gr12/resources/civ_un3/civic-unit3-eps9.mp4"
        },
        {
            "id": "g12ciu4v1",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu4",
            "episode": "1",
            "title": "Equity of benefits and burdens",
            "vurl": ".grade12/civics_gr12/resources/civ_un4/civic-unit4-eps1.mp4"
        },
        {
            "id": "g12ciu4v2",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu4",
            "episode": "2",
            "title": "justice and the judiciary",
            "vurl": ".grade12/civics_gr12/resources/civ_un4/civic-unit4-eps2.mp4"
        },
        {
            "id": "g12ciu4v3",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu4",
            "episode": "4",
            "title": "Crime and justice part1",
            "vurl": ".grade12/civics_gr12/resources/civ_un4/civic-unit4-eps4.mp4"
        },
        {
            "id": "g12ciu4v4",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu4",
            "episode": "5",
            "title": "Crime and justice part2",
            "vurl": ".grade12/civics_gr12/resources/civ_un4/civic-unit4-eps5.mp4"
        },
        {
            "id": "g12ciu4v5",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu4",
            "episode": "7",
            "title": "Maintenance of justice in taxation",
            "vurl": ".grade12/civics_gr12/resources/civ_un4/civic-unit4-eps7.mp4"
        },
        {
            "id": "g12ciu5v1",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu5",
            "episode": "1",
            "title": " The quality of a patriot",
            "vurl": ".grade12/civics_gr12/resources/civ_un5/civic-unit5-eps1.mp4"
        },
        {
            "id": "g12ciu5v2",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu5",
            "episode": "2",
            "title": "Ethiopian history in international perspective",
            "vurl": ".grade12/civics_gr12/resources/civ_un5/civic-unit5-eps2.mp4"
        },
        {
            "id": "g12ciu5v3",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu5",
            "episode": "4",
            "title": " Ethiopia’s contribution to peace and stability of the world",
            "vurl": ".grade12/civics_gr12/resources/civ_un5/civic-unit5-eps4.mp4"
        },
        {
            "id": "g12ciu5v4",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu5",
            "episode": "5",
            "title": "the quality of a patriot",
            "vurl": ".grade12/civics_gr12/resources/civ_un5/civic-unit5-eps5.mp4"
        },
        {
            "id": "g12ciu5v5",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu5",
            "episode": "8",
            "title": "The duties of a patriot citizen",
            "vurl": ".grade12/civics_gr12/resources/civ_un5/civic-unit5-eps8.mp4"
        },
        {
            "id": "g12ciu5v6",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu5",
            "episode": "9",
            "title": "Concern for the well-being of the international community",
            "vurl": ".grade12/civics_gr12/resources/civ_un5/civic-unit5-eps9.mp4"
        },
        {
            "id": "g12ciu6v1",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu6",
            "episode": "1",
            "title": " Executing responsibility",
            "vurl": ".grade12/civics_gr12/resources/civ_un6/civic-unit6-eps1.mp4"
        },
        {
            "id": "g12ciu6v2",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu6",
            "episode": "2",
            "title": " Executing responsibility part2",
            "vurl": ".grade12/civics_gr12/resources/civ_un6/civic-unit6-eps2.mp4"
        },
        {
            "id": "g12ciu6v3",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu6",
            "episode": "3",
            "title": " Costs of fulfilling responsibility",
            "vurl": ".grade12/civics_gr12/resources/civ_un6/civic-unit6-eps3.mp4"
        },
        {
            "id": "g12ciu6v4",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu6",
            "episode": "5",
            "title": "Benefits resulting from the fulfillment of responsibilities",
            "vurl": ".grade12/civics_gr12/resources/civ_un6/civic-unit6-eps5.mp4"
        },
        {
            "id": "g12ciu6v5",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu6",
            "episode": "6",
            "title": "Promoting understanding in the international arena",
            "vurl": ".grade12/civics_gr12/resources/civ_un6/civic-unit6-eps6.mp4"
        },
        {
            "id": "g12ciu7v1",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu7",
            "episode": "1",
            "title": "Work as human necessity",
            "vurl": ".grade12/civics_gr12/resources/civ_un7/civic-unit7-eps1.mp4"
        },
        {
            "id": "g12ciu7v2",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu7",
            "episode": "2",
            "title": " Factors determining the world of work",
            "vurl": ".grade12/civics_gr12/resources/civ_un7/civic-unit7-eps2.mp4"
        },
        {
            "id": "g12ciu7v3",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu7",
            "episode": "3",
            "title": " leisure",
            "vurl": ".grade12/civics_gr12/resources/civ_un7/civic-unit7-eps3.mp4"
        },
        {
            "id": "g12ciu7v4",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu7",
            "episode": "5",
            "title": " Work in an international perspective",
            "vurl": ".grade12/civics_gr12/resources/civ_un7/civic-unit7-eps5.mp4"
        },
        {
            "id": "g12ciu8v1",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu8",
            "episode": "1",
            "title": " Self- reliance",
            "vurl": ".grade12/civics_gr12/resources/civ_un8/civic-unit8-eps1.mp4"
        },
        {
            "id": "g12ciu8v2",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu8",
            "episode": "2",
            "title": "self-esteem",
            "vurl": ".grade12/civics_gr12/resources/civ_un8/civic-unit8-eps2.mp4"
        },
        {
            "id": "g12ciu8v3",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu8",
            "episode": "4",
            "title": "dependency",
            "vurl": ".grade12/civics_gr12/resources/civ_un8/civic-unit8-eps4.mp4"
        },
        {
            "id": "g12ciu8v4",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu8",
            "episode": "5",
            "title": "Dependency in the international context",
            "vurl": ".grade12/civics_gr12/resources/civ_un8/civic-unit8-eps5.mp4"
        },
        {
            "id": "g12ciu8v5",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu8",
            "episode": "6",
            "title": "Dependency in the international context- loss of security",
            "vurl": ".grade12/civics_gr12/resources/civ_un8/civic-unit8-eps6.mp4"
        },
        {
            "id": "g12ciu8v6",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu8",
            "episode": "9",
            "title": "Self- reliance and assertiveness",
            "vurl": ".grade12/civics_gr12/resources/civ_un8/civic-unit8-eps9.mp4"
        },
        {
            "id": "g12ciu9v1",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu9",
            "episode": "2",
            "title": " Methods of saving part1",
            "vurl": ".grade12/civics_gr12/resources/civ_un9/civic-unit9-eps2.mp4"
        },
        {
            "id": "g12ciu9v2",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu9",
            "episode": "3",
            "title": " Methods of saving part2",
            "vurl": ".grade12/civics_gr12/resources/civ_un9/civic-unit9-eps3.mp4"
        },
        {
            "id": "g12ciu9v3",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu9",
            "episode": "5",
            "title": " Money and capital part1",
            "vurl": ".grade12/civics_gr12/resources/civ_un9/civic-unit9-eps5.mp4"
        },
        {
            "id": "g12ciu9v4",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu9",
            "episode": "6",
            "title": " Money and capital part2",
            "vurl": ".grade12/civics_gr12/resources/civ_un9/civic-unit9-eps6.mp4"
        },
        {
            "id": "g12ciu10v1",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu10",
            "episode": "2",
            "title": " Effective leadership for active participation part2",
            "vurl": ".grade12/civics_gr12/resources/civ_un10/civic-unit10-eps2.mp4"
        },
        {
            "id": "g12ciu10v2",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu10",
            "episode": "3",
            "title": "Civic participation part1",
            "vurl": ".grade12/civics_gr12/resources/civ_un10/civic-unit10-eps3.mp4"
        },
        {
            "id": "g12ciu10v3",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu10",
            "episode": "5",
            "title": "Civic participation part2",
            "vurl": ".grade12/civics_gr12/resources/civ_un10/civic-unit10-eps5.mp4"
        },
        {
            "id": "g12ciu11v1",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu11",
            "episode": "1",
            "title": "knowledge",
            "vurl": ".grade12/civics_gr12/resources/civ_un11/civic-unit11-eps1.mp4"
        },
        {
            "id": "g12ciu11v2",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu11",
            "episode": "2",
            "title": " information as a source of knowledge part1",
            "vurl": ".grade12/civics_gr12/resources/civ_un11/civic-unit11-eps2.mp4"
        },
        {
            "id": "g12ciu11v3",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu11",
            "episode": "3",
            "title": " information as a source of knowledge part2",
            "vurl": ".grade12/civics_gr12/resources/civ_un11/civic-unit11-eps3.mp4"
        },
        {
            "id": "g12ciu11v4",
            "gid": "g12",
            "cid": "g12ci",
            "uid": "g12ciu11",
            "episode": "5",
            "title": " Developing reading habits part1",
            "vurl": ".grade12/civics_gr12/resources/civ_un11/civic-unit11-eps5.mp4"
        },
        {
            "id": "g12au1v1",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au1",
            "episode": "1",
            "title": " አንብቦ መረዳት",
            "vurl": ".grade12/Amharic/web/resources/un1/Amharic_.grade12_unit1_eps1.mp4"
        },
        {
            "id": "g12au1v2",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au1",
            "episode": "2",
            "title": "መጻፍ",
            "vurl": ".grade12/Amharic/web/resources/un1/Amharic_.grade12_unit1_eps2.mp4"
        },
        {
            "id": "g12au1v3",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au1",
            "episode": "3",
            "title": "ማዳመጥ",
            "vurl": ".grade12/Amharic/web/resources/un1/Amharic_.grade12_unit1_eps3.mp4"
        },
        {
            "id": "g12au1v4",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au1",
            "episode": "5",
            "title": "ሥነ ልሣን",
            "vurl": ".grade12/Amharic/web/resources/un1/Amharic_.grade12_unit1_eps5.mp4"
        },
        {
            "id": "g12au2v1",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au2",
            "episode": "1",
            "title": "አንብቦ መረዳት",
            "vurl": ".grade12/Amharic/web/resources/un2/Amharic_.grade12_unit2_eps1.mp4"
        },
        {
            "id": "g12au2v2",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au2",
            "episode": "2",
            "title": "መጻፍ)",
            "vurl": ".grade12/Amharic/web/resources/un2/Amharic_.grade12_unit2_eps2.mp4"
        },
        {
            "id": "g12au3v1",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au3",
            "episode": "1",
            "title": " አንብቦ መረዳት",
            "vurl": ".grade12/Amharic/web/resources/un3/Amharic_.grade12_unit3_eps1.mp4"
        },
        {
            "id": "g12au3v2",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au3",
            "episode": "4",
            "title": " መናገር",
            "vurl": ".grade12/Amharic/web/resources/un3/Amharic_.grade12_unit3_eps4.mp4"
        },
        {
            "id": "g12au3v3",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au3",
            "episode": "5",
            "title": " ሥነ ልሣን",
            "vurl": ".grade12/Amharic/web/resources/un3/Amharic_.grade12_unit3_eps5.mp4"
        },
        {
            "id": "g12au3v4",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au3",
            "episode": "6",
            "title": " ስነ-ጽሑፍ፣የሥነጽሑፍ ሒስ",
            "vurl": ".grade12/Amharic/web/resources/un3/Amharic_.grade12_unit3_eps6.mp4"
        },
        {
            "id": "g12au4v1",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au4",
            "episode": "1",
            "title": "አንብቦ መረዳት",
            "vurl": ".grade12/Amharic/web/resources/un4/Amharic_.grade12_unit4_eps1.mp4"
        },
        {
            "id": "g12au4v2",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au4",
            "episode": "2",
            "title": "መጻፍ",
            "vurl": ".grade12/Amharic/web/resources/un4/Amharic_.grade12_unit4_eps2.mp4"
        },
        {
            "id": "g12au4v3",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au4",
            "episode": "4",
            "title": " መናገር",
            "vurl": ".grade12/Amharic/web/resources/un4/Amharic_.grade12_unit4_eps4.mp4"
        },
        {
            "id": "g12au4v4",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au4",
            "episode": "6",
            "title": " ስነ-ጽሑፍ፣ግጭት",
            "vurl": ".grade12/Amharic/web/resources/un4/Amharic_.grade12_unit4_eps6.mp4"
        },
        {
            "id": "g12au4v5",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au5",
            "episode": "2",
            "title": " መጻፍ",
            "vurl": ".grade12/Amharic/web/resources/un5/Amharic_.grade12_unit5_eps2.mp4"
        },
        {
            "id": "g12au5v1",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au5",
            "episode": "3",
            "title": " ማዳመጥ፣ የቃለመጠይቅ ዝግጅትና አቀራረብ ሂደት",
            "vurl": ".grade12/Amharic/web/resources/un5/Amharic_.grade12_unit5_eps3.mp4"
        },
        {
            "id": "g12au5v2",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au5",
            "episode": "4",
            "title": "መናገር፣ ጭውውት",
            "vurl": ".grade12/Amharic/web/resources/un5/Amharic_.grade12_unit5_eps4.mp4"
        },
        {
            "id": "g12au6v1",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au6",
            "episode": "1",
            "title": " አንብቦ መረዳት",
            "vurl": ".grade12/Amharic/web/resources/un6/Amharic_.grade12_unit6_eps1.mp4"
        },
        {
            "id": "g12au6v2",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au6",
            "episode": "2",
            "title": "መጻፍ",
            "vurl": ".grade12/Amharic/web/resources/un6/Amharic_.grade12_unit6_eps2.mp4"
        },
        {
            "id": "g12au6v3",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au6",
            "episode": "3",
            "title": "የመረጃ ምንጮች አጠቃቀስና የሀሳብ መዋሻ መንገዶች",
            "vurl": ".grade12/Amharic/web/resources/un6/Amharic_.grade12_unit6_eps3.mp4"
        },
        {
            "id": "g12au6v4",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au6",
            "episode": "4",
            "title": " ማዳመጥ",
            "vurl": ".grade12/Amharic/web/resources/un6/Amharic_.grade12_unit6_eps4.mp4"
        },
        {
            "id": "g12au7v1",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au7",
            "episode": "2",
            "title": " መጻፍ",
            "vurl": ".grade12/Amharic/web/resources/un7/Amharic_.grade12_unit7_eps2.mp4"
        },
        {
            "id": "g12au7v2",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au7",
            "episode": "4",
            "title": "መናገር",
            "vurl": ".grade12/Amharic/web/resources/un7/Amharic_.grade12_unit7_eps4.mp4"
        },
        {
            "id": "g12au7v3",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au7",
            "episode": "5",
            "title": "ሥነ ልሣን",
            "vurl": ".grade12/Amharic/web/resources/un7/Amharic_.grade12_unit7_eps5.mp4"
        },
        {
            "id": "g12au7v4",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au7",
            "episode": "6",
            "title": " ስነ-ጽሑፍ",
            "vurl": ".grade12/Amharic/web/resources/un7/Amharic_.grade12_unit7_eps6.mp4"
        },
        {
            "id": "g12au8v1",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au8",
            "episode": "2",
            "title": " መጻፍ",
            "vurl": ".grade12/Amharic/web/resources/un8/Amharic_.grade12_unit8_eps2.mp4"
        },
        {
            "id": "g12au8v2",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au8",
            "episode": "4",
            "title": " መናገር",
            "vurl": ".grade12/Amharic/web/resources/un8/Amharic_.grade12_unit8_eps4.mp4"
        },
        {
            "id": "g12au9v1",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au9",
            "episode": "2",
            "title": "መጻፍ",
            "vurl": ".grade12/Amharic/web/resources/un9/Amharic_.grade12_unit9_eps2.mp4"
        },
        {
            "id": "g12au9v2",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au9",
            "episode": "3",
            "title": "ማድመጥ",
            "vurl": ".grade12/Amharic/web/resources/un9/Amharic_.grade12_unit9_eps3.mp4"
        },
        {
            "id": "g12au9v3",
            "gid": "g12",
            "cid": "g12a",
            "uid": "g12au9",
            "episode": "5",
            "title": " ሥነጽሑፍ",
            "vurl": ".grade12/Amharic/web/resources/un9/Amharic_.grade12_unit9_eps5.mp4"
        },
        {
            "id": "g12tdu1v1",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu1",
            "episode": "1",
            "title": "Principle of sketching",
            "vurl": ".grade12/TD_gr12/resources/TD_un1/t%20d-unit1-eps1.mp4"
        },
        {
            "id": "g12tdu1v2",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu1",
            "episode": "2",
            "title": "Sketching technique",
            "vurl": ".grade12/TD_gr12/resources/TD_un1/t%20d-unit1-eps2.mp4"
        },
        {
            "id": "g12tdu1v3",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu1",
            "episode": "5",
            "vurl": ".grade12/TD_gr12/resources/TD_un1/t%20d-unit1-eps5.mp4"
        },
        {
            "id": "g12tdu2v1",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu2",
            "episode": "1",
            "title": " Position of reference line, horizontal projection& elevation view",
            "vurl": ".grade12/TD_gr12/resources/TD_un2/t%20d-unit2-eps1.mp4"
        },
        {
            "id": "g12tdu2v2",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu2",
            "episode": "2",
            "title": "Projection of point, lines & plane surfaces",
            "vurl": ".grade12/TD_gr12/resources/TD_un2/t%20d-unit2-eps2.mp4"
        },
        {
            "id": "g12tdu2v3",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu2",
            "episode": "7",
            "title": " Construction of auxiliary views",
            "vurl": ".grade12/TD_gr12/resources/TD_un2/t%20d-unit2-eps7.mp4"
        },
        {
            "id": "g12tdu2v4",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu2",
            "episode": "9",
            "title": "Primary & secondary auxiliary view",
            "vurl": ".grade12/TD_gr12/resources/TD_un2/t%20d-unit2-eps9.mp4"
        },
        {
            "id": "g12tdu3v1",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu3",
            "episode": "1",
            "title": "Terminology &common practice of sectioning",
            "vurl": ".grade12/TD_gr12/resources/TD_un3/t%20d-unit3-eps1.mp4"
        },
        {
            "id": "g12tdu3v2",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu3",
            "episode": "2",
            "title": " Full, half & offset sections",
            "vurl": ".grade12/TD_gr12/resources/TD_un3/t%20d-unit3-eps2.mp4"
        },
        {
            "id": "g12tdu3v3",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu3",
            "episode": "6",
            "title": "Broken out, revolved & removed sections",
            "vurl": ".grade12/TD_gr12/resources/TD_un3/t%20d-unit3-eps6.mp4"
        },
        {
            "id": "g12tdu3v4",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu3",
            "episode": "10",
            "title": " Conventional practice in sectioning",
            "vurl": ".grade12/TD_gr12/resources/TD_un3/t%20d-unit3-eps10.mp4"
        },
        {
            "id": "g12tdu4v1",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu4",
            "episode": "1",
            "title": " Introduction to dimensioning",
            "vurl": ".grade12/TD_gr12/resources/TD_un4/t%20d-unit4-eps1.mp4"
        },
        {
            "id": "g12tdu4v2",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu4",
            "episode": "2",
            "title": "Theory of dimensioning",
            "vurl": ".grade12/TD_gr12/resources/TD_un4/t%20d-unit4-eps2.mp4"
        },
        {
            "id": "g12tdu4v3",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu4",
            "episode": "4",
            "title": " Methods of dimensioning",
            "vurl": ".grade12/TD_gr12/resources/TD_un4/t%20d-unit4-eps4.mp4"
        },
        {
            "id": "g12tdu4v4",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu4",
            "episode": "6",
            "title": " Placement of dimensions",
            "vurl": ".grade12/TD_gr12/resources/TD_un4/t%20d-unit4-eps6.mp4"
        },
        {
            "id": "g12tdu5v1",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu5",
            "episode": "1",
            "title": "Methods of development",
            "vurl": ".grade12/TD_gr12/resources/TD_un5/t%20d-unit5-eps1.mp4"
        },
        {
            "id": "g12tdu5v2",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu5",
            "episode": "2",
            "title": "Methods of development",
            "vurl": ".grade12/TD_gr12/resources/TD_un5/t%20d-unit5-eps2.mp4"
        },
        {
            "id": "g12tdu5v3",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu5",
            "episode": "5",
            "title": "Methods of development",
            "vurl": ".grade12/TD_gr12/resources/TD_un5/t%20d-unit5-eps5.mp4"
        },
        {
            "id": "g12tdu5v4",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu5",
            "episode": "11",
            "title": "Methods of development",
            "vurl": ".grade12/TD_gr12/resources/TD_un5/t%20d-unit5-eps11.mp4"
        },
        {
            "id": "g12tdu5v5",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu5",
            "episode": "14",
            "title": " Intersection between geomettcal solides",
            "vurl": ".grade12/TD_gr12/resources/TD_un5/t%20d-unit5-eps14.mp4"
        },
        {
            "id": "g12tdu5v6",
            "gid": "g12",
            "cid": "g12td",
            "uid": "g12tdu5",
            "episode": "18",
            "title": " Intersection between geomettcal solides",
            "vurl": ".grade12/TD_gr12/resources/TD_un5/t%20d-unit5-eps18.mp4"
        },
        {
            "id": "g12msu1v1",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu1",
            "episode": "2",
            "title": "sequences",
            "vurl": ".grade12/maths_gr12/web/resources/math_u1/maths-unit1-eps2.mp4"
        },
        {
            "id": "g12msu1v2",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu1",
            "episode": "6",
            "title": "Arithmetic sequences and geometric sequence part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u1/maths-unit1-eps6.mp4"
        },
        {
            "id": "g12msu1v3",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu1",
            "episode": "11",
            "title": " The sigma notation and partial sums",
            "vurl": ".grade12/maths_gr12/web/resources/math_u1/mathes-unit1-eps11.mp4"
        },
        {
            "id": "g12msu1v4",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu1",
            "episode": "13",
            "title": "infinite series",
            "vurl": ".grade12/maths_gr12/web/resources/math_u1/mathes-unit1-eps13.mp4"
        },
        {
            "id": "g12msu1v5",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu1",
            "episode": "15",
            "title": "Applications of arithmetic progressions and geometric progressions",
            "vurl": ".grade12/maths_gr12/web/resources/math_u1/mathes-unit1-eps15.mp4"
        },
        {
            "id": "g12msu2v1",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu2",
            "episode": "1",
            "title": " Limits of sequences of numbers part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u2/mathes-unit2-eps1.mp4"
        },
        {
            "id": "g12msu2v2",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu2",
            "episode": "4",
            "title": " Limits of sequences of numbers part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u2/mathes-unit2-eps4.mp4"
        },
        {
            "id": "g12msu2v3",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu2",
            "episode": "7",
            "title": " Limits of sequences of numbers part 3",
            "vurl": ".grade12/maths_gr12/web/resources/math_u2/mathes-unit2-eps7.mp4"
        },
        {
            "id": "g12msu2v4",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu2",
            "episode": "8",
            "title": " Limits of sequences of numbers part 4",
            "vurl": ".grade12/maths_gr12/web/resources/math_u2/mathes-unit2-eps8.mp4"
        },
        {
            "id": "g12msu2v5",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu2",
            "episode": "13",
            "title": "Limits of functions part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u2/mathes-unit2-eps13.mp4"
        },
        {
            "id": "g12msu2v6",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu2",
            "episode": "14",
            "title": "Limits of functions part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u2/mathes-unit2-eps14.mp4"
        },
        {
            "id": "g12msu2v7",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu2",
            "episode": "19",
            "title": " Continuity of a function part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u2/mathes-unit2-eps19.mp4"
        },
        {
            "id": "g12msu2v8",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu2",
            "episode": "21",
            "title": " Continuity of a function part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u2/mathes-unit2-eps21.mp4"
        },
        {
            "id": "g12msu2v9",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu2",
            "episode": "24",
            "title": " Exercises on application of limits",
            "vurl": ".grade12/maths_gr12/web/resources/math_u2/mathes-unit2-eps24.mp4"
        },
        {
            "id": "g12msu3v1",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu3",
            "episode": "1",
            "title": " Introduction to derivatives part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u3/mathes-unit3-eps1.mp4"
        },
        {
            "id": "g12msu3v2",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu3",
            "episode": "2",
            "title": " Introduction to derivatives part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u3/mathes-unit3-eps2.mp4"
        },
        {
            "id": "g12msu3v3",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu3",
            "episode": "5",
            "title": " Introduction to derivatives part 3",
            "vurl": ".grade12/maths_gr12/web/resources/math_u3/mathes-unit3-eps5.mp4"
        },
        {
            "id": "g12msu3v4",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu3",
            "episode": "8",
            "title": " Introduction to derivatives part 4",
            "vurl": ".grade12/maths_gr12/web/resources/math_u3/mathes-unit3-eps8.mp4"
        },
        {
            "id": "g12msu3v5",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu3",
            "episode": "14",
            "title": "Derivatives of Combination and Compostion of Function part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u3/mathes-unit3-eps14.mp4"
        },
        {
            "id": "g12msu3v6",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu3",
            "episode": "21",
            "title": "Derivatives of Combination and Compostion of Function part 3",
            "vurl": ".grade12/maths_gr12/web/resources/math_u3/mathes-unit3-eps21.mp4"
        },
        {
            "id": "g12msu3v7",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu3",
            "episode": "24",
            "title": "Derivatives of Combination and Compostion of Function part 4",
            "vurl": ".grade12/maths_gr12/web/resources/math_u3/mathes-unit3-eps24.mp4"
        },
        {
            "id": "g12msu4v1",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu4",
            "episode": "1",
            "title": "Extreme values of a function part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u4/mathes-unit4-eps1.mp4"
        },
        {
            "id": "g12msu4v2",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu4",
            "episode": "6",
            "title": "Extreme values of a function part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u4/mathes-unit4-eps6.mp4"
        },
        {
            "id": "g12msu4v3",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu4",
            "episode": "9",
            "title": "Extreme values of a function part 3",
            "vurl": ".grade12/maths_gr12/web/resources/math_u4/mathes-unit4-eps9.mp4"
        },
        {
            "id": "g12msu4v4",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu4",
            "episode": "11",
            "title": "Extreme values of a function part 4",
            "vurl": ".grade12/maths_gr12/web/resources/math_u4/mathes-unit4-eps11.mp4"
        },
        {
            "id": "g12msu4v5",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu4",
            "episode": "14",
            "title": "Minimization and maximization problems part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u4/mathes-unit4-eps14.mp4"
        },
        {
            "id": "g12msu4v6",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu4",
            "episode": "17",
            "title": "Minimization and maximization problems part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u4/mathes-unit4-eps17.mp4"
        },
        {
            "id": "g12msu4v7",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu4",
            "episode": "20",
            "title": "Rate of change part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u4/mathes-unit4-eps20.mp4"
        },
        {
            "id": "g12msu4v8",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu4",
            "episode": "22",
            "title": "Rate of change part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u4/mathes-unit4-eps22.mp4"
        },
        {
            "id": "g12msu4v9",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu4",
            "episode": "24",
            "title": "Rate of change part 3",
            "vurl": ".grade12/maths_gr12/web/resources/math_u4/mathes-unit4-eps24.mp4"
        },
        {
            "id": "g12msu5v1",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu5",
            "episode": "4",
            "title": " Integrating simple functions",
            "vurl": ".grade12/maths_gr12/web/resources/math_u5/mathes-unit5-eps4.mp4"
        },
        {
            "id": "g12msu5v2",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu5",
            "episode": "8",
            "title": " Techniques of integration",
            "vurl": ".grade12/maths_gr12/web/resources/math_u5/mathes-unit5-eps8.mp4"
        },
        {
            "id": "g12msu5v3",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu5",
            "episode": "12",
            "title": " Integration by parts",
            "vurl": ".grade12/maths_gr12/web/resources/math_u5/mathes-unit5-eps12.mp4"
        },
        {
            "id": "g12msu5v4",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu5",
            "episode": "17",
            "title": "Definite integrals",
            "vurl": ".grade12/maths_gr12/web/resources/math_u5/mathes-unit5-eps17.mp4"
        },
        {
            "id": "g12msu5v5",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu5",
            "episode": "18",
            "title": "Fundamental theorem of calculus",
            "vurl": ".grade12/maths_gr12/web/resources/math_u5/mathes-unit5-eps18.mp4"
        },
        {
            "id": "g12msu5v6",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu5",
            "episode": "25",
            "title": "Application of intergral calculus",
            "vurl": ".grade12/maths_gr12/web/resources/math_u5/mathes-unit5-eps25.mp4"
        },
        {
            "id": "g12msu5v7",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu5",
            "episode": "27",
            "title": " The volume of revolution",
            "vurl": ".grade12/maths_gr12/web/resources/math_u5/mathes-unit5-eps27.mp4"
        },
        {
            "id": "g12msu5v8",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu5",
            "episode": "29",
            "title": " The motions of particles",
            "vurl": ".grade12/maths_gr12/web/resources/math_u5/mathes-unit5-eps29.mp4"
        },
        {
            "id": "g12msu6v1",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu6",
            "episode": "1",
            "title": " Coordinate axes and coordinate planes in space",
            "vurl": ".grade12/maths_gr12/web/resources/math_u6/mathes-unit6-eps1.mp4"
        },
        {
            "id": "g12msu6v2",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu6",
            "episode": "6",
            "title": " Distance and midpoints in space",
            "vurl": ".grade12/maths_gr12/web/resources/math_u6/mathes-unit6-eps6.mp4"
        },
        {
            "id": "g12msu6v3",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu6",
            "episode": "9",
            "title": " Equation of a sphere",
            "vurl": ".grade12/maths_gr12/web/resources/math_u6/mathes-unit6-eps9.mp4"
        },
        {
            "id": "g12msu6v4",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu6",
            "episode": "10",
            "title": " Vectors in space part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u6/mathes-unit6-eps10.mp4"
        },
        {
            "id": "g12msu6v5",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu6",
            "episode": "11",
            "title": " Vectors in space part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u6/mathes-unit6-eps11.mp4"
        },
        {
            "id": "g12msu6v6",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu6",
            "episode": "16",
            "title": " Vectors in space part 3",
            "vurl": ".grade12/maths_gr12/web/resources/math_u6/mathes-unit6-eps16.mp4"
        },
        {
            "id": "g12msu7v1",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu7",
            "episode": "2",
            "title": " Revision on logic part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u7/mathes-unit7-eps2.mp4"
        },
        {
            "id": "g12msu7v2",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu7",
            "episode": "3",
            "title": " Revision on logic part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u7/mathes-unit7-eps3.mp4"
        },
        {
            "id": "g12msu7v3",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu7",
            "episode": "5",
            "title": "Different types of proofs",
            "vurl": ".grade12/maths_gr12/web/resources/math_u7/mathes-unit7-eps5.mp4"
        },
        {
            "id": "g12msu7v4",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu7",
            "episode": "9",
            "title": " Principle and application of mathematical induction",
            "vurl": ".grade12/maths_gr12/web/resources/math_u7/mathes-unit7-eps9.mp4"
        },
        {
            "id": "g12msu7v5",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu7",
            "episode": "10",
            "title": " Principle and application of mathematical induction part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u7/mathes-unit7-eps10.mp4"
        },
        {
            "id": "g12msu8v1",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu8",
            "episode": "1",
            "title": "Sampling techniques",
            "vurl": ".grade12/maths_gr12/web/resources/math_u8/mathes-unit8-eps1.mp4"
        },
        {
            "id": "g12msu8v2",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu8",
            "episode": "4",
            "title": "Representation of data",
            "vurl": ".grade12/maths_gr12/web/resources/math_u8/mathes-unit8-eps4.mp4"
        },
        {
            "id": "g12msu8v3",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu8",
            "episode": "6",
            "title": " Construction of graphs and interpretation part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u8/mathes-unit8-eps6.mp4"
        },
        {
            "id": "g12msu8v4",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu8",
            "episode": "7",
            "title": " Construction of graphs and interpretation part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u8/mathes-unit8-eps7.mp4"
        },
        {
            "id": "g12msu8v5",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu8",
            "episode": "12",
            "title": " Measures of central tendency and measures of variability",
            "vurl": ".grade12/maths_gr12/web/resources/math_u8/mathes-unit8-eps12.mp4"
        },
        {
            "id": "g12msu8v6",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu8",
            "episode": "17",
            "title": "Analysis of frequency distribution",
            "vurl": ".grade12/maths_gr12/web/resources/math_u8/mathes-unit8-eps17.mp4"
        },
        {
            "id": "g12msu8v7",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu8",
            "episode": "19",
            "title": "Use of cumulative frequency curve",
            "vurl": ".grade12/maths_gr12/web/resources/math_u8/mathes-unit8-eps19.mp4"
        },
        {
            "id": "g12msu9v1",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu9",
            "episode": "1",
            "title": " Applications to purchasing",
            "vurl": ".grade12/maths_gr12/web/resources/math_u9/mathes-unit9-eps1.mp4"
        },
        {
            "id": "g12msu9v2",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu9",
            "episode": "4",
            "title": "Percent increase and percent decrease",
            "vurl": ".grade12/maths_gr12/web/resources/math_u9/mathes-unit9-eps4.mp4"
        },
        {
            "id": "g12msu9v3",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu9",
            "episode": "8",
            "title": " Real state expenses part 1",
            "vurl": ".grade12/maths_gr12/web/resources/math_u9/mathes-unit9-eps8.mp4"
        },
        {
            "id": "g12msu9v4",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu9",
            "episode": "10",
            "title": " Real state expenses part 2",
            "vurl": ".grade12/maths_gr12/web/resources/math_u9/mathes-unit9-eps10.mp4"
        },
        {
            "id": "g12msu9v5",
            "gid": "g12",
            "cid": "g12ms",
            "uid": "g12msu9",
            "episode": "12",
            "title": "wages",
            "vurl": ".grade12/maths_gr12/web/resources/math_u9/mathes-unit9-eps12.mp4"
        },
        {
            "id": "g12gu2v1",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu2",
            "episode": "1",
            "title": " The study of topographic maps",
            "vurl": ".grade12/geography_gr12/resources/geo_un2/geo-unit2-eps1.mp4"
        },
        {
            "id": "g12gu2v2",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu2",
            "episode": "2",
            "title": "Conventional signs and symbols on topographic maps",
            "vurl": ".grade12/geography_gr12/resources/geo_un2/geo-unit2-eps2.mp4"
        },
        {
            "id": "g12gu2v3",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu2",
            "episode": "3",
            "title": "The study of distribution maps part1",
            "vurl": ".grade12/geography_gr12/resources/geo_un2/geo-unit2-eps3-part1.mp4"
        },
        {
            "id": "g12gu2v4",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu2",
            "episode": "3",
            "title": "The study of distribution maps part2",
            "vurl": ".grade12/geography_gr12/resources/geo_un2/geo-unit2-eps3-part2.mp4"
        },
        {
            "id": "g12gu2v5",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu2",
            "episode": "5",
            "title": " Globe and map",
            "vurl": ".grade12/geography_gr12/resources/geo_un2/geo-unit2-eps5.mp4"
        },
        {
            "id": "g12gu2v6",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu2",
            "episode": "6",
            "title": "Map projection",
            "vurl": ".grade12/geography_gr12/resources/geo_un2/geo-unit2-eps6.mp4"
        },
        {
            "id": "g12gu2v7",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu2",
            "episode": "7",
            "title": "Geometrical map projection part1",
            "vurl": ".grade12/geography_gr12/resources/geo_un2/geo-unit2-eps7-part1.mp4"
        },
        {
            "id": "g12gu2v8",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu2",
            "episode": "7",
            "title": "Geometrical map projection part2",
            "vurl": ".grade12/geography_gr12/resources/geo_un2/geo-unit2-eps7-part2.mp4"
        },
        {
            "id": "g12gu2v9",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu2",
            "episode": "7",
            "title": "Geometrical map projection part3",
            "vurl": ".grade12/geography_gr12/resources/geo_un2/geo-unit2-eps7-part3.mp4"
        },
        {
            "id": "g12gu2v10",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu2",
            "episode": "10",
            "title": "Drawing sketch map",
            "vurl": ".grade12/geography_gr12/resources/geo_un2/geo-unit2-eps10.mp4"
        },
        {
            "id": "g12gu2v11",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu2",
            "episode": "11",
            "title": "producing sketch map",
            "vurl": ".grade12/geography_gr12/resources/geo_un2/geo-unit2-eps11.mp4"
        },
        {
            "id": "g12gu3v1",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "1",
            "title": "Location of the horn of Africa and the size of member countries",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps1.mp4"
        },
        {
            "id": "g12gu3v2",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "2",
            "title": "Location ,size and shape of Ethiopia",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps2.mp4"
        },
        {
            "id": "g12gu3v3",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "3",
            "title": " Geological structure and major events of the horn of Africa part1",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps3-part1.mp4"
        },
        {
            "id": "g12gu3v4",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "3",
            "title": " Geological structure and major events of the horn of Africa part2",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps3-part2.mp4"
        },
        {
            "id": "g12gu3v5",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "5",
            "title": " Landforms of Ethiopia and the horn part1",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps5-part1.mp4"
        },
        {
            "id": "g12gu3v6",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "5",
            "title": " Landforms of Ethiopia and the horn part2",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps5-part2.mp4"
        },
        {
            "id": "g12gu3v7",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "7",
            "title": "Drainage systems and water resources of Ethiopia part1",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps7-part1.mp4"
        },
        {
            "id": "g12gu3v8",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "7",
            "title": "Drainage systems and water resources of Ethiopia part2",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps7-part2.mp4"
        },
        {
            "id": "g12gu3v9",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "7",
            "title": "Drainage systems and water resources of Ethiopia part3",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps7-part3.mp4"
        },
        {
            "id": "g12gu3v10",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "10",
            "title": "Water resource conservation and management in Ethiopia",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps10.mp4"
        },
        {
            "id": "g12gu3v11",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "11",
            "title": " Factors influencing the spatial and temporal distribution of climatic elements in elements in Ethiopia and the horn",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps11.mp4"
        },
        {
            "id": "g12gu3v12",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "12",
            "title": "patial and temporal variation of temperature in Ethiopia",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps12.mp4"
        },
        {
            "id": "g12gu3v13",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "13",
            "title": "patial and temporal variation of temperature in horn",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps13.mp4"
        },
        {
            "id": "g12gu3v14",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "14",
            "title": "Rainfall regions in the horn",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps14.mp4"
        },
        {
            "id": "g12gu3v15",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "15",
            "title": "Types of natural vegetation of Ethiopia",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps15.mp4"
        },
        {
            "id": "g12gu3v16",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "16",
            "title": "Wild animals of Ethiopia",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps16.mp4"
        },
        {
            "id": "g12gu3v17",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "17",
            "title": "Human intervention in forest lands part1",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps17-unit1.mp4"
        },
        {
            "id": "g12gu3v18",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "17",
            "title": "Human intervention in forest lands part2",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps17-part2.mp4"
        },
        {
            "id": "g12gu3v19",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "19",
            "title": " Formation of soils in Ethiopia",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps19.mp4"
        },
        {
            "id": "g12gu3v20",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "20",
            "title": "Types of soil in Ethiopia",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps20.mp4"
        },
        {
            "id": "g12gu3v21",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu3",
            "episode": "21",
            "title": " Soil problems and conservation in Ethiopia",
            "vurl": ".grade12/geography_gr12/resources/geo_un3/geo-unit3-eps21.mp4"
        },
        {
            "id": "g12gu4v1",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu4",
            "episode": "1",
            "title": " Malthusian population theory",
            "vurl": ".grade12/geography_gr12/resources/geo_un4/geo-unit4-eps1.mp4"
        },
        {
            "id": "g12gu4v2",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu4",
            "episode": "2",
            "title": "anti- Malthusian population theory",
            "vurl": ".grade12/geography_gr12/resources/geo_un4/geo-unit4-eps2.mp4"
        },
        {
            "id": "g12gu4v3",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu4",
            "episode": "3",
            "title": " Trends of population growth and structure",
            "vurl": ".grade12/geography_gr12/resources/geo_un4/geo-unit4-eps3.mp4"
        },
        {
            "id": "g12gu4v4",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu4",
            "episode": "4",
            "title": " The spatial distribution of population in Ethiopia",
            "vurl": ".grade12/geography_gr12/resources/geo_un4/geo-unit4-eps4.mp4"
        },
        {
            "id": "g12gu4v5",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu4",
            "episode": "5",
            "title": " Factors affection population distribution",
            "vurl": ".grade12/geography_gr12/resources/geo_un4/geo-unit4-eps5.mp4"
        },
        {
            "id": "g12gu4v6",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu4",
            "episode": "6",
            "title": " Settlement pattern of Ethiopian population",
            "vurl": ".grade12/geography_gr12/resources/geo_un4/geo-unit4-eps6.mp4"
        },
        {
            "id": "g12gu4v7",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu4",
            "episode": "7",
            "title": " Determinants of population change in Ethiopia",
            "vurl": ".grade12/geography_gr12/resources/geo_un4/geo-unit4-eps7.mp4"
        },
        {
            "id": "g12gu4v8",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu4",
            "episode": "8",
            "title": " Impacts of rapid population growth in Ethiopia",
            "vurl": ".grade12/geography_gr12/resources/geo_un4/geo-unit4-eps8.mp4"
        },
        {
            "id": "g12gu4v9",
            "gid": "g12",
            "cid": "g12g",
            "uid": "g12gu4",
            "episode": "10",
            "title": "Urbanization in Ethiopia",
            "vurl": ".grade12/geography_gr12/resources/geo_un4/geo-unit4-eps10.mp4"
        },
        {
            "id": "g12ecu1v1",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu1",
            "episode": "2",
            "title": " The agricultural sector",
            "vurl": ".grade12/economics_gr12/resources/eco_un1/eco-unit1-eps2.mp4"
        },
        {
            "id": "g12ecu1v2",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu1",
            "episode": "3",
            "title": "The industrial sector",
            "vurl": ".grade12/economics_gr12/resources/eco_un1/eco-unit1-eps3.mp4"
        },
        {
            "id": "g12ecu1v3",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu1",
            "episode": "4",
            "title": "The service sector",
            "vurl": ".grade12/economics_gr12/resources/eco_un1/eco-unit1-eps4.mp4"
        },
        {
            "id": "g12ecu1v4",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu1",
            "episode": "6",
            "title": "population growth",
            "vurl": ".grade12/economics_gr12/resources/eco_un1/eco-unit1-eps6.mp4"
        },
        {
            "id": "g12ecu1v5",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu1",
            "episode": "7",
            "title": " Land, livestock and fishery",
            "vurl": ".grade12/economics_gr12/resources/eco_un1/eco-unit1-eps7.mp4"
        },
        {
            "id": "g12ecu1v6",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu1",
            "episode": "8",
            "title": "forestry",
            "vurl": ".grade12/economics_gr12/resources/eco_un1/eco-unit1-eps8.mp4"
        },
        {
            "id": "g12ecu1v7",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu1",
            "episode": "9",
            "title": " Energy and minerals",
            "vurl": ".grade12/economics_gr12/resources/eco_un1/eco-unit1-eps9.mp4"
        },
        {
            "id": "g12ecu1v8",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu1",
            "episode": "10",
            "title": "environment",
            "vurl": ".grade12/economics_gr12/resources/eco_un1/eco-unit1-eps10.mp4"
        },
        {
            "id": "g12ecu1v9",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu1",
            "episode": "13",
            "title": " National development objectives and strategies",
            "vurl": ".grade12/economics_gr12/resources/eco_un1/eco-unit1-eps13.mp4"
        },
        {
            "id": "g12ecu1v10",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu1",
            "episode": "14",
            "title": " National development plan in EPRDF",
            "vurl": ".grade12/economics_gr12/resources/eco_un1/eco-unit1-eps14.mp4"
        },
        {
            "id": "g12ecu2v1",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu2",
            "episode": "1",
            "title": " Agricultural vs industrial development",
            "vurl": ".grade12/economics_gr12/resources/eco_un2/eco-unit2-eps1.mp4"
        },
        {
            "id": "g12ecu2v2",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu2",
            "episode": "4",
            "title": " Uni-modal agricultural strategy",
            "vurl": ".grade12/economics_gr12/resources/eco_un2/eco-unit2-eps4.mp4"
        },
        {
            "id": "g12ecu2v3",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu2",
            "episode": "7",
            "title": "Bi-modal agricultural strategy",
            "vurl": ".grade12/economics_gr12/resources/eco_un2/eco-unit2-eps7.mp4"
        },
        {
            "id": "g12ecu2v4",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu2",
            "episode": "10",
            "title": " Contribution of agricultural sector to GDP",
            "vurl": ".grade12/economics_gr12/resources/eco_un2/eco-unit2-eps10.mp4"
        },
        {
            "id": "g12ecu2v5",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu2",
            "episode": "12",
            "title": "The structure of the agricultural sector",
            "vurl": ".grade12/economics_gr12/resources/eco_un2/eco-unit2-eps12.mp4"
        },
        {
            "id": "g12ecu2v6",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu2",
            "episode": "17",
            "title": "Post 1991 agricultural policies and strategies",
            "vurl": ".grade12/economics_gr12/resources/eco_un2/eco-unit2-eps17.mp4"
        },
        {
            "id": "g12ecu2v7",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu2",
            "episode": "21",
            "title": " The performance of the agricultural sector: the crop production sub-sector",
            "vurl": ".grade12/economics_gr12/resources/eco_un2/eco-unit2-eps21.mp4"
        },
        {
            "id": "g12ecu2v8",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu2",
            "episode": "22",
            "title": "The performance of the agricultural sector: the livestock and the fishery production subsector",
            "vurl": ".grade12/economics_gr12/resources/eco_un2/eco-unit2-eps22.mp4"
        },
        {
            "id": "g12ecu2v9",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu2",
            "episode": "23",
            "title": " Problems of the agricultural sector",
            "vurl": ".grade12/economics_gr12/resources/eco_un2/eco-unit2-eps23.mp4"
        },
        {
            "id": "g12ecu2v10",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu2",
            "episode": "24",
            "title": " Remedies for the problems facing the agricultural sector",
            "vurl": ".grade12/economics_gr12/resources/eco_un2/eco-unit2-eps24.mp4"
        },
        {
            "id": "g12ecu3v1",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu3",
            "episode": "3",
            "title": " Arguments of industrial sector versus the rest of the economic sector",
            "vurl": ".grade12/economics_gr12/resources/eco_un3/eco-unit3-eps3.mp4"
        },
        {
            "id": "g12ecu3v2",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu3",
            "episode": "5",
            "title": "The output contribution of industrial sector in the Ethiopian economy",
            "vurl": ".grade12/economics_gr12/resources/eco_un3/eco-unit3-eps5.mp4"
        },
        {
            "id": "g12ecu3v3",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu3",
            "episode": "6",
            "title": "Roles of the industrial sector in the Ethiopian economy: employment contributio",
            "vurl": ".grade12/economics_gr12/resources/eco_un3/eco-unit3-eps6.mp4"
        },
        {
            "id": "g12ecu3v4",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu3",
            "episode": "7",
            "title": "Roles of the industrial sector in the Ethiopian economy: foreign exchange contributio",
            "vurl": ".grade12/economics_gr12/resources/eco_un3/eco-unit3-eps7.mp4"
        },
        {
            "id": "g12ecu3v5",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu3",
            "episode": "13",
            "title": "Size, ownership and regional distribution the manufacturing sector during the post-derg period",
            "vurl": ".grade12/economics_gr12/resources/eco_un3/eco-unit3-eps13.mp4"
        },
        {
            "id": "g12ecu3v6",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu3",
            "episode": "14",
            "title": " The performance of the industrial sector",
            "vurl": ".grade12/economics_gr12/resources/eco_un3/eco-unit3-eps14.mp4"
        },
        {
            "id": "g12ecu3v7",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu3",
            "episode": "17",
            "title": "Problems of and possible remedies for the industrial sector",
            "vurl": ".grade12/economics_gr12/resources/eco_un3/eco-unit3-eps17.mp4"
        },
        {
            "id": "g12ecu4v1",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu4",
            "episode": "1",
            "title": " Introduction on the service sector in Ethiopia",
            "vurl": ".grade12/economics_gr12/resources/eco_un4/eco-unit4-eps1.mp4"
        },
        {
            "id": "g12ecu4v2",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu4",
            "episode": "6",
            "title": "Performance of the education sector",
            "vurl": ".grade12/economics_gr12/resources/eco_un4/eco-unit4-eps6.mp4"
        },
        {
            "id": "g12ecu4v3",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu4",
            "episode": "9",
            "title": "the impact of HIV/ADIS",
            "vurl": ".grade12/economics_gr12/resources/eco_un4/eco-unit4-eps9.mp4"
        },
        {
            "id": "g12ecu4v4",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu4",
            "episode": "11",
            "title": " Performance of transport sector",
            "vurl": ".grade12/economics_gr12/resources/eco_un4/eco-unit4-eps11.mp4"
        },
        {
            "id": "g12ecu4v5",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu4",
            "episode": "12",
            "title": " The Ethiopian shipping lines s.c",
            "vurl": ".grade12/economics_gr12/resources/eco_un4/eco-unit4-eps12.mp4"
        },
        {
            "id": "g12ecu4v6",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu4",
            "episode": "13",
            "title": "the communication sector",
            "vurl": ".grade12/economics_gr12/resources/eco_un4/eco-unit4-eps13.mp4"
        },
        {
            "id": "g12ecu4v7",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu4",
            "episode": "15",
            "title": "the performance of the communication  sector",
            "vurl": ".grade12/economics_gr12/resources/eco_un4/eco-unit4-eps15.mp4"
        },
        {
            "id": "g12ecu4v8",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu4",
            "episode": "16",
            "title": "the tourism sector",
            "vurl": ".grade12/economics_gr12/resources/eco_un4/eco-unit4-eps16.mp4"
        },
        {
            "id": "g12ecu4v9",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu4",
            "episode": "17",
            "title": "the performance of the tourism sector",
            "vurl": ".grade12/economics_gr12/resources/eco_un4/eco-unit4-eps17.mp4"
        },
        {
            "id": "g12ecu5v1",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu5",
            "episode": "3",
            "title": " Restrictions and modes of payment in foreign trade",
            "vurl": ".grade12/economics_gr12/resources/eco_un5/eco-unit5-eps3.mp4"
        },
        {
            "id": "g12ecu5v2",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu5",
            "episode": "5",
            "title": "Licensing policy",
            "vurl": ".grade12/economics_gr12/resources/eco_un5/eco-unit5-eps5.mp4"
        },
        {
            "id": "g12ecu5v3",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu5",
            "episode": "10",
            "title": "Public vs private exports",
            "vurl": ".grade12/economics_gr12/resources/eco_un5/eco-unit5-eps10.mp4"
        },
        {
            "id": "g12ecu5v4",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu5",
            "episode": "11",
            "title": "imports",
            "vurl": ".grade12/economics_gr12/resources/eco_un5/eco-unit5-eps11.mp4"
        },
        {
            "id": "g12ecu5v5",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu5",
            "episode": "13",
            "title": "the capital account balance",
            "vurl": ".grade12/economics_gr12/resources/eco_un5/eco-unit5-eps13.mp4"
        },
        {
            "id": "g12ecu5v6",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu5",
            "episode": "15",
            "title": "Trade, globalization & economic integration",
            "vurl": ".grade12/economics_gr12/resources/eco_un5/eco-unit5-eps15.mp4"
        },
        {
            "id": "g12ecu6v1",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu6",
            "episode": "1",
            "title": " Economic role of the government",
            "vurl": ".grade12/economics_gr12/resources/eco_un6/eco-unit6-eps1.mp4"
        },
        {
            "id": "g12ecu6v2",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu6",
            "episode": "3",
            "title": "Historical background of public finance in Ethiopia",
            "vurl": ".grade12/economics_gr12/resources/eco_un6/eco-unit6-eps3.mp4"
        },
        {
            "id": "g12ecu6v3",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu6",
            "episode": "5",
            "title": "the structure and performance of revenue and expenditure",
            "vurl": ".grade12/economics_gr12/resources/eco_un6/eco-unit6-eps5.mp4"
        },
        {
            "id": "g12ecu6v4",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu6",
            "episode": "8",
            "title": " Government expenditure budget",
            "vurl": ".grade12/economics_gr12/resources/eco_un6/eco-unit6-eps8.mp4"
        },
        {
            "id": "g12ecu6v5",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu6",
            "episode": "11",
            "title": " Government expenditure budget",
            "vurl": ".grade12/economics_gr12/resources/eco_un6/eco-unit6-eps11.mp4"
        },
        {
            "id": "g12ecu7v1",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu7",
            "episode": "1",
            "title": " Historical background of money & the financial sector in Ethiopia",
            "vurl": ".grade12/economics_gr12/resources/eco_un7/eco-unit7-eps1.mp4"
        },
        {
            "id": "g12ecu7v2",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu7",
            "episode": "2",
            "title": "Financial sector in Ethiopia",
            "vurl": ".grade12/economics_gr12/resources/eco_un7/eco-unit7-eps2.mp4"
        },
        {
            "id": "g12ecu7v3",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu7",
            "episode": "3",
            "title": " The roles and functions of the national bank of Ethiopia and commercial banks of Ethiopia",
            "vurl": ".grade12/economics_gr12/resources/eco_un7/eco-unit7-eps3.mp4"
        },
        {
            "id": "g12ecu7v4",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu7",
            "episode": "11",
            "title": " Performance of the financial sector in Ethiopia",
            "vurl": ".grade12/economics_gr12/resources/eco_un7/eco-unit7-eps11.mp4"
        },
        {
            "id": "g12ecu7v5",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu7",
            "episode": "14",
            "title": " Problems of and possible remedies for the financial sector in Ethiopia",
            "vurl": ".grade12/economics_gr12/resources/eco_un7/eco-unit7-eps14.mp4"
        },
        {
            "id": "g12ecu8v1",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu8",
            "episode": "3",
            "title": "Introduction to the structural adjustment program",
            "vurl": ".grade12/economics_gr12/resources/eco_un8/eco-unit8-eps3.mp4"
        },
        {
            "id": "g12ecu8v2",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu8",
            "episode": "5",
            "title": "Structural adjustment policy measures undertaken in Ethiopia",
            "vurl": ".grade12/economics_gr12/resources/eco_un8/eco-unit8-eps5.mp4"
        },
        {
            "id": "g12ecu8v3",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu8",
            "episode": "7",
            "title": "Performance of the economy after the new economic reform program",
            "vurl": ".grade12/economics_gr12/resources/eco_un8/eco-unit8-eps7.mp4"
        },
        {
            "id": "g12ecu8v4",
            "gid": "g12",
            "cid": "g12ec",
            "uid": "g12ecu8",
            "episode": "12",
            "title": "Investment policy and climate in ethiopia",
            "vurl": ".grade12/economics_gr12/resources/eco_un8/eco-unit8-eps12.mp4"
        },
        {
            "id": "g12gbu1v1",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu1",
            "episode": "2",
            "title": "markets",
            "vurl": ".grade12/GB_gr12/resources/GB_un1/GB-unit1-eps2.mp4"
        },
        {
            "id": "g12gbu1v2",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu1",
            "episode": "3",
            "title": "The major function of marketing",
            "vurl": ".grade12/GB_gr12/resources/GB_un1/GB-unit1-eps3.mp4"
        },
        {
            "id": "g12gbu1v3",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu1",
            "episode": "7",
            "title": "product life cycle",
            "vurl": ".grade12/GB_gr12/resources/GB_un1/GB-unit1-eps7.mp4"
        },
        {
            "id": "g12gbu1v4",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu1",
            "episode": "14",
            "title": "types of stores",
            "vurl": ".grade12/GB_gr12/resources/GB_un1/GB-unit1-eps14.mp4"
        },
        {
            "id": "g12gbu1v5",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu1",
            "episode": "18",
            "title": " The marketing mix promotion",
            "vurl": ".grade12/GB_gr12/resources/GB_un1/GB-unit1-eps18.mp4"
        },
        {
            "id": "g12gbu1v6",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu2",
            "episode": "1",
            "title": " Communication and business communication",
            "vurl": ".grade12/GB_gr12/resources/GB_un2/GB-unit2-eps1.mp4"
        },
        {
            "id": "g12gbu2v1",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu2",
            "episode": "3",
            "title": "Methods of communication part1",
            "vurl": ".grade12/GB_gr12/resources/GB_un2/GB-unit2-eps3.mp4"
        },
        {
            "id": "g12gbu2v2",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu2",
            "episode": "4",
            "title": "Methods of communication part2",
            "vurl": ".grade12/GB_gr12/resources/GB_un2/GB-unit2-eps4.mp4"
        },
        {
            "id": "g12gbu2v3",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu2",
            "episode": "5",
            "title": "effective formats of business message business letters",
            "vurl": ".grade12/GB_gr12/resources/GB_un2/GB-unit2-eps5.mp4"
        },
        {
            "id": "g12gbu2v4",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu2",
            "episode": "6",
            "title": " Business letter formats",
            "vurl": ".grade12/GB_gr12/resources/GB_un2/GB-unit2-eps6.mp4"
        },
        {
            "id": "g12gbu2v5",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu2",
            "episode": "11",
            "title": " Preparing curriculum vitae",
            "vurl": ".grade12/GB_gr12/resources/GB_un2/GB-unit2-eps11.mp4"
        },
        {
            "id": "g12gbu3v1",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu3",
            "episode": "2",
            "title": " Inland transactions",
            "vurl": ".grade12/GB_gr12/resources/GB_un3/GB-unit3-eps2.mp4"
        },
        {
            "id": "g12gbu3v2",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu3",
            "episode": "4",
            "title": "Foreign trade absolute and comparative advantage",
            "vurl": ".grade12/GB_gr12/resources/GB_un3/GB-unit3-eps3.mp4"
        },
        {
            "id": "g12gbu3v3",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu3",
            "episode": "6",
            "title": "Documents and special terminologies in foreign trade",
            "vurl": ".grade12/GB_gr12/resources/GB_un3/GB-unit3-eps6.mp4"
        },
        {
            "id": "g12gbu3v4",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu3",
            "episode": "7",
            "title": "Documents and special terminologies in foreign trade part 2",
            "vurl": ".grade12/GB_gr12/resources/GB_un3/GB-unit3-eps7.mp4"
        },
        {
            "id": "g12gbu3v5",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu3",
            "episode": "8",
            "title": "Foreign enquires and quotations",
            "vurl": ".grade12/GB_gr12/resources/GB_un3/GB-unit3-eps8.mp4"
        },
        {
            "id": "g12gbu3v6",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu3",
            "episode": "9",
            "title": "Foreign enquires and quotations",
            "vurl": ".grade12/GB_gr12/resources/GB_un3/GB-unit3-eps9.mp4"
        },
        {
            "id": "g12gbu3v7",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu3",
            "episode": "10",
            "title": "Foreign terms of payment letter of credit",
            "vurl": ".grade12/GB_gr12/resources/GB_un3/GB-unit3-eps10.mp4"
        },
        {
            "id": "g12gbu3v8",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu3",
            "episode": "11",
            "title": "Foreign terms of payments payment on collection",
            "vurl": ".grade12/GB_gr12/resources/GB_un3/GB-unit3-eps11.mp4"
        },
        {
            "id": "g12gbu3v9",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu3",
            "episode": "12",
            "title": "Foreign terms of payments consignment sales",
            "vurl": ".grade12/GB_gr12/resources/GB_un3/GB-unit3-eps12.mp4"
        },
        {
            "id": "g12gbu3v10",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu3",
            "episode": "14",
            "title": " Methods of entering international trade",
            "vurl": ".grade12/GB_gr12/resources/GB_un3/GB-unit3-eps14.mp4"
        },
        {
            "id": "g12gbu4v1",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu4",
            "episode": "4",
            "title": "accounting equation",
            "vurl": ".grade12/GB_gr12/resources/GB_un4/GB-unit4-eps4.mp4"
        },
        {
            "id": "g12gbu4v2",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu4",
            "episode": "6",
            "title": "Recording the opening entry (part1)",
            "vurl": ".grade12/GB_gr12/resources/GB_un4/GB-unit4-eps6.mp4"
        },
        {
            "id": "g12gbu4v3",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu4",
            "episode": "8",
            "title": " Standard forms of an account",
            "vurl": ".grade12/GB_gr12/resources/GB_un4/GB-unit4-eps8.mp4"
        },
        {
            "id": "g12gbu4v4",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu4",
            "episode": "10",
            "title": " Posting the opening entry to the ledged",
            "vurl": ".grade12/GB_gr12/resources/GB_un4/GB-unit4-eps10.mp4"
        },
        {
            "id": "g12gbu4v5",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu4",
            "episode": "11",
            "title": "Business transaction and their recording",
            "vurl": ".grade12/GB_gr12/resources/GB_un4/GB-unit4-eps11.mp4"
        },
        {
            "id": "g12gbu4v6",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu4",
            "episode": "13",
            "title": "accounting ",
            "vurl": ".grade12/GB_gr12/resources/GB_un4/GB-unit4-eps13.mp4"
        },
        {
            "id": "g12gbu4v7",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu4",
            "episode": "16",
            "title": "The financial statements: income statement",
            "vurl": ".grade12/GB_gr12/resources/GB_un4/GB-unit4-eps16.mp4"
        },
        {
            "id": "g12gbu4v8",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu4",
            "episode": "19",
            "title": "The financial statements:capital statement",
            "vurl": ".grade12/GB_gr12/resources/GB_un4/GB-unit4-eps19.mp4"
        },
        {
            "id": "g12gbu4v9",
            "gid": "g12",
            "cid": "g12gb",
            "uid": "g12gbu4",
            "episode": "22",
            "title": "The financial statements: the balance sheet",
            "vurl": ".grade12/GB_gr12/resources/GB_un4/GB-unit4-eps22.mp4"
        }
    ]
}
// filterItems(searchTerm){
//   return this.items.filter((item) => {
//     const searchFields:string[] = ['title'];
//     if (searchFields.some((field) => {
//       return item[field].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
//     })) {
//       return 'Not found';
//     }
//
//   });
// }
filterItems(searchTerm) {
  return this.items.filter(item => {
    return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });
}
}
