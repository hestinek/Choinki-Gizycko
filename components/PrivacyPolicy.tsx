import React, { useState } from 'react';

interface PrivacyPolicyProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen = false, onClose }) => {
  const [open, setOpen] = useState(isOpen);

  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="bg-transparent border-0 cursor-pointer underline text-blue-600 hover:text-blue-800 p-0 text-inherit"
        aria-label="Otwórz Politykę Prywatności"
      >
        Polityka Prywatności
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]" onClick={handleClose}>
          <div
            className="bg-white rounded-lg shadow-lg max-w-[800px] max-h-[80vh] overflow-y-auto w-[90%] z-[1001]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-5 border-b border-gray-200">
              <h2 className="m-0 text-2xl font-semibold">Polityka Prywatności</h2>
              <button
                className="bg-transparent border-0 text-[28px] cursor-pointer text-gray-600 hover:text-black p-0 w-8 h-8 flex items-center justify-center"
                onClick={handleClose}
                aria-label="Zamknij Politykę Prywatności"
              >
                ×
              </button>
            </div>

            <div className="p-5 text-sm leading-relaxed text-gray-800">
              <section className="mb-5">
                <h3 className="text-base font-semibold my-4 text-gray-900">1. Wprowadzenie</h3>
                <p className="my-2">
                  Witamy w Plantacji Choinek Soldany. Jesteśmy zobowiązani do ochrony Twojej prywatności i zapewnienia pozytywnych doświadczeń podczas korzystania z naszej strony internetowej i aplikacji.
                </p>
              </section>

              <section className="mb-5">
                <h3 className="text-base font-semibold my-4 text-gray-900">2. Jakie dane zbieramy</h3>
                <p className="my-2">
                  Możemy zbierać informacje o Tobie w następujący sposób:
                </p>
                <ul className="my-2 pl-5 list-disc">
                  <li className="my-1.5"><strong>Dane osobowe:</strong> Imię, adres e-mail, numer telefonu i inne szczegóły, które podajesz bezpośrednio.</li>
                  <li className="my-1.5"><strong>Dane o użytkowaniu:</strong> Informacje o tym, jak korzystasz z naszych usług, w tym adres IP, typ przeglądarki i odwiedzane strony.</li>
                  <li className="my-1.5"><strong>Pliki cookies:</strong> Używamy plików cookies, aby poprawić Twoje doświadczenia i analizować sposób korzystania z witryny.</li>
                </ul>
              </section>

              <section className="mb-5">
                <h3 className="text-base font-semibold my-4 text-gray-900">3. Jak wykorzystujemy Twoje dane</h3>
                <p className="my-2">
                  Wykorzystujemy zebrane informacje w celu:
                </p>
                <ul className="my-2 pl-5 list-disc">
                  <li className="my-1.5">Świadczenia i ulepszania naszych usług</li>
                  <li className="my-1.5">Komunikacji z Tobą w sprawie aktualizacji i ofert</li>
                  <li className="my-1.5">Analizy wzorców użytkowania i preferencji</li>
                  <li className="my-1.5">Zapewnienia bezpieczeństwa i zapobiegania oszustwom</li>
                </ul>
              </section>

              <section className="mb-5">
                <h3 className="text-base font-semibold my-4 text-gray-900">4. Ochrona danych</h3>
                <p className="my-2">
                  Wdrażamy odpowiednie środki techniczne i organizacyjne w celu ochrony Twoich danych osobowych przed nieuprawnionym dostępem, zmianą, ujawnieniem lub zniszczeniem.
                </p>
              </section>

              <section className="mb-5">
                <h3 className="text-base font-semibold my-4 text-gray-900">5. Udostępnianie danych</h3>
                <p className="my-2">
                  Nie sprzedajemy ani nie wynajmujemy Twoich danych osobowych stronom trzecim. Możemy udostępniać informacje dostawcom usług, którzy pomagają nam w prowadzeniu naszej witryny i prowadzeniu działalności, wszystko na zasadzie zobowiązań do zachowania poufności.
                </p>
              </section>

              <section className="mb-5">
                <h3 className="text-base font-semibold my-4 text-gray-900">6. Twoje prawa</h3>
                <p className="my-2">
                  W zależności od Twojej lokalizacji możesz mieć prawo do:
                </p>
                <ul className="my-2 pl-5 list-disc">
                  <li className="my-1.5">Dostępu do swoich danych osobowych</li>
                  <li className="my-1.5">Korekty nieprawidłowych informacji</li>
                  <li className="my-1.5">Żądania usunięcia Twoich danych</li>
                  <li className="my-1.5">Rezygnacji z określonych komunikatów</li>
                </ul>
              </section>

              <section className="mb-5">
                <h3 className="text-base font-semibold my-4 text-gray-900">7. Kontakt</h3>
                <p className="my-2">
                  Jeśli masz pytania dotyczące niniejszej Polityki Prywatności lub naszych praktyk w zakresie prywatności, skontaktuj się z nami pod adresem:
                </p>
                <p className="my-2">
                  <strong>Email:</strong> kontakt@choinkigizycko.pl<br />
                  <strong>Adres:</strong> Sołdany 28, 11-500 Giżycko
                </p>
              </section>

              <section className="mb-5">
                <h3 className="text-base font-semibold my-4 text-gray-900">8. Aktualizacje polityki</h3>
                <p className="my-2">
                  Możemy od czasu do czasu aktualizować niniejszą Politykę Prywatności. Powiadomimy Cię o wszelkich zmianach, publikując nową Politykę Prywatności na tej stronie i aktualizując datę "Ostatniej aktualizacji".
                </p>
                <p className="my-2">
                  <strong>Ostatnia aktualizacja:</strong> 14 stycznia 2026
                </p>
              </section>
            </div>

            <div className="p-5 border-t border-gray-200 flex justify-end">
              <button
                className="bg-blue-600 hover:bg-blue-800 text-white border-0 py-2.5 px-5 rounded cursor-pointer text-sm font-medium"
                onClick={handleClose}
              >
                Rozumiem
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacyPolicy;
