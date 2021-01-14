import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { AppController } from './../src/app.controller';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let agent;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();


    app = moduleFixture.createNestApplication();
    await app.init();

    agent = request.agent(app.getHttpServer())
  });

  afterEach(async ()=> {
    await app.close()

  })

  it('/ (POST)', async () => {
    await agent
      .post('/')
      .send({
        id: 1,
        firstName: "firstName",
        lastName: "lastName",
       isActive: false
      })
      .expect(201)
  });

  it('/ (GET)', async () => {
    const user = {
      id: 1,
      firstName: "firstName",
      lastName: "lastName",
      isActive: false
    }
    await agent
      .post('/')
      .send(user)
      .expect(201)
    await agent
      .get('/')
      .expect(200)
      .expect([user])
  });
});
