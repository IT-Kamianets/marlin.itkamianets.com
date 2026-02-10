import { Component } from '@angular/core';

@Component({
  selector: 'app-manicure',
  standalone: true,
  template: `
    <header class="bg-light py-5 text-center">
      <div class="container">
        <h1 class="display-4">Манікюр</h1>
        <p class="lead">Ідеальні нігті до кінчиків пальців</p>
      </div>
    </header>

    <section class="section-padding container">
      <div class="row">
        <div class="col-md-6">
          <img src="/image/image.png" class="img-fluid" alt="Manicure">
        </div>
        <div class="col-md-6 ps-md-5">
          <h2 class="mb-4">Наші послуги</h2>
          <ul class="list-group list-group-flush mb-4">
            <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent px-0">
              Комбінований манікюр
              <span class="fw-bold">250 грн</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent px-0">
              Манікюр + покриття гель-лаком
              <span class="fw-bold">500 грн</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent px-0">
              Укріплення нігтів (гель/пудра)
              <span class="fw-bold">+100 грн</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent px-0">
              Нарощення нігтів
              <span class="fw-bold">від 700 грн</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent px-0">
              Дизайн одного нігтя
              <span class="fw-bold">від 20 грн</span>
            </li>
          </ul>
          <p>Безпека понад усе! Ми використовуємо триетапну стерилізацію інструментів та одноразові розхідні матеріали.</p>
          <a href="https://www.instagram.com/alino4ka_sydorchuk_lash?igsh=MWlzdHlpdjFmMmF4Mw==" target="_blank" class="btn btn-primary mt-3">Записатися до майстра</a>
        </div>
      </div>
    </section>
  `
})
export class ManicureComponent {}
