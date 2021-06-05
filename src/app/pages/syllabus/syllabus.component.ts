import { Component, OnInit } from '@angular/core';
// import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css'],
})
export class SyllabusComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // DownloadPdf() {
  //   const pdfTable = document.querySelector('#capture') as HTMLElement;

  //   html2canvas(pdfTable, {
  //     backgroundColor: 'yellow',
  //     height:2000,
  //     width:1800,
  //     scale:3
  //   }).then((canvas) => {
  //     //document.body.appendChild(canvas);
  //     var img = canvas.toDataURL('image/jpeg');
  //     let pdf = new jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
  //     // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
  //     pdf.addImage(img, 'PNG', 0, 0, 32.7, 23.0);  
  //     pdf.save('syllabus.pdf');
  //   });
  // }
}
