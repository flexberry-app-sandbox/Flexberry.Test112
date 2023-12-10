package Test11.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test11.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Товары
 */
@Entity(name = "IISTest11Товары")
@Table(schema = "public", name = "Товары")
public class Tovary {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодТовара")
    private Integer кодтовара;

    @Column(name = "Название")
    private String название;

    @Column(name = "ЦенаЗаЕд")
    private Double ценазаед;

    @Column(name = "Количество")
    private Integer количество;


    public Tovary() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодТовара() {
      return кодтовара;
    }

    public void setКодТовара(Integer кодтовара) {
      this.кодтовара = кодтовара;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }

    public Double getЦенаЗаЕд() {
      return ценазаед;
    }

    public void setЦенаЗаЕд(Double ценазаед) {
      this.ценазаед = ценазаед;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }


}