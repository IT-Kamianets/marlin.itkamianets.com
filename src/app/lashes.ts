import { Component } from '@angular/core';

@Component({
  selector: 'app-lashes',
  standalone: true,
  template: `
    <header class="bg-light py-5 text-center">
      <div class="container">
        <h1 class="display-4">Нарощення вій</h1>
        <p class="lead">Ваш погляд — ваша сила</p>
      </div>
    </header>

    <section class="section-padding container">
      <div class="row flex-md-row-reverse align-items-center">
        <div class="col-md-6 text-center">
          <img src="/image/image_5.png" class="img-fluid shadow" alt="Eyelashes Professional Work" style="max-height: 450px; width: auto; object-fit: contain; border-radius: 8px;">
        </div>
        <div class="col-md-6 pe-md-5">
          <h2 class="mb-4">Наші послуги</h2>
          <ul class="list-group list-group-flush mb-4">
            <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent px-0">
              Класичне нарощення
              <span class="fw-bold">500 грн</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent px-0">
              Нарощення 2D
              <span class="fw-bold">600 грн</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent px-0">
              Нарощення 3D
              <span class="fw-bold">700 грн</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent px-0">
              Голлівудський об'єм
              <span class="fw-bold">850 грн</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent px-0">
              Ламінування вій
              <span class="fw-bold">450 грн</span>
            </li>
          </ul>
          <p>Ми працюємо з гіпоалергенними матеріалами преміум-класу. Тривалість процедури залежить від обраного об'єму (від 1.5 до 3 годин).</p>
          <a href="https://www.instagram.com/alino4ka_sydorchuk_lash?igsh=MWlzdHlpdjFmMmF4Mw==" target="_blank" class="btn btn-primary mt-3">Записатися до майстра</a>
        </div>
      </div>
    </section>
  `
})
export class LashesComponent {}
