import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { TransformerLocation } from '../models/transformer-location';

@Injectable({
  providedIn: 'root'
})
export class TransformerLocationService {

  form = new FormGroup({
    id: new FormControl("", Validators.required),
    createdDate: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    latitude: new FormControl("", Validators.required),
    longitude: new FormControl("", Validators.required),
    category: new FormControl(""),
    hasIntrusion: new FormControl(),
  });

  url = environment.apiUrl;

  constructor(private http_: HttpClient) { }

  findAll() {
    return this.http_.get<TransformerLocation[]>(`${this.url}/v1/transformerLocation/all`);
  }

  add(transformerLocation: TransformerLocation) {
    return this.http_.post(`${this.url}/v1/transformerLocation`, transformerLocation)
  }

  update(transformerLocation: TransformerLocation) {
    return this.http_.put(`${this.url}//v1/transformerLocation/${transformerLocation.id}`, transformerLocation)
  }

}