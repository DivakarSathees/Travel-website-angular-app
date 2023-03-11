import { ComponentFixture, TestBed, async, inject, TestBedStatic } from "@angular/core/testing";
import { Router } from "@angular/router";

import { RouterTestingModule } from "@angular/router/testing";
import { AboutComponent } from "./about/about.component";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
// import { routes } from './app-routing.module'
import { Location } from "@angular/common";
import { DestinationComponent } from "./destination/destination.component";

describe("App Routing",() => {
    let router: Router;
    let fixture: ComponentFixture<AppComponent>;
    let location: Location

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(
                [
                    {path:'', component:HomeComponent},
                    {path:'destination', component:DestinationComponent},
                    {path:'about', component: AboutComponent},
                    {path: 'contact', component: ContactComponent},
                    { path: '**', redirectTo: '/', pathMatch:'full' }
                ]),
            ],
            declarations:[
                AppComponent,
                HomeComponent,
                AboutComponent,
                ContactComponent,
                DestinationComponent
            ]

        }).compileComponents();
    }));

    beforeEach(() => {
        router=TestBed.get(Router);
        location = TestBed.get(Location);
        router.initialNavigation();
        fixture = TestBed.createComponent(AppComponent)
    });

    // it('should navigate to home page by default', waitForAsync(()=>{
    //     fixture.detectChanges();
    //     fixture.whenStable().then(() => {
    //         expect(location.path()).toBe('/')
    //     })
    // }))

    it('should navigate to home page by default', async () => {
      await router.initialNavigation();
      expect(location.path()).toBe('/');
    });



    it('should navigate to about page', async () => {
      await router.navigate(['/about']);
      expect(location.path()).toBe('/about');
    });

    it('should navigate to contact page', async () => {
      await router.navigate(['/contact']);
      expect(location.path()).toBe('/contact');
    });

    it('should navigate to destination page', async () => {
      await router.navigate(['/destination']);
      expect(location.path()).toBe('/destination');
    });

    it('should navigate to default path for invalid paths', async () => {
        await router.navigate(['/invalid']);
        fixture.detectChanges();
        expect(location.path()).toBe('/');
      });

})