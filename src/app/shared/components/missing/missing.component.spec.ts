import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingComponent } from './missing.component';
import {ComponentFactory, ComponentFactoryResolver, Injector} from "@angular/core";

describe('MissingComponent', () => {
  let component: MissingComponent;
  let fixture: ComponentFixture<MissingComponent>;
  let factory: ComponentFactory<MissingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const resolver = <ComponentFactoryResolver>TestBed.get(ComponentFactoryResolver, null);
    factory = resolver.resolveComponentFactory(MissingComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the header', () => {
    const header = document.createTextNode('Example header');
    const componentRef = factory.create(Injector.NULL, [[ header ]]);

    const h3 = componentRef.location.nativeElement.querySelector('h3');

    expect(h3.textContent).toBe('Example header');
  });


  it('should render the content', () => {
    const header = document.createTextNode('Example content');
    const componentRef = factory.create(Injector.NULL, [[ header ]]);

    const div = componentRef.location.nativeElement.querySelector('div');

    expect(div.textContent).toBe('Example content');
  });

  it('should be empty on start', () => {
    const componentRef = factory.create(Injector.NULL, [[]]);

    const h3 = componentRef.location.nativeElement.querySelector('h3');
    const div = componentRef.location.nativeElement.querySelector('div');

    expect(h3.textContent).toBe('');
    expect(div.textContent).toBe('');
  });
});
