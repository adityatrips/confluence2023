import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent implements OnInit {
  constructor() {}

  images: any[] = [
    [
      {
        img: 'assets/speakers/1.png',
        name: 'Prof. (Dr.) Peter Robinson',
        uni: 'Cambridge University, UK',
      },
      {
        img: 'assets/speakers/2.png',
        name: 'Prof. (Dr.) Bebo White',
        uni: 'Stanford University, USA',
      },
      {
        img: 'assets/speakers/3.png',
        name: 'Prof. (Dr.) David Gries',
        uni: 'Cornell University, USA',
      },
      {
        img: 'assets/speakers/4.png',
        name: 'Prof. (Dr.) Bernhard Pfahringer',
        uni: 'Waikato University, New Zealand',
      },
      {
        img: 'assets/speakers/5.png',
        name: 'Prof. (Dr.) Tay Yong Chiang',
        uni: 'National University of Singapore, Singapore',
      },
      {
        img: 'assets/speakers/6.png',
        name: 'Prof. (Dr.) Keshav Dahal',
        uni: 'University of the West of Scotland',
      },
    ],
    [
      {
        img: 'assets/speakers/7.png',
        name: 'Prof. (Dr.) Mohamed Ibrahim Abdul Mutalib',
        uni: 'Universiti Teknologi Petronas (UTP), Malaysi',
      },
      {
        img: 'assets/speakers/8.png',
        name: 'Prof. (Dr.) Ing. Mario Jose Divan',
        uni: 'National University of La Plata, Argentina',
      },
      {
        img: 'assets/speakers/9.png',
        name: 'Prof. (Dr.) John Domingue',
        uni: 'Open University, UK',
      },
      {
        img: 'assets/speakers/10.png',
        name: 'Prof. (Dr.) Jean Paul Va Belle',
        uni: 'University of Cape Town, South Africa',
      },
      {
        img: 'assets/speakers/11.png',
        name: 'Prof. (Dr.) Virendra Bhavsar',
        uni: 'University of New Brunswick, Canada',
      },
      {
        img: 'assets/speakers/12.png',
        name: 'Prof. (Dr.) Alvaro Rocha',
        uni: 'AISTI, University of Lisbon, Portugal',
      },
    ],
    [
      {
        img: 'assets/speakers/13.png',
        name: 'Prof. (Dr.) Sartaj Sahni',
        uni: 'University of Florida, USA',
      },
      {
        img: 'assets/speakers/14.png',
        name: 'Prof. (Dr.) Ankit Agrawal',
        uni: 'North Western University, USA',
      },
      {
        img: 'assets/speakers/15.png',
        name: 'Prof. (Dr.) Sergio Marquez Sanchez',
        uni: 'University of Salmanca, Spain',
      },
      {
        img: 'assets/speakers/16.png',
        name: 'Prof. (Dr.) Ahmed Elngar',
        uni: 'Beni-Suef University, Egypt',
      },
      {
        img: 'assets/speakers/17.png',
        name: 'Prof. (Dr.) Simon Simoff',
        uni: 'University of Western Sydney, Australia',
      },

      {
        img: 'assets/speakers/18.png',
        name: 'Prof. (Dr.) Bhuvan Unhelkar',
        uni: 'University of South Florida',
      },
    ],
    [
      {
        img: 'assets/speakers/19.png',
        name: 'Prof. (Dr.) Houbing Song',
        uni: 'Embry-Riddle Aeronautical University, United States',
      },
      {
        img: 'assets/speakers/20.png',
        name: 'Prof. (Dr.) Gabriella Casalino',
        uni: 'University of Bari , Italy',
      },
      {
        img: 'assets/speakers/21.png',
        name: 'Prof. (Dr.) Katina Michael',
        uni: 'Arizona State University,Tempe, AZ, USA',
      },
      {
        img: 'assets/speakers/22.png',
        name: 'Prof. (Dr.) Vassil Vassilev',
        uni: 'London Metropolitan University, London',
      },
      {
        img: 'assets/speakers/23.png',
        name: 'Prof. (Dr.) Biplob Roy',
        uni: 'CQ University, Australia',
      },
      {
        img: 'assets/speakers/24.png',
        name: 'Mr. Nitish Vij',
        uni: 'Director, Data Analytics & Artificial Intelligence, Wipro, Australia',
      },
    ],
    [
      {
        img: 'assets/speakers/25.png',
        name: 'Prof. (Dr.) Arun Somani',
        uni: 'Stanford University, USA',
      },
      {
        img: 'assets/speakers/26.png',
        name: 'Mr. Kapil Mehrotra',
        uni: 'CTO, National Collateral Mgmt Services Ltd.,India',
      },
      {
        img: 'assets/speakers/27.png',
        name: 'Prof. (Dr.) Panagiotis Liatsis',
        uni: 'Khalifa University , Abu Dhabi',
      },
      {
        img: 'assets/speakers/28.png',
        name: 'Mr. Raju Macharla',
        uni: 'Country Head Bruvara Solutions, India',
      },

      {
        img: 'assets/speakers/29.png',
        name: 'Prof. (Dr.) Vishal Goyal',
        uni: 'Punjabi University, India',
      },
      {
        img: 'assets/speakers/30.png',
        name: 'Prof. (Dr.) Syed Akhter Hossain',
        uni: 'University of Liberal Arts Bangladesh',
      },
    ],
    [
      {
        img: 'assets/speakers/31.png',
        name: 'Ms. Kumud Bajaj',
        uni: 'Senior ASIC/FPGA Verification Engineer Boeing, Gurgaon, Haryana, India',
      },
      {
        img: 'assets/speakers/32.png',
        name: 'Prof. (Dr.) Vijanth Sagayan Asirvadam',
        uni: 'Universiti Teknologi Petronas, Malaysia',
      },
      {
        img: 'assets/speakers/33.png',
        name: 'Prof. (Dr.) Muhammad Rukunuddin Ghalib',
        uni: 'School of Engineering & Computing, De Monfort University, Dubai',
      },
      {
        img: 'assets/speakers/34.png',
        name: 'Prof. (Dr.) Anand Nayyar',
        uni: 'Researcher & Scientist, Duy Tan University, Veitnam',
      },

      {
        img: 'assets/speakers/35.png',
        name: 'Assoc. Prof. (Dr.) Celestine Iwendi',
        uni: 'University of Bolton, United Kingdom',
      },
      {
        img: 'assets/speakers/36.png',
        name: 'Prof. (Dr.) Ahmed A Abd El-latif',
        uni: 'Menoufia University, Egypt',
      },
    ],
    [
      {
        img: 'assets/speakers/37.png',
        name: 'Prof. (Dr.) Subarna Shakya',
        uni: 'Tribhuvan University, Nepal',
      },
      {
        img: 'assets/speakers/38.png',
        name: 'Prof. (Dr.) Madhusudan Singh',
        uni: 'Woosong University (WSU), Daejeon, South Korea',
      },
      {
        img: 'assets/speakers/39.png',
        name: 'Prof. (Dr.) Basanta Joshi',
        uni: 'Tribhuvan University, Nepal',
      },

      {
        img: 'assets/speakers/40.png',
        name: 'Prof. (Dr.) Jianhua Zhang',
        uni: 'Oslo Metropolitan University - OsloMet, Norway',
      },
      {
        img: 'assets/speakers/41.png',
        name: 'Prof. (Dr.) Lizy Kurian John',
        uni: 'University of Texas at Austin, USA',
      },
      {
        img: 'assets/speakers/42.png',
        name: 'Prof. (Dr.) Abdul Wahid',
        uni: 'Dept. of INFRES Telecom Paris, Institut Polytechnique de Paris',
      },
    ],
    [
      {
        img: 'assets/speakers/43.png',
        name: 'Prof. (Dr.) Mike Hinchey',
        uni: 'University of Limerick, Ireland',
      },
      {
        img: 'assets/speakers/44.png',
        name: 'Prof. (Dr.) Jan Van Den Berg',
        uni: 'TU Delft, Netherlands',
      },
      {
        img: 'assets/speakers/45.png',
        name: 'Prof. (Dr.) Christopher Stewart',
        uni: 'Ohio State University, USA',
      },

      {
        img: 'assets/speakers/46.png',
        name: 'Prof. (Dr.) Violetta E.Piperigou',
        uni: 'University of Patras, Greece',
      },
      {
        img: 'assets/speakers/47.png',
        name: 'Prof. (Dr.) Vincenzo Piuri',
        uni: 'University of Milan, Italy',
      },
      {
        img: 'assets/speakers/48.png',
        name: 'Prof. (Dr.) Omar Cheikhrouhou',
        uni: 'Higher Institute of Computer Science of Mahdia, Tunisia',
      },
    ],
    [
      {
        img: 'assets/speakers/49.png',
        name: 'Prof. (Dr.) Josiah Dykstra',
        uni: 'Technical Fellow, Cybersecurity Collaboration Center, National Security Agency, USA',
      },
      {
        img: 'assets/speakers/50.png',
        name: 'Prof. (Dr.) Hari Mohan Pandey',
        uni: 'Edge Hill University, United Kingdom',
      },
      {
        img: 'assets/speakers/51.png',
        name: 'Prof. (Dr.) Mohd Helmy Abd Wahab',
        uni: 'University Tun Hussein Onn, Malaysia',
      },

      {
        img: 'assets/speakers/52.png',
        name: 'Prof. (Dr.) Shiaofen Fang Chair',
        uni: 'Director, Dept. of Computer and Information Science, Indiana University Purdue University, USA',
      },
      {
        img: 'assets/speakers/53.png',
        name: 'Prof. (Dr.) Silvia Liberata Ullo',
        uni: 'University of Sannio, Italy',
      },
      {
        img: 'assets/speakers/54.png',
        name: 'Prof. (Dr.) Amir H. Gandomi',
        uni: 'University of Technology Sydney Ultimo, Australia',
      },
    ],
  ];

  ngOnInit(): void {}
}
