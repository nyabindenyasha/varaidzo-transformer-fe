import { Component, OnInit } from '@angular/core';
import { ManholeLocationRequest } from 'src/app/models/manhole_location_request';
import { TransformerLocation } from 'src/app/models/transformer-location';
import { TransformerLocationService } from 'src/app/_services/transformer-location.service';
import swal from "sweetalert2";

@Component({
  selector: 'app-transformer-location',
  templateUrl: './transformer-location.component.html',
  styleUrls: ['./transformer-location.component.css']
})
export class TransformerLocationComponent implements OnInit {

  isSelected: boolean = false;
  selected: TransformerLocation = null;

  isIntrusion: boolean = false;
  isOilReading: boolean = false;
  isTemperature: boolean = false;
  isStatistics: boolean = false;

  isIntrusionSwalViewed: boolean = false;


  manholeLocationRequest: ManholeLocationRequest = new ManholeLocationRequest();

  transformerLocations: TransformerLocation[] = [];
  formControls = this.transformerLocationService.form.controls;
  constructor(public transformerLocationService: TransformerLocationService) { }

  ngOnInit(): void {
    this.load();
    this.refresh();
  }

  refresh() {
    setInterval(() => {
      this.load();
    }, 30000);
  }

  onSubmit() {
    console.log(this.transformerLocationService.form.value);
    this.transformerLocationService.add(this.transformerLocationService.form.value).subscribe(resp => {
      console.log(resp);
    })
  }

  load() {
    this.transformerLocationService.findAll().subscribe((x: TransformerLocation[]) => {
      console.log(x);
      this.transformerLocations = x;
    })
    this.transformerLocations.forEach(x => {
      if (x.hasIntrusion){
        swal.fire('Intrusion Alert', 'An intrusion was detected at ' + x.name, 'warning');
        // this.isIntrusionSwalViewed = true;
      }
    })
  }

  onMore(item: any) {
    console.log("onMore")
    console.log(item)
    console.log(this.formControls["category"].value)

    this.manholeLocationRequest.id = item.id;
    this.manholeLocationRequest.name = item.name;
    this.manholeLocationRequest.description = item.description;
    this.manholeLocationRequest.latitude = item.latitude;
    this.manholeLocationRequest.longitude = item.longitude;


    if (this.formControls["category"].value == 1) {
      this.isSelected = true;
      this.isIntrusion = true;
      this.isOilReading = false;
      this.isStatistics = false;
      this.isTemperature = false;
    }

    else if (this.formControls["category"].value == 2) {
      this.isSelected = true;
      this.isIntrusion = false;
      this.isOilReading = true;
      this.isStatistics = false;
      this.isTemperature = false;
    }

    else if (this.formControls["category"].value == 3) {
      this.isSelected = true;
      this.isIntrusion = false;
      this.isOilReading = false;
      this.isStatistics = false;
      this.isTemperature = true;
    }

    else {
      this.isSelected = true;
      this.isIntrusion = false;
      this.isOilReading = false;
      this.isStatistics = true;
      this.isTemperature = false;
    }

  }

  onIntrusions(item: any) {
    console.log("onMore")
    console.log(item)
  }

  onOilReadings(item: any) {
    console.log("onMore")
    console.log(item)
  }

  onStatistics(item: any) {
    console.log("onMore")
    console.log(item)
  }

  onBack() {
    console.log("onBack")
  }

}
