import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UiModule } from './ui/ui.module';
import { MovieController } from './movie/movie.controller';

@Module({
  imports: [UiModule],
  controllers: [AppController, MovieController],
  providers: [AppService],
})
export class AppModule {}
