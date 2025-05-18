import type { HomePage } from '../types';

export const mockHomePage: HomePage = {
  seo: {
    en: {
      title: 'PLANY - Professional Fit-out Services',
      description: 'High-quality fit-out services for commercial and residential spaces with professional approach.',
      keywords: ['fit-out', 'construction', 'interior design', 'commercial fit-out', 'residential fit-out']
    },
    pl: {
      title: 'PLANY - Profesjonalne usługi fit-out',
      description: 'Wysokiej jakości usługi fit-out dla przestrzeni komercyjnych i mieszkalnych z profesjonalnym podejściem.',
      keywords: ['fit-out', 'budownictwo', 'projektowanie wnętrz', 'fit-out komercyjny', 'fit-out mieszkalny']
    },
    ua: {
      title: 'PLANY - Професійні послуги з оздоблення',
      description: 'Високоякісні послуги з оздоблення комерційних і житлових приміщень з професійним підходом.',
      keywords: ['оздоблення', 'будівництво', 'дизайн інтер\'єру', 'комерційне оздоблення', 'житлове оздоблення']
    },
    de: {
      title: 'PLANY - Professionelle Fit-out Dienstleistungen',
      description: 'Hochwertige Fit-out-Dienstleistungen für Gewerbe- und Wohnräume mit professionellem Ansatz.',
      keywords: ['Fit-out', 'Bau', 'Innenarchitektur', 'Gewerbe-Fit-out', 'Wohn-Fit-out']
    }
  },
  hero: {
    en: {
      title: 'Professional Fit-out Solutions',
      subtitle: 'Creating beautiful, functional spaces tailored to your needs',
      ctaText: 'Get a Free Quote',
      secondaryCtaText: 'View Our Portfolio'
    },
    pl: {
      title: 'Profesjonalne rozwiązania fit-out',
      subtitle: 'Tworzymy piękne, funkcjonalne przestrzenie dostosowane do Twoich potrzeb',
      ctaText: 'Darmowa wycena',
      secondaryCtaText: 'Zobacz nasze portfolio'
    },
    ua: {
      title: 'Професійні рішення для оздоблення',
      subtitle: 'Створюємо красиві, функціональні простори, пристосовані до ваших потреб',
      ctaText: 'Отримати безкоштовну оцінку',
      secondaryCtaText: 'Переглянути наше портфоліо'
    },
    de: {
      title: 'Professionelle Fit-out Lösungen',
      subtitle: 'Wir schaffen schöne, funktionale Räume nach Ihren Bedürfnissen',
      ctaText: 'Kostenloses Angebot',
      secondaryCtaText: 'Portfolio ansehen'
    }
  },
  about: {
    en: {
      title: 'About Us',
      subtitle: 'Your Trusted Fit-out Partner',
      description: 'We are a team of experienced professionals specializing in high-quality commercial and residential fit-out solutions. With years of industry expertise, we deliver exceptional results that exceed client expectations.',
      stats: {
        experience: '10+ Years Experience',
        projects: '250+ Projects Completed',
        clients: '200+ Satisfied Clients',
        awards: '15+ Industry Awards'
      }
    },
    pl: {
      title: 'O nas',
      subtitle: 'Twój zaufany partner fit-out',
      description: 'Jesteśmy zespołem doświadczonych profesjonalistów specjalizujących się w wysokiej jakości rozwiązaniach fit-out dla przestrzeni komercyjnych i mieszkalnych. Z wieloletnim doświadczeniem w branży, dostarczamy wyjątkowe rezultaty, które przewyższają oczekiwania klientów.',
      stats: {
        experience: '10+ Lat doświadczenia',
        projects: '250+ Ukończonych projektów',
        clients: '200+ Zadowolonych klientów',
        awards: '15+ Nagród branżowych'
      }
    },
    ua: {
      title: 'Про нас',
      subtitle: 'Ваш надійний партнер з оздоблення',
      description: 'Ми команда досвідчених професіоналів, що спеціалізуються на високоякісних рішеннях з оздоблення комерційних і житлових приміщень. З багаторічним досвідом у галузі, ми забезпечуємо виняткові результати, що перевершують очікування клієнтів.',
      stats: {
        experience: '10+ Років досвіду',
        projects: '250+ Виконаних проектів',
        clients: '200+ Задоволених клієнтів',
        awards: '15+ Галузевих нагород'
      }
    },
    de: {
      title: 'Über uns',
      subtitle: 'Ihr vertrauenswürdiger Fit-out Partner',
      description: 'Wir sind ein Team erfahrener Fachleute, die sich auf hochwertige Fit-out-Lösungen für Gewerbe- und Wohnräume spezialisiert haben. Mit langjähriger Branchenerfahrung liefern wir außergewöhnliche Ergebnisse, die die Erwartungen der Kunden übertreffen.',
      stats: {
        experience: '10+ Jahre Erfahrung',
        projects: '250+ Abgeschlossene Projekte',
        clients: '200+ Zufriedene Kunden',
        awards: '15+ Branchenauszeichnungen'
      }
    }
  },
  services: {
    en: {
      title: 'Our Services',
      subtitle: 'What We Offer',
      services: [
        {
          title: 'Commercial Fit-out',
          description: 'Complete renovation and fit-out services for commercial spaces, including offices, retail stores, and hospitality venues.',
          icon: 'building',
          slug: 'commercial-fit-out'
        },
        {
          title: 'Residential Fit-out',
          description: 'Custom interior fit-out solutions for apartments, houses, and residential complexes.',
          icon: 'home',
          slug: 'residential-fit-out'
        },
        {
          title: 'Interior Design',
          description: 'Professional interior design services to create functional and aesthetically pleasing spaces.',
          icon: 'design',
          slug: 'interior-design'
        },
        {
          title: 'Custom Furniture',
          description: 'Bespoke furniture design and manufacturing to meet specific requirements and preferences.',
          icon: 'furniture',
          slug: 'custom-furniture'
        },
        {
          title: 'Project Management',
          description: 'End-to-end project management ensuring timely delivery within budget.',
          icon: 'project',
          slug: 'project-management'
        },
        {
          title: 'Consultation',
          description: 'Expert advice on space optimization, materials, and design solutions.',
          icon: 'consultation',
          slug: 'consultation'
        }
      ]
    },
    pl: {
      title: 'Nasze usługi',
      subtitle: 'Co oferujemy',
      services: [
        {
          title: 'Fit-out komercyjny',
          description: 'Kompleksowe usługi renowacji i fit-out dla przestrzeni komercyjnych, w tym biur, sklepów i obiektów hotelowych.',
          icon: 'building',
          slug: 'commercial-fit-out'
        },
        {
          title: 'Fit-out mieszkalny',
          description: 'Niestandardowe rozwiązania fit-out dla mieszkań, domów i kompleksów mieszkalnych.',
          icon: 'home',
          slug: 'residential-fit-out'
        },
        {
          title: 'Projektowanie wnętrz',
          description: 'Profesjonalne usługi projektowania wnętrz, tworzące funkcjonalne i estetyczne przestrzenie.',
          icon: 'design',
          slug: 'interior-design'
        },
        {
          title: 'Meble na wymiar',
          description: 'Projektowanie i produkcja mebli na zamówienie, spełniających określone wymagania i preferencje.',
          icon: 'furniture',
          slug: 'custom-furniture'
        },
        {
          title: 'Zarządzanie projektami',
          description: 'Kompleksowe zarządzanie projektami, zapewniające terminową realizację w ramach budżetu.',
          icon: 'project',
          slug: 'project-management'
        },
        {
          title: 'Konsultacje',
          description: 'Eksperckie doradztwo w zakresie optymalizacji przestrzeni, materiałów i rozwiązań projektowych.',
          icon: 'consultation',
          slug: 'consultation'
        }
      ]
    },
    ua: {
      title: 'Наші послуги',
      subtitle: 'Що ми пропонуємо',
      services: [
        {
          title: 'Комерційне оздоблення',
          description: 'Повний спектр послуг з ремонту та оздоблення комерційних приміщень, включаючи офіси, магазини та готельні заклади.',
          icon: 'building',
          slug: 'commercial-fit-out'
        },
        {
          title: 'Житлове оздоблення',
          description: 'Індивідуальні рішення з оздоблення інтер\'єру для квартир, будинків і житлових комплексів.',
          icon: 'home',
          slug: 'residential-fit-out'
        },
        {
          title: 'Дизайн інтер\'єру',
          description: 'Професійні послуги з дизайну інтер\'єру для створення функціональних і естетично привабливих приміщень.',
          icon: 'design',
          slug: 'interior-design'
        },
        {
          title: 'Меблі на замовлення',
          description: 'Індивідуальний дизайн і виготовлення меблів для задоволення конкретних вимог і вподобань.',
          icon: 'furniture',
          slug: 'custom-furniture'
        },
        {
          title: 'Управління проектами',
          description: 'Комплексне управління проектами, що забезпечує своєчасну реалізацію в межах бюджету.',
          icon: 'project',
          slug: 'project-management'
        },
        {
          title: 'Консультації',
          description: 'Експертні поради щодо оптимізації простору, матеріалів і дизайнерських рішень.',
          icon: 'consultation',
          slug: 'consultation'
        }
      ]
    },
    de: {
      title: 'Unsere Dienstleistungen',
      subtitle: 'Was wir anbieten',
      services: [
        {
          title: 'Gewerbe Fit-out',
          description: 'Komplette Renovierungs- und Fit-out-Dienstleistungen für Gewerberäume, einschließlich Büros, Einzelhandelsgeschäfte und Gastronomiebetriebe.',
          icon: 'building',
          slug: 'commercial-fit-out'
        },
        {
          title: 'Wohnraum Fit-out',
          description: 'Maßgeschneiderte Innenausbaulösungen für Wohnungen, Häuser und Wohnkomplexe.',
          icon: 'home',
          slug: 'residential-fit-out'
        },
        {
          title: 'Innenarchitektur',
          description: 'Professionelle Innenarchitekturleistungen zur Schaffung funktionaler und ästhetisch ansprechender Räume.',
          icon: 'design',
          slug: 'interior-design'
        },
        {
          title: 'Maßgefertigte Möbel',
          description: 'Individuelles Möbeldesign und -herstellung, um spezifische Anforderungen und Präferenzen zu erfüllen.',
          icon: 'furniture',
          slug: 'custom-furniture'
        },
        {
          title: 'Projektmanagement',
          description: 'Umfassendes Projektmanagement, das eine termingerechte Lieferung innerhalb des Budgets gewährleistet.',
          icon: 'project',
          slug: 'project-management'
        },
        {
          title: 'Beratung',
          description: 'Expertenberatung zur Raumoptimierung, Materialien und Designlösungen.',
          icon: 'consultation',
          slug: 'consultation'
        }
      ]
    }
  },
  portfolio: {
    en: {
      title: 'Our Portfolio',
      subtitle: 'Explore Our Recent Projects',
      categories: ['All', 'Commercial', 'Residential', 'Retail', 'Hospitality', 'Office'],
      viewProjectText: 'View Project'
    },
    pl: {
      title: 'Nasze portfolio',
      subtitle: 'Odkryj nasze ostatnie projekty',
      categories: ['Wszystkie', 'Komercyjne', 'Mieszkalne', 'Handel detaliczny', 'Hotelarstwo', 'Biurowe'],
      viewProjectText: 'Zobacz projekt'
    },
    ua: {
      title: 'Наше портфоліо',
      subtitle: 'Ознайомтеся з нашими останніми проектами',
      categories: ['Усі', 'Комерційні', 'Житлові', 'Роздрібні', 'Готельні', 'Офісні'],
      viewProjectText: 'Переглянути проект'
    },
    de: {
      title: 'Unser Portfolio',
      subtitle: 'Entdecken Sie unsere aktuellen Projekte',
      categories: ['Alle', 'Gewerbe', 'Wohnräume', 'Einzelhandel', 'Gastronomie & Hotellerie', 'Büro'],
      viewProjectText: 'Projekt ansehen'
    }
  },
  process: {
    en: {
      title: 'Our Process',
      subtitle: 'How We Work',
      steps: [
        {
          title: 'Initial Consultation',
          description: 'We begin by understanding your requirements, budget, and vision for the space.',
          stepNumber: 1
        },
        {
          title: 'Design Development',
          description: 'Our design team creates detailed plans and visualizations for your approval.',
          stepNumber: 2
        },
        {
          title: 'Material Selection',
          description: 'We help you select the best materials that match your style and budget.',
          stepNumber: 3
        },
        {
          title: 'Construction',
          description: 'Our skilled craftsmen execute the project with attention to detail and quality.',
          stepNumber: 4
        },
        {
          title: 'Quality Control',
          description: 'Rigorous quality checks ensure that all work meets our high standards.',
          stepNumber: 5
        },
        {
          title: 'Handover',
          description: 'We deliver the finished project on time and to your satisfaction.',
          stepNumber: 6
        }
      ]
    },
    pl: {
      title: 'Nasz proces',
      subtitle: 'Jak pracujemy',
      steps: [
        {
          title: 'Wstępna konsultacja',
          description: 'Zaczynamy od zrozumienia Twoich wymagań, budżetu i wizji przestrzeni.',
          stepNumber: 1
        },
        {
          title: 'Rozwój projektu',
          description: 'Nasz zespół projektowy tworzy szczegółowe plany i wizualizacje do Twojej akceptacji.',
          stepNumber: 2
        },
        {
          title: 'Wybór materiałów',
          description: 'Pomagamy wybrać najlepsze materiały pasujące do Twojego stylu i budżetu.',
          stepNumber: 3
        },
        {
          title: 'Budowa',
          description: 'Nasi wykwalifikowani rzemieślnicy realizują projekt z dbałością o szczegóły i jakość.',
          stepNumber: 4
        },
        {
          title: 'Kontrola jakości',
          description: 'Rygorystyczne kontrole jakości zapewniają, że wszystkie prace spełniają nasze wysokie standardy.',
          stepNumber: 5
        },
        {
          title: 'Przekazanie',
          description: 'Dostarczamy ukończony projekt na czas i zgodnie z Twoimi oczekiwaniami.',
          stepNumber: 6
        }
      ]
    },
    ua: {
      title: 'Наш процес',
      subtitle: 'Як ми працюємо',
      steps: [
        {
          title: 'Початкова консультація',
          description: 'Ми починаємо з розуміння ваших вимог, бюджету та бачення простору.',
          stepNumber: 1
        },
        {
          title: 'Розробка дизайну',
          description: 'Наша команда дизайнерів створює детальні плани та візуалізації для вашого затвердження.',
          stepNumber: 2
        },
        {
          title: 'Вибір матеріалів',
          description: 'Ми допомагаємо вам вибрати найкращі матеріали, що відповідають вашому стилю та бюджету.',
          stepNumber: 3
        },
        {
          title: 'Будівництво',
          description: 'Наші кваліфіковані майстри виконують проект з увагою до деталей і якості.',
          stepNumber: 4
        },
        {
          title: 'Контроль якості',
          description: 'Ретельні перевірки якості гарантують, що всі роботи відповідають нашим високим стандартам.',
          stepNumber: 5
        },
        {
          title: 'Передача',
          description: 'Ми передаємо готовий проект вчасно і до вашого задоволення.',
          stepNumber: 6
        }
      ]
    },
    de: {
      title: 'Unser Prozess',
      subtitle: 'Wie wir arbeiten',
      steps: [
        {
          title: 'Erstberatung',
          description: 'Wir beginnen damit, Ihre Anforderungen, Ihr Budget und Ihre Vision für den Raum zu verstehen.',
          stepNumber: 1
        },
        {
          title: 'Designentwicklung',
          description: 'Unser Designteam erstellt detaillierte Pläne und Visualisierungen zur Ihrer Genehmigung.',
          stepNumber: 2
        },
        {
          title: 'Materialauswahl',
          description: 'Wir helfen Ihnen bei der Auswahl der besten Materialien, die zu Ihrem Stil und Budget passen.',
          stepNumber: 3
        },
        {
          title: 'Konstruktion',
          description: 'Unsere qualifizierten Handwerker führen das Projekt mit Liebe zum Detail und Qualität aus.',
          stepNumber: 4
        },
        {
          title: 'Qualitätskontrolle',
          description: 'Strenge Qualitätskontrollen stellen sicher, dass alle Arbeiten unseren hohen Standards entsprechen.',
          stepNumber: 5
        },
        {
          title: 'Übergabe',
          description: 'Wir liefern das fertige Projekt pünktlich und zu Ihrer Zufriedenheit.',
          stepNumber: 6
        }
      ]
    }
  },
  testimonials: {
    en: {
      title: 'Testimonials',
      subtitle: 'What Our Clients Say',
      testimonials: [
        {
          name: 'John Smith',
          position: 'CEO',
          company: 'Tech Solutions',
          content: 'PLANY delivered an exceptional office fit-out for our company. They understood our needs, worked within our budget, and completed the project on time. The result exceeded our expectations.',
          rating: 5
        },
        {
          name: 'Anna Kowalska',
          position: 'Homeowner',
          content: 'We hired PLANY for our apartment renovation, and they transformed our space beautifully. Their attention to detail and quality craftsmanship are truly impressive. Highly recommended!',
          rating: 5
        },
        {
          name: 'Michael Schmidt',
          position: 'Restaurant Owner',
          content: 'PLANY handled the fit-out of our restaurant with professionalism and creativity. They designed a space that perfectly captures the atmosphere we wanted, and our customers love it.',
          rating: 5
        }
      ]
    },
    pl: {
      title: 'Opinie',
      subtitle: 'Co mówią nasi klienci',
      testimonials: [
        {
          name: 'Jan Kowalski',
          position: 'Dyrektor Generalny',
          company: 'Tech Solutions',
          content: 'PLANY dostarczył wyjątkowy fit-out biurowy dla naszej firmy. Zrozumieli nasze potrzeby, pracowali w ramach naszego budżetu i ukończyli projekt na czas. Rezultat przekroczył nasze oczekiwania.',
          rating: 5
        },
        {
          name: 'Anna Kowalska',
          position: 'Właścicielka mieszkania',
          content: 'Zatrudniliśmy PLANY do renowacji naszego mieszkania, a oni pięknie przekształcili naszą przestrzeń. Ich dbałość o szczegóły i jakość wykonania są naprawdę imponujące. Gorąco polecam!',
          rating: 5
        },
        {
          name: 'Michał Schmidt',
          position: 'Właściciel restauracji',
          content: 'PLANY zajął się fit-outem naszej restauracji z profesjonalizmem i kreatywnością. Zaprojektowali przestrzeń, która doskonale oddaje atmosferę, której chcieliśmy, a nasi klienci ją uwielbiają.',
          rating: 5
        }
      ]
    },
    ua: {
      title: 'Відгуки',
      subtitle: 'Що кажуть наші клієнти',
      testimonials: [
        {
          name: 'Іван Петренко',
          position: 'Генеральний директор',
          company: 'Tech Solutions',
          content: 'PLANY забезпечила винятковий офісний ремонт для нашої компанії. Вони зрозуміли наші потреби, працювали в межах нашого бюджету та завершили проект вчасно. Результат перевершив наші очікування.',
          rating: 5
        },
        {
          name: 'Анна Ковальська',
          position: 'Власниця квартири',
          content: 'Ми найняли PLANY для ремонту нашої квартири, і вони чудово перетворили наш простір. Їхня увага до деталей та якісне виконання справді вражають. Дуже рекомендую!',
          rating: 5
        },
        {
          name: 'Михайло Шмідт',
          position: 'Власник ресторану',
          content: 'PLANY займалася оздобленням нашого ресторану з професіоналізмом і креативністю. Вони створили простір, який ідеально відображає атмосферу, яку ми хотіли, і нашим клієнтам це подобається.',
          rating: 5
        }
      ]
    },
    de: {
      title: 'Referenzen',
      subtitle: 'Was unsere Kunden sagen',
      testimonials: [
        {
          name: 'Johannes Schmidt',
          position: 'Geschäftsführer',
          company: 'Tech Solutions',
          content: 'PLANY hat ein außergewöhnliches Büro-Fit-out für unser Unternehmen geliefert. Sie haben unsere Bedürfnisse verstanden, innerhalb unseres Budgets gearbeitet und das Projekt pünktlich abgeschlossen. Das Ergebnis übertraf unsere Erwartungen.',
          rating: 5
        },
        {
          name: 'Anna Kowalska',
          position: 'Wohnungseigentümerin',
          content: 'Wir haben PLANY für die Renovierung unserer Wohnung engagiert und sie haben unseren Raum wunderschön umgestaltet. Ihre Liebe zum Detail und die qualitativ hochwertige Handwerkskunst sind wirklich beeindruckend. Sehr zu empfehlen!',
          rating: 5
        },
        {
          name: 'Michael Schmidt',
          position: 'Restaurantbesitzer',
          content: 'PLANY hat das Fit-out unseres Restaurants mit Professionalität und Kreativität umgesetzt. Sie haben einen Raum gestaltet, der die Atmosphäre, die wir wollten, perfekt einfängt, und unsere Kunden lieben es.',
          rating: 5
        }
      ]
    }
  },
  contact: {
    en: {
      title: 'Contact Us',
      subtitle: 'Get In Touch',
      form: {
        nameLabel: 'Your Name',
        emailLabel: 'Email Address',
        phoneLabel: 'Phone Number',
        messageLabel: 'Your Message',
        submitText: 'Send Message',
        successMessage: 'Your message has been sent successfully!',
        errorMessage: 'There was an error sending your message. Please try again.'
      },
      addressTitle: 'Address',
      address: ['123 Business Street', 'Warsaw, 00-000', 'Poland'],
      phoneTitle: 'Phone',
      phone: '+48 123 456 789',
      emailTitle: 'Email',
      email: 'info@plany.com',
      workingHoursTitle: 'Working Hours',
      workingHours: [
        { days: 'Monday - Friday', hours: '9:00 - 18:00' },
        { days: 'Saturday', hours: '10:00 - 15:00' },
        { days: 'Sunday', hours: 'Closed' }
      ]
    },
    pl: {
      title: 'Kontakt',
      subtitle: 'Skontaktuj się z nami',
      form: {
        nameLabel: 'Twoje imię',
        emailLabel: 'Adres email',
        phoneLabel: 'Numer telefonu',
        messageLabel: 'Twoja wiadomość',
        submitText: 'Wyślij wiadomość',
        successMessage: 'Twoja wiadomość została wysłana pomyślnie!',
        errorMessage: 'Wystąpił błąd podczas wysyłania wiadomości. Proszę spróbować ponownie.'
      },
      addressTitle: 'Adres',
      address: ['ul. Biznesowa 123', 'Warszawa, 00-000', 'Polska'],
      phoneTitle: 'Telefon',
      phone: '+48 123 456 789',
      emailTitle: 'Email',
      email: 'info@plany.com',
      workingHoursTitle: 'Godziny pracy',
      workingHours: [
        { days: 'Poniedziałek - Piątek', hours: '9:00 - 18:00' },
        { days: 'Sobota', hours: '10:00 - 15:00' },
        { days: 'Niedziela', hours: 'Zamknięte' }
      ]
    },
    ua: {
      title: 'Зв\'яжіться з нами',
      subtitle: 'Напишіть нам',
      form: {
        nameLabel: 'Ваше ім\'я',
        emailLabel: 'Електронна адреса',
        phoneLabel: 'Номер телефону',
        messageLabel: 'Ваше повідомлення',
        submitText: 'Надіслати повідомлення',
        successMessage: 'Ваше повідомлення було успішно надіслано!',
        errorMessage: 'Сталася помилка під час надсилання вашого повідомлення. Будь ласка, спробуйте ще раз.'
      },
      addressTitle: 'Адреса',
      address: ['вул. Бізнесова 123', 'Варшава, 00-000', 'Польща'],
      phoneTitle: 'Телефон',
      phone: '+48 123 456 789',
      emailTitle: 'Email',
      email: 'info@plany.com',
      workingHoursTitle: 'Графік роботи',
      workingHours: [
        { days: 'Понеділок - П\'ятниця', hours: '9:00 - 18:00' },
        { days: 'Субота', hours: '10:00 - 15:00' },
        { days: 'Неділя', hours: 'Закрито' }
      ]
    },
    de: {
      title: 'Kontakt',
      subtitle: 'Nehmen Sie Kontakt auf',
      form: {
        nameLabel: 'Ihr Name',
        emailLabel: 'E-Mail-Adresse',
        phoneLabel: 'Telefonnummer',
        messageLabel: 'Ihre Nachricht',
        submitText: 'Nachricht senden',
        successMessage: 'Ihre Nachricht wurde erfolgreich gesendet!',
        errorMessage: 'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.'
      },
      addressTitle: 'Adresse',
      address: ['Geschäftsstraße 123', 'Warschau, 00-000', 'Polen'],
      phoneTitle: 'Telefon',
      phone: '+48 123 456 789',
      emailTitle: 'E-Mail',
      email: 'info@plany.com',
      workingHoursTitle: 'Öffnungszeiten',
      workingHours: [
        { days: 'Montag - Freitag', hours: '9:00 - 18:00' },
        { days: 'Samstag', hours: '10:00 - 15:00' },
        { days: 'Sonntag', hours: 'Geschlossen' }
      ]
    }
  }
};