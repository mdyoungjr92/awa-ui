import { AwaMaterialModule } from './awa-material.module';

describe('AwaMaterialModule', () => {
  let awaMaterialModule: AwaMaterialModule;

  beforeEach(() => {
    awaMaterialModule = new AwaMaterialModule();
  });

  it('should create an instance', () => {
    expect(awaMaterialModule).toBeTruthy();
  });
});
