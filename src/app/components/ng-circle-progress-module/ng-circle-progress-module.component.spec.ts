import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NgCircleProgressModuleComponent } from "./ng-circle-progress-module.component";

describe("NgCircleProgressModuleComponent", () => {
    let component: NgCircleProgressModuleComponent;
    let fixture: ComponentFixture<NgCircleProgressModuleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NgCircleProgressModuleComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NgCircleProgressModuleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
