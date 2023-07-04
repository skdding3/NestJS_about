import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UiModule } from './ui/ui.module';
import { MovieController } from './movie/movie.controller';
import { MovieService } from './movie/movie.service';

@Module({
  imports: [UiModule],
  controllers: [AppController, MovieController],
  providers: [AppService, MovieService],
})
export class AppModule {}
