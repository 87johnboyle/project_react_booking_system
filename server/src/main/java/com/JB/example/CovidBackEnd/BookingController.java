package com.JB.example.CovidBackEnd;

import com.JB.example.CovidBackEnd.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.JB.example.CovidBackEnd.BookingRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping

public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping(value = "/bookings")
    public ResponseEntity<List<Booking>> getAllBookings(){
        return new ResponseEntity<>(bookingRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/bookings/{id}")
    public ResponseEntity<Optional<Booking>> getBookingById(@PathVariable Long id){
        return new ResponseEntity<>(bookingRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/bookings")
    public ResponseEntity createBooking(@RequestBody Booking booking){
        bookingRepository.save(booking);
        return new ResponseEntity<>("Booking Confirmed", HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/bookings/{id}")
    public ResponseEntity<Optional<Booking>> deleteBooking(@PathVariable Long id){
        bookingRepository.deleteById(id);
        return new ResponseEntity("Booking Deleted", HttpStatus.OK);
    }

}
