import { Component } from '@angular/core';

@Component({
  selector: 'app-hair',
  standalone: true,
  template: `
    <header class="bg-light py-5 text-center">
      <div class="container">
        <h1 class="display-4">Перукарські послуги</h1>
        <p class="lead">Створюємо ваш ідеальний образ</p>
      </div>
    </header>

    <section class="section-padding container">
      <div class="row">
        <div class="col-md-6">
          <img src="/image/image_2.png" class="img-fluid" alt="Hairdressing">
        </div>
        <div class="col-md-6 ps-md-5">
          <h2 class="mb-4">Наші послуги</h2>
          <ul class="list-group list-group-flush mb-4">
            <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent px-0">
              Стрижка жіноча
              <span class="fw-bold">від 300 грн</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent px-0">
              Фарбування волосся (один тон)
              <span class="fw-bold">від 800 грн</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent px-0">
              Складне фарбування (AirTouch, Balayage)
              <span class="fw-bold">від 1500 грн</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent px-0">
              Укладка волосся
              <span class="fw-bold">від 250 грн</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent px-0">
              Кератинове вирівнювання
              <span class="fw-bold">від 1200 грн</span>
            </li>
          </ul>
          <p>Ми використовуємо професійну косметику світових брендів, щоб ваше волосся було не тільки красивим, а й здоровим.</p>
          <a href="https://www.instagram.com/marlin_beauty_starkon?igsh=MTlqcHg0YzJ5eXp2bw==" target="_blank" class="btn btn-primary mt-3">Записатися</a>
        </div>
      </div>
    </section>
  `
})
export class HairComponent {}
