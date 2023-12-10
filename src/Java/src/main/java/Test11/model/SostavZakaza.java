package Test11.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test11.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: СоставЗаказа
 */
@Entity(name = "IISTest11СоставЗаказа")
@Table(schema = "public", name = "СоставЗаказа")
public class SostavZakaza {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "Стоимость")
    private Double стоимость;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Tovary")
    @Convert("Tovary")
    @Column(name = "Товары", length = 16, unique = true, nullable = false)
    private UUID _tovaryid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Tovary", insertable = false, updatable = false)
    private Tovary tovary;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zakaz")
    @Convert("Zakaz")
    @Column(name = "Заказ", length = 16, unique = true, nullable = false)
    private UUID _zakazid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zakaz", insertable = false, updatable = false)
    private Zakaz zakaz;


    public SostavZakaza() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }

    public Double getСтоимость() {
      return стоимость;
    }

    public void setСтоимость(Double стоимость) {
      this.стоимость = стоимость;
    }


}