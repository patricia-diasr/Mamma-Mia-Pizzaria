import { ComponentFixture, TestBed } from "@angular/core/testing";

import { VirtualLineComponent } from "./virtual-line.component";

describe("VirtualLineComponent", () => {
    let component: VirtualLineComponent;
    let fixture: ComponentFixture<VirtualLineComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VirtualLineComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(VirtualLineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
