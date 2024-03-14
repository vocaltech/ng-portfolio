import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {id: 0, name: "Android Geolocation App", pictures: ["../../assets/android_geolocation/screenshot-initial.png", "../../assets/android_geolocation/screenshot-pos-1.png", "../../assets/android_geolocation/screenshot-pos-2.png", "../../assets/android_geolocation/location-dev.png"], projectLink: "//www.github.com", summary: "Mobile app to visualize realtime location on a map, send and retrieve datas from a remote server.", description: "<h2 style='color: red;'>Lorem ipsum</h2> dolor sit amet<br>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVA, Tag.ANDROID, Tag.KOTLIN]},
    {id: 1, name: "Spring Geolocation API", pictures: ["../../assets/spring-geolocation/swagger-ui.png","../../assets/spring-geolocation/mongodb-compass.png","../../assets/spring-geolocation/rabbitmq-admin-1.png", "../../assets/spring-geolocation/rabbitmq-admin-2.png", "../../assets/spring-geolocation/rabbitmq-admin-3.png"], projectLink: "//www.github.com", summary: "Backend for Android Locations App.<br>Rest API to retrieve and delete all positions for an user.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVA]},
    {id: 2, name: "Sample Angular App", pictures: ["../../assets/image_1.png","../../assets/image_2.png","../../assets/image_3.png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using Angular and Node.JS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]},
    {id: 3, name: "Web API Project", pictures: ["../../assets/image_1.png","../../assets/image_2.png","../../assets/image_3.png"], projectLink: "//www.github.com", summary: "Web API Project that was developed for a class project.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVA, Tag.ANGULAR]},
    {id: 4, name: "Chrome Extension", pictures: ["../../assets/image_1.png","../../assets/image_2.png","../../assets/image_3.png"], projectLink: "//www.github.com", summary: "Developed a chrome extension that tracks the prices of furniture.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVASCRIPT]},
    {id: 5, name: "Sample Typescript Project", pictures: ["../../assets/image_1.png","../../assets/image_2.png","../../assets/image_3.png"], projectLink: "//github.com/vocaltech/android-streaming", summary: "Typescript project that analyzes stock market data.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.TYPESCRIPT]}
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
