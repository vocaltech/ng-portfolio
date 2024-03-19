import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {id: 0, name: "Android Geolocation App", pictures: ["../../assets/android_geolocation/screenshot-initial.png", "../../assets/android_geolocation/screenshot-pos-1.png", "../../assets/android_geolocation/screenshot-pos-2.png", "../../assets/android_geolocation/location-dev.png"], projectLink: "//www.github.com", summary: "Mobile app to visualize real-time location on a map, send and retrieve datas from a remote server.", description: "<h2 style='color: red;'>Lorem ipsum</h2> dolor sit amet<br>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVA, Tag.ANDROID, Tag.KOTLIN]},
    {id: 1, name: "Spring Boot Geolocation API", pictures: ["../../assets/spring-geolocation/swagger-ui.png","../../assets/spring-geolocation/mongodb-compass.png","../../assets/spring-geolocation/rabbitmq-admin-1.png", "../../assets/spring-geolocation/rabbitmq-admin-2.png", "../../assets/spring-geolocation/rabbitmq-admin-3.png"], projectLink: "//www.github.com", summary: "Backend for Android Locations App.<br>Web Services to retrieve and delete all positions.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVA]},
    {id: 2, name: "Angular Dashboard", pictures: ["../../assets/image_1.png","../../assets/image_2.png","../../assets/image_3.png"], projectLink: "//www.github.com", summary: "Dashboard web app developed using Angular", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    {id: 3, name: "Fullstack Web Crawler", pictures: ["../../assets/image_1.png","../../assets/image_2.png","../../assets/image_3.png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using Angular and Node.js", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.NODEJS, Tag.JAVASCRIPT]},
    {id: 4, name: "Android Streaming App", pictures: ["../../assets/android-streaming/screenshot-all-reduce.jpg", "../../assets/android-streaming/streaming-dev.png"], projectLink: "//www.github.com", summary: "Mobile app to playback an audio stream from url.", description: "<h2 style='color: red;'>Lorem ipsum</h2> dolor sit amet<br>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANDROID, Tag.KOTLIN]},
    {id: 5, name: "Fullstack Media Player", pictures: ["../../assets/spring-webscraper-streaming/swagger-ui.png","../../assets/spring-webscraper-streaming/mongo-db.png"], projectLink: "//github.com/vocaltech/android-streaming", summary: "Fullstack web app developed using Angular and Spring Boot", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.JAVA, Tag.TYPESCRIPT]}
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
