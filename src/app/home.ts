import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <header class="hero-section text-center d-flex align-items-center justify-content-center" style="height: 80vh; background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/image/image_6.png') no-repeat center center/cover;">
      <div class="text-white">
        <h1 class="display-1 mb-3">MARLIN</h1>
        <p class="lead mb-4">Ваша краса — наше натхнення</p>
        <a href="#services" class="btn btn-primary btn-lg">Переглянути послуги</a>
      </div>
    </header>

    <!-- About Section -->
    <section class="section-padding container">
      <div class="row align-items-center">
        <div class="col-md-6 mb-4 mb-md-0">
          <img src="/image/image_7.png" class="img-fluid shadow-sm" alt="Salon interior">
        </div>
        <div class="col-md-6 ps-md-5">
          <h2 class="mb-4">Про наш салон</h2>
          <p>Marlin — це сучасний салон краси, де ми поєднуємо професіоналізм, затишну атмосферу та індивідуальний підхід до кожного клієнта. Наша місія — підкреслити вашу природну красу та подарувати незабутні моменти релаксу.</p>
          <p>Ми використовуємо тільки високоякісні матеріали та сучасне обладнання, щоб ви отримували найкращий результат.</p>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section id="services" class="section-padding bg-light">
      <div class="container text-center">
        <h2 class="mb-5">Наші послуги</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card service-card h-100">
              <img src="/image/image_3.png" class="card-img-top" alt="Hairdressing">
              <div class="card-body p-4">
                <h3>Перукарські послуги</h3>
                <p class="card-text text-muted">Стильні стрижки, професійне фарбування та догляд за волоссям.</p>
                <a routerLink="/hair" class="btn btn-outline-dark mt-3">Детальніше</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card service-card h-100">
              <img src="/image/image_1.png" class="card-img-top" alt="Eyelashes">
              <div class="card-body p-4">
                <h3>Нарощення вій</h3>
                <p class="card-text text-muted">Виразний погляд, що заворожує. Класика та об'ємне нарощення.</p>
                <a routerLink="/lashes" class="btn btn-outline-dark mt-3">Детальніше</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card service-card h-100">
              <img src="/image/image_4.png" class="card-img-top" alt="Manicure">
              <div class="card-body p-4">
                <h3>Манікюр</h3>
                <p class="card-text text-muted">Ідеальні нігті та доглянуті руки. Великий вибір кольорів та дизайнів.</p>
                <a routerLink="/manicure" class="btn btn-outline-dark mt-3">Детальніше</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section-padding text-center bg-white">
      <div class="container">
        <h2 class="mb-4">Готові до перевтілення?</h2>
        <p class="mb-5 lead">Запишіться на процедуру вже сьогодні через наш Instagram!</p>
        <a href="https://www.instagram.com/marlin_beauty_starkon?igsh=MTlqcHg0YzJ5eXp2bw==" target="_blank" class="btn btn-primary btn-lg">Записатися</a>
      </div>
    </section>
  `
})
export class HomeComponent {}
