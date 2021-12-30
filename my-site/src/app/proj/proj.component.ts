import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjDialogComponent } from '../proj-dialog/proj-dialog.component';

@Component({
  selector: 'app-proj',
  templateUrl: './proj.component.html',
  styleUrls: ['./proj.component.css']
})
export class ProjComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(proj: string) {
    if (proj == "Seam") {
      this.dialog.open(ProjDialogComponent, {
        data: {
          title: "Seam Carver",
          image: "assets/SeamMerged.jpg",
          intro: "Seam-carving is a technique used for image resizing where the pixels removed are chosen in order to preserve the most interesting features of the image. This technique is a core feature of many photo-editing softwares and computer graphics applications.",
          description: "This project accomplishes a simplified version of seam carving in several steps. First, we calculate the 'energy' of each pixel of the image using the dual-gradient energy function, which measures the importance of each pixel. Then, it finds a horizontal or vertical seam of lowest total energy using Djikstra's shortest path algorithm. Lastly, the program removes these pixels from the image.",
          languages: "Java",
          gitLink: "https://github.com/amkumar645/Seam-Carver",
          pc: "https://www.cs.princeton.edu/"
        },
      });
    }

    if (proj == "Slider") {
      this.dialog.open(ProjDialogComponent, {
        data: {
          title: "Slider Puzzle Solver",
          image: "assets/SliderMerged.jpg",
          intro: "A slider puzzle is a puzzle played on a n-by-n grid with square tiles from 1 to n*n-1 and a blank tile in a random order. The goal is to slide the tiles to be in order, but on any turn, you can only move tiles adjacent to the blank square into the blank square.",
          description: "This program is able to solve any solvable slider puzzle, as well as determine if a board is solvable or not. It accomplishes this using the A* search algorithm, making use of a minimum priority queue where the object of lowest priority is removed and replaced with its neighbors in each iteration. The priority of a tile is calculated using the Manhattan distance function.",
          languages: "Java",
          gitLink: "https://github.com/amkumar645/8-Puzzle-Solver",
          pc: "https://www.cs.princeton.edu/"
        },
      });
    }

    if (proj == "NBA") {
      this.dialog.open(ProjDialogComponent, {
        data: {
          title: "NBA Comparer",
          image: "assets/NBA2.png",
          intro: "As a big fan of basketball, I love comparing NBA players statistics in order to judge who's having a good season and who isn't. One day, when I was first learning Angular, I decided a great way to practice was to create a website dedicated to comparing NBA players' statistics against each other, so I did. As my first ever website, it has some issues, but the functionality is there.",
          description: "This website, while quite simple, has a lot of underlying processes. All the data came from merging preexisting datasets and adding in values by hand, and all the images were scraped from basketball-reference.com. The data covers years 1950-2020 completely, allowing the user to compare any two individual seasons in this range. In addition, there is a section where the user can view the data season-by-season, and sort it according to different statistics. Lastly, due to the changing nature of the NBA, there is a way to compare adjusted statistics, which standardizes based on season.",
          languages: "Angular, Python",
          gitLink: "https://github.com/amkumar645/NBA-Comparer",
        },
      });
    }

    if (proj == "PW") {
      this.dialog.open(ProjDialogComponent, {
        data: {
          title: "Personal Website",
          image: "assets/NBA2.png",
          intro: "",
          description: "",
          languages: "Angular",
          gitLink: "https://github.com/amkumar645/Personal-Site",
        },
      });
    }
    
  }

}