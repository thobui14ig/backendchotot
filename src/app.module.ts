import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BenhNhanModule } from './benhnhan/benhnhan.module';
import { SuatanModule } from './suatan/suatan.module';
import { VatTuModule } from './vattu/vattu.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'appbv',
      entities: ["dist/**/*.entity{.ts,.js}"],

      "migrationsTableName": "custom_migration_table",
      "migrations": ['dist/src/db/migrations/*.js'],
      "cli": {
          "migrationsDir": "src/db/migrations"
      },
    synchronize: true
      // autoLoadEntities: true,
    }),
    SuatanModule,
    BenhNhanModule,
    VatTuModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
