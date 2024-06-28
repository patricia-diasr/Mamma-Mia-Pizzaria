import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { WaitingTimeComponent } from "../../components/waiting-time/waiting-time.component";
import { LinePosition } from "../../interfaces/LinePosition";
import { VirtualLineService } from "../../services/virtual-line.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { ToastService } from "../../services/toast.service";

@Component({
    selector: "app-virtual-line-detail",
    standalone: true,
    templateUrl: "./virtual-line-detail.component.html",
    styleUrl: "./virtual-line-detail.component.scss",
    imports: [CommonModule, WaitingTimeComponent],
})
export class VirtualLineDetailComponent {
    linePositionId!: string;
    linePosition: LinePosition | undefined;
    waitingTime!: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private virtualLineService: VirtualLineService,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.linePositionId = params.get("id")!;
        });

        this.linePosition = this.virtualLineService.getLinePosition(this.linePositionId);

        if (this.linePosition === undefined) {
            this.router.navigate(["/"]);
        }

        this.waitingTime = this.linePosition.waitingTime;
    }

    async deleteHandler() {
        const response = await this.virtualLineService.deleteLinePosition(
            this.linePositionId
        );
        this.toastService.add(response);
        this.router.navigate(["/"]);
    }
}
