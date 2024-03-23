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
      pictures: ["../../assets/android_geolocation/screenshot-initial.png", "../../assets/android_geolocation/screenshot-pos-1.png", "../../assets/android_geolocation/screenshot-pos-2.png", "../../assets/android_geolocation/location-dev.png"], 
      projectLink: "//www.github.com", 
      summary: "Mobile app to visualize real-time location on a map, send and retrieve datas from a remote server.", 
      description: 
        `
          <h5>Key features</h5>\
          <ul type='square'>\
            <li><b>Real-Time Location Visualization:&nbsp;</b>the application offers users the ability to visualize their real-time position on a map interface (leafletjs), providing an intuitive and interactive experience</li>\
            <li><b>AMQP Protocol Integration:&nbsp;</b>the application seamlessly sends location data to a RabbitMQ server.</li>\
            <li><b>RESTful API Interaction:&nbsp;</b>the project uses a RESTful API for retrieving and deleting location data from the remote server.</li>\
            <li><b>Android Studio Development:&nbsp;</b>The application is powered by Android Studio, the official Integrated Development Environment (IDE) for Android app development</li>\
          </ul>
        `, 
      tags: [Tag.JAVA, Tag.ANDROID, Tag.KOTLIN]
    },
    {
      id: 1, 
      name: "Spring Boot Geolocation API", 
      pictures: ["../../assets/spring-geolocation/swagger-ui.png","../../assets/spring-geolocation/mongodb-compass.png","../../assets/spring-geolocation/rabbitmq-admin-1.png", "../../assets/spring-geolocation/rabbitmq-admin-2.png", "../../assets/spring-geolocation/rabbitmq-admin-3.png"], 
      projectLink: "//www.github.com", 
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
      name: "Angular Dashboard", 
      pictures: ["../../assets/image_1.png","../../assets/image_2.png","../../assets/image_3.png"], 
      projectLink: "//www.github.com", 
      summary: "Dashboard web app developed using Angular", 
      description: 
        `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `, 
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    {
      id: 3, name: "Fullstack Web Crawler", pictures: ["../../assets/image_1.png","../../assets/image_2.png","../../assets/image_3.png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using Angular and Node.js", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.NODEJS, Tag.JAVASCRIPT]},
    {
      id: 4, name: "Android Streaming App", pictures: ["../../assets/android-streaming/screenshot-all-reduce.jpg", "../../assets/android-streaming/streaming-dev.png"], projectLink: "//www.github.com", summary: "Mobile app to playback an audio stream from url.", description: "<h2 style='color: red;'>Lorem ipsum</h2> dolor sit amet<br>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANDROID, Tag.KOTLIN]},
    {
      id: 5, name: "Fullstack Media Player", pictures: ["../../assets/spring-webscraper-streaming/swagger-ui.png","../../assets/spring-webscraper-streaming/mongo-db.png"], projectLink: "//github.com/vocaltech/android-streaming", summary: "Fullstack web app developed using Angular and Spring Boot", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.JAVA, Tag.TYPESCRIPT]}
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
