import { Controller, Delete, Get, Param, Post, Patch } from "@nestjs/common";

@Controller("movie")
export class MovieController {
  @Get()
  getAll() {
    return "This will return all movies";
  }


  @Get("/:id")
  getOne(@Param("id") movieId: string) {
    return `This will return one movies with the id : ${movieId}`;
  }

  @Post()
  create() {
    return "This will create a movie";
  }

  @Delete("/:id")
  remove(@Param("id") movieId: string) {
    return `This will delete a movie with the id : ${movieId}`;
  }

  // 일부 리소스 업데이트
  @Patch("/:id")
  patch(@Param('id') movieId: string) {
    return `This will patch a movie with the id : ${movieId}`;
  }
}
