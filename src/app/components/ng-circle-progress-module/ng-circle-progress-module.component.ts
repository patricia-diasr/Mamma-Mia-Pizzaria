import { NgModule } from "@angular/core";
import { NgCircleProgressModule } from "ng-circle-progress";

@NgModule({
    imports: [
        NgCircleProgressModule.forRoot({
            radius: 60,
            space: -10,
            outerStrokeWidth: 10,
            outerStrokeColor: "#F2A74B",
            innerStrokeColor: "#fbfbfb",
            innerStrokeWidth: 10,
            subtitleColor: "#111111",
            subtitleFontSize: "40",
            subtitleFontWeight: "500",
            animateTitle: false,
            animationDuration: 1000,
            showTitle: false,
            showUnits: false,
            showBackground: false,
            showInnerStroke: false,
            clockwise: false,
            startFromZero: false,
            showZeroOuterStroke: false,
            lazy: true,
        }),
    ],
    exports: [NgCircleProgressModule],
})
export class NgCircleProgressConfigModule {}
