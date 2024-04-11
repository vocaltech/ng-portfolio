import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 0, 
      name: "Android Geolocation App", 
      pictures: ["../../assets/android_geolocation/screenshot-1.png", "../../assets/android_geolocation/screenshot-2.png", "../../assets/android_geolocation/location-dev.png"], 
      projectLink: "//www.github.com", 
      livedemoLink: "",
      summary: "Mobile app to visualize real-time location on a map, send and retrieve datas from a remote server.", 
      description: 
        `
          <h5>Key features</h5>\
          <ul type='square'>\
            <li><b>Real-Time Location Visualization:&nbsp;</b>the application offers users the ability to visualize their real-time position on a map interface (leafletjs), providing an intuitive and interactive experience.</li>\
            <li><b>AMQP Protocol Integration:&nbsp;</b>the application seamlessly sends location data to a RabbitMQ backend server at a fixed interval of time.</li>\
            <li><b>RESTful API Interaction:&nbsp;</b>the project consumes a RESTful API for retrieving and deleting location data from the backend server.</li>\
            <li><b>Android Studio Development:&nbsp;</b>Powered by Android Studio, the official Integrated Development Environment (IDE) for Android application development.</li>\
          </ul>
        `, 
      tags: [Tag.JAVA, Tag.ANDROID, Tag.KOTLIN]
    },
    {
      id: 1, 
      name: "Spring Boot Geolocation API", 
      pictures: ["../../assets/spring-geolocation/swagger-ui.png","../../assets/spring-geolocation/mongodb-compass.png","../../assets/spring-geolocation/rabbitmq-admin-1.png", "../../assets/spring-geolocation/rabbitmq-admin-2.png", "../../assets/spring-geolocation/rabbitmq-admin-3.png"], 
      projectLink: "//www.github.com", 
      livedemoLink: "",
      summary: "Backend for Android Geolocation App. Restful API for retrieving and deleting user positions.", 
      description: 
        `
          <h5>Key features</h5>\
          <ul type='square'>\
          <li><b>AMQP server for Data Acquisition:&nbsp;</b>the project utilizes a RabbitMQ server to gather data from various AMQP clients.&nbsp;This ensures efficient and reliable transmission of data, crucial for real-time tracking applications</li>\
          <li><b>MongoDB data storage:</b>&nbsp;Data persistence is ensured through MongoDB, a powerful NoSQL database. By leveraging MongoDB, the project efficiently stores user positions, providing flexibility and scalability for handling large datasets.</li>\
          <li><b>RESTful API Development:</b>&nbsp;A RESTful API is implemented to facilitate seamless interaction with the system. This API allows users to retrieve and delete their positions.</li>\
          <li><b>Spring Boot Framework:</b>&nbsp;the project is developed using Spring Boot, a Java-based framework renowned for its simplicity and productivity. Spring Boot simplifies the development process, enabling rapid prototyping and seamless integration with various technologies.</li>\
          </ul>
        `, 
      tags: [Tag.JAVA]
    },
    {
      id: 2, 
      name: "Fullstack Media Player", 
      pictures: ["../../assets/ng-mediaplayer/live-playlist.png", "../../assets/ng-mediaplayer/data-explorer.png", "../../assets/spring-webscraper-streaming/swagger-ui.png","../../assets/spring-webscraper-streaming/mongo-db.png"], 
      projectLink: "//github.com/vocaltech/android-streaming", 
      livedemoLink: "https://mediaplayer.vocaltech.fr",
      summary: "Web app to playback an Internet radio streaming file. Realtime information display for the current media playing.", 
      description:
        `
          <h5>Key features</h5>\
          <ul type='square'>\
            <li><b>Internet Radio Streaming Playback:</b>&nbsp;Our web application provides a seamless platform for users to playback their favorite internet radio streaming files.</li>\
            <li><b>Media Player Functionality:</b>&nbsp;Enjoy basic media player functionality such as play, pause, and volume control, ensuring a tailored listening experience.</li>\
            <li><b>Real-time Information Display:</b>&nbsp;Stay informed with real-time updates on the current media being played, including details on the artist, title, and album.</li>\
            <li><b>Last Hour Playlist:</b>&nbsp;Access the playlist from the last hour, allowing users to rediscover recently played tracks or catch up on missed favorites.</li>\
            <li><b>Saved Music Data Explorer:</b>&nbsp;Dive into an extensive exploration of saved music data, empowering users to discover new artists, albums, and tracks effortlessly.</li>\
            <li><b>Fullstack project:</b>&nbsp;Spring Boot (backend) / Angular (front-end)</li>\
          </ul>
        `
      , 
      tags: [Tag.ANGULAR, Tag.JAVA, Tag.TYPESCRIPT]
    },
    {
      id: 3, 
      name: "Fullstack Web Scraper", 
      pictures: ["../../assets/ng-crawlers/screenshot-1a.png","../../assets/ng-crawlers/screenshot-1b.png","../../assets/ng-crawlers/screenshot-2.png","../../assets/ng-crawlers/screenshot-3a.png","../../assets/ng-crawlers/screenshot-3b.png"], 
      projectLink: "//www.github.com", 
      livedemoLink: "https://ngcrawler.vocaltech.fr/myshopify",
      summary: "Powerful web scraper designed to simplify data extraction from the web. Results are available in CSV format for export.", 
      description: 
        `
          <h5>Key features</h5>\
          <ul type='square'>\
          <li><b>Fullstack Web Scraper:</b>&nbsp;This project offers comprehensive web scraping capabilities, allowing users to extract data from various websites with ease.</li>\
          <li><b>Selective Page Scraping:</b>&nbsp;Users have the flexibility to choose specific pages from an online store for scraping, ensuring targeted data extraction tailored to their needs.</li>\
          <li><b>Real-time Scraping Visualization:</b>&nbsp;Experience the scraping process in real-time with dynamic visualization, providing users with insights into the progress and status of their data extraction tasks.</li>\
          <li><b>Interactive Results Display:</b>&nbsp;The extracted datas are presented in a user-friendly table format, enabling easy interpretation of the scraped information.</li>\
          <li><b>CSV Export Functionality:</b>&nbsp;Seamlessly export scraping results into CSV files for further processing, sharing, or integration with other tools and platforms.</li>\
          <li><b>Angular and Node.js Integration:</b>&nbsp;Our project is built using Angular for the frontend and Node.js for the backend, leveraging the power of these technologies to deliver a robust and efficient web scraping solution.</li>\
          </ul>
        `
     , 
      tags: [Tag.ANGULAR, Tag.NODEJS, Tag.JAVASCRIPT]
    },
    {
      id: 4, 
      name: "Android Streaming App", 
      pictures: ["../../assets/android-streaming/screenshot-all-reduce.jpg", "../../assets/android-streaming/streaming-dev.png"], 
      projectLink: "//www.github.com", 
      livedemoLink: "",
      summary: "Mobile app to playback a streaming audio file from the internet. Realtime information display for the current media playing.", 
      description: 
        `
          <h5>Key features</h5>\
          <ul type='square'>\
          <li><b>Audio Integration:</b>&nbsp;Seamlessly integrates audio playback functionality into an Android application.</li>\
          <li><b>Basic Playback Functions:</b>&nbsp;Allows users to play, pause, and display track information effortlessly.</li>\
          <li><b>Last Hour Playlist:</b>&nbsp;Displays the playlist of audio tracks played within the last hour for easy reference.</li>\
          <li><b>Web Service Integration:</b>&nbsp;Retrieves metadatas from a web service for the current playing track, including artist, title, and album details.</li>\
          <li><b>Media Notification:</b>&nbsp; Provides a media notification with playback controls and updated information for the current playing track.</li>\
          <li><b>Background Playback:</b>&nbsp;Enables users to continue listening to audio content while using other applications or when the device is locked.</li>\
          </ul>
        `
      , 
      tags: [Tag.ANDROID, Tag.KOTLIN]
    },
    {
      id: 5, 
      name: "Angular Dashboard", 
      pictures: ["../../assets/ng-dashboard/screenshot-1.png","../../assets/ng-dashboard/screenshot-2.png","../../assets/ng-dashboard/screenshot-3.png"], 
      projectLink: "//www.github.com", 
      livedemoLink: "https://ngdashboard.vocaltech.fr/",
      summary: "Responsive Dashboard for an e-commerce website built with Angular and Material UI component library.", 
      description: 
        `
          <h5>Key features</h5>\
          <ul type='square'>\
          <li><b>E-commerce Dashboard Frontend:&nbsp;</b>The dashboard offers a user-friendly interface designed to manage online store efficiently.&nbsp;It provides functionalities for order processing, customer management, and more, all accessible from a centralized location.</li>\
          <li><b>Dashboard Analytics:&nbsp;</b>The analytics module delivers comprehensive insights into key metrics and performance indicators crucial for decision-making. The store owner is able to track information such as where customers come from to their online store, how their products sell, how traffic sources relate to sales, among other things.</li>\
          </ul>
        `, 
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    }
  ];



  constructor() {}

  getAllProjects = () => this.projects

  findProjectById = (id: number) => {
    let projectById = this.projects.find(project => project.id === id);

    if (projectById === undefined) {
      throw new TypeError('No project matches the id' + id)
    }

    return projectById
  }

  getProjectsByFilter = (filterTags: Tag[]) => {
    let filteredProjects = [] as (Project | undefined)[]

    filteredProjects = this.projects.map(project => {
      const hasTag = project.tags.some(tag => filterTags.includes(tag))

      if (hasTag) {
        return project
      } 
      return undefined
    })

    return filteredProjects.filter(project => project !== undefined) as Project[]

  }
}
