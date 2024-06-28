import { ComponentFixture, TestBed } from "@angular/core/testing";

import { VirtualLineDetailComponent } from "./virtual-line-detail.component";

describe("VirtualLineDetailComponent", () => {
    let component: VirtualLineDetailComponent;
    let fixture: ComponentFixture<VirtualLineDetailComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VirtualLineDetailComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(VirtualLineDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
