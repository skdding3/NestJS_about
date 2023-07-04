import { Controller, Delete, Get, Param, Post, Patch, Body, Query } from "@nestjs/common";
import { Movie } from "./entities/movie.entity";
import { MovieService } from "./movie.service";

@Controller("movie")
export class MovieController {

  // 생성자 서비스 접근
  constructor(private readonly moviesService: MovieService) {
  }

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  /**
   * 검색
   * @param searchingYear
   */
  @Get("search")
  search(@Query("year") searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  /**
   * 영화 번호
   * @param movieId
   */
  @Get("/:id")
  getOne(@Param("id") movieId: string) {
    return this.moviesService.getOne(movieId);
  }

  /**
   * 영화 정보 작성
   * @param movieData
   */
  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete("/:id")
  remove(@Param("id") movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  // 일부 리소스 업데이트
  @Patch("/:id")
  patch(@Param("id") movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData
    };
  }


}
