package com.JB.example.CovidBackEnd;

import com.JB.example.CovidBackEnd.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import com.JB.example.CovidBackEnd.BookingRepository;

@Component
public class DataLoader  implements ApplicationRunner {

    @Autowired
    BookingRepository BookingRepository;

    @Override
    public void run(ApplicationArguments args) {
        Booking booking1 = new Booking("John", "Boyle", "jb@email.com", "121122", "Mon Aug 17 2020 11:02:21 GMT+0100 (British Summer Time)");
        BookingRepository.save(booking1);

    }

}
